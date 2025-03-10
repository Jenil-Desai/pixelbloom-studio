import { WebhookEvent } from "@clerk/nextjs/server";
import { db } from "@repo/db";
import { NextResponse } from "next/server";
import { Webhook } from "svix";
import { logger } from "@repo/utils";
import { headers } from "next/headers";

// Configure runtime - use Node.js runtime instead of Edge for better compatibility
export const runtime = "nodejs";
export const dynamic = "force-dynamic"; // Ensure the route isn't statically optimized

export async function POST(req: Request) {
  logger.info("[SERVER]: POST webhook endpoint accessed");

  try {
    // Log request details
    const method = req.method;
    const url = req.url;
    logger.info(`[SERVER]: Request details - Method: ${method}, URL: ${url}`);

    // 1. Verify the webhook
    const CLERK_WEBHOOK_SECRET = process.env.SIGNING_SECRET;

    if (!CLERK_WEBHOOK_SECRET) {
      logger.error("[SERVER]: Missing SIGNING_SECRET environment variable");
      return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
    }

    // Get the headers
    const headerPayload = await headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    // Debug headers
    logger.info(`[SERVER]: Headers - svix-id: ${svix_id ? "present" : "missing"}, svix-timestamp: ${svix_timestamp ? "present" : "missing"}, svix-signature: ${svix_signature ? "present" : "missing"}`);

    if (!svix_id || !svix_timestamp || !svix_signature) {
      logger.error("[SERVER]: Missing Svix headers");
      return NextResponse.json({ error: "Missing webhook headers" }, { status: 400 });
    }

    // Get the body
    const payload = await req.json();
    const body = JSON.stringify(payload);

    // Create a new Svix instance with your secret
    const wh = new Webhook(CLERK_WEBHOOK_SECRET);

    let evt: WebhookEvent;

    try {
      // Verify the webhook
      evt = wh.verify(body, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      }) as WebhookEvent;

      logger.info(`[SERVER]: Webhook verified successfully! Event type: ${evt.type}`);
    } catch (err) {
      logger.error("[SERVER]: Error verifying webhook:", err);
      return NextResponse.json({ error: "Error verifying webhook" }, { status: 400 });
    }

    // Extract user ID from event data
    const { id: clerkUserId } = evt.data;
    if (!clerkUserId) {
      logger.error("[SERVER]: Error: No user ID provided in webhook data");
      return NextResponse.json({ error: "No user ID provided" }, { status: 400 });
    }

    // Handle different webhook event types
    try {
      let artist = null;
      switch (evt.type) {
        case "user.created": {
          try {
            // Check if user has an email
            if (!evt.data.email_addresses || evt.data.email_addresses.length === 0) {
              logger.error(`[SERVER]: No email addresses found for user: ${clerkUserId}`);
              return NextResponse.json({ error: "No email address provided" }, { status: 400 });
            }

            // Create artist in database
            artist = await db.artists.create({
              data: {
                clerkId: clerkUserId,
                email: evt.data.email_addresses[0].email_address,
              },
            });
            logger.success(`[SERVER]: Artist created with clerkId: ${clerkUserId}`);
          } catch (dbError) {
            logger.error("[SERVER]: Error creating artist in database:", dbError);
            return NextResponse.json({ error: "Error creating artist in database" }, { status: 500 });
          }
          break;
        }
        case "user.deleted": {
          try {
            // Delete artist from database
            await db.artists.delete({
              where: { clerkId: clerkUserId },
            });
            logger.success(`[SERVER]: Artist deleted with clerkId: ${clerkUserId}`);
          } catch (dbError) {
            logger.error("[SERVER]: Error deleting artist from database:", dbError);
            return NextResponse.json({ error: "Error deleting artist from database" }, { status: 500 });
          }
          break;
        }
        default:
          logger.info(`[SERVER]: Unhandled event type: ${evt.type}`);
          break;
      }

      return NextResponse.json({ success: true, eventType: evt.type }, { status: 200 });
    } catch (error) {
      logger.error("[SERVER]: Webhook processing failed:", error);
      return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
    }
  } catch (error) {
    logger.error("[SERVER]: Unhandled error in webhook handler:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

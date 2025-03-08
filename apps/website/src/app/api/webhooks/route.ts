import { WebhookEvent } from "@clerk/nextjs/server";
import { db } from "@repo/db";
import { NextResponse } from "next/server";
import { Webhook } from "svix";
import { logger } from "@repo/utils";
import { headers } from "next/headers";

export async function POST(request: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    logger.error("[SERVER]: Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env");
    return NextResponse.json({ error: "Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env" });
  }

  const wh = new Webhook(SIGNING_SECRET);

  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error: Missing Svix headers", {
      status: 400,
    });
  }

  // Get body
  const payload = await request.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error: Could not verify webhook:", err);
    return new Response("Error: Verification error", {
      status: 400,
    });
  }

  const { id: clerkUserId } = evt.data;
  if (!clerkUserId) {
    logger.error("[SERVER] : Error: No user ID provided in webhook data");
    return NextResponse.json({ error: "No user ID provided" }, { status: 400 });
  }

  try {
    let artist = null;
    switch (evt.type) {
      case "user.created": {
        try {
          artist = await db.artists.create({
            data: {
              clerkId: clerkUserId,
              email: evt.data.email_addresses[0].email_address,
            },
          });
          logger.success(`[SERVER] : Artist created with clerkId: ${clerkUserId}`);
        } catch (dbError) {
          logger.error("[SERVER] : Error creating artist in database:", dbError);
          return NextResponse.json({ error: "Error creating artist in database" }, { status: 500 });
        }
        break;
      }
      case "user.deleted": {
        try {
          artist = await db.artists.delete({
            where: { clerkId: clerkUserId },
          });
          logger.success(`[SERVER] : Artist deleted with clerkId: ${clerkUserId}`);
        } catch (dbError) {
          logger.error("Error deleting artist from database:", dbError);
          return NextResponse.json({ error: "Error deleting artist from database" }, { status: 500 });
        }
        break;
      }
      default:
        break;
    }

    return NextResponse.json({ artist });
  } catch (error) {
    logger.error("[SERVER] : Webhook processing failed:", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}

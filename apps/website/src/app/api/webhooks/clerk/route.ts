import { WebhookEvent } from "@clerk/nextjs/server";
import { prisma } from "@repo/db";
import { NextResponse } from "next/server";
import { Webhook } from "svix";
import { logger } from "@repo/utils";

const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const headers = request.headers;

    const svixId = headers.get("svix-id");
    const svixTimestamp = headers.get("svix-timestamp");
    const svixSignature = headers.get("svix-signature");

    if (!svixId || !svixTimestamp || !svixSignature) {
      logger.error("[SERVER]: Missing Svix headers");
      return NextResponse.json({ error: "Missing Svix headers" }, { status: 400 });
    }

    const wh = new Webhook(WEBHOOK_SECRET);

    let evt: WebhookEvent;
    try {
      evt = wh.verify(payload, {
        "svix-id": svixId,
        "svix-timestamp": svixTimestamp,
        "svix-signature": svixSignature,
      }) as WebhookEvent;
    } catch (err) {
      logger.error("[SERVER] : Error verifying webhook:", err);
      return NextResponse.json({ error: "Error verifying webhook" }, { status: 400 });
    }

    const { id: clerkUserId } = evt.data;
    if (!clerkUserId) {
      logger.error("[SERVER] : Error: No user ID provided in webhook data");
      return NextResponse.json({ error: "No user ID provided" }, { status: 400 });
    }

    let artist = null;
    switch (evt.type) {
      case "user.created": {
        try {
          artist = await prisma.artists.create({
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
          artist = await prisma.artists.delete({
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

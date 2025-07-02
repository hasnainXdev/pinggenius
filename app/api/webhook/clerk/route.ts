import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import connectDB from "@/database/db";
import WaitlistsUserModel from "@/models/WaitlistsUser";

export async function POST(req: Request) {
    try {
        // ✅ 1. Check Authorization using Clerk's webhook secret
        const headersList = await headers();
        const authHeader = headersList.get("Authorization");
        if (authHeader !== `Bearer ${process.env.CLERK_WEBHOOK_SECRET}`) {
            return new NextResponse("❌ Unauthorized", { status: 401 });
        }

        // ✅ 2. Parse the incoming event from Clerk
        const event: WebhookEvent = await req.json();

        // ✅ 3. Connect to MongoDB
        await connectDB();

        const { id, username } = event.data as any;


        switch (event.type) {
            case "user.created": {
                const email = (event.data as any)?.email_addresses?.[0]?.email_address;

                // ✅ Narrow down the type here safely

                if (!email) {
                    console.warn("No email provided.");
                    break;
                }


                const exists = await WaitlistsUserModel.findOne({ clerkId: id });
                if (!exists) {
                    await WaitlistsUserModel.create({
                        username: username,
                        email,
                        clerkId: id,
                        role: "user",
                    });
                    console.log("✅ User created:", email);
                }
                break;
            }

            case "user.updated": {
                await WaitlistsUserModel.findOneAndUpdate(
                    { clerkId: id },
                    { email, username },
                    { new: true }
                );
                console.log("🔄 User updated:", id);
                break;
            }

            case "user.deleted": {
                await WaitlistsUserModel.findOneAndDelete({ clerkId: id });
                console.log("🗑️ User deleted:", id);
                break;
            }

            default:
                console.log("ℹ️ Unhandled event type:", event.type);
        }

        return NextResponse.json({ status: "ok" }, { status: 200 });
    } catch (err) {
        console.error("❌ Clerk webhook error:", err);
        return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
    }
}

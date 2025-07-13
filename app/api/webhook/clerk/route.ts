import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import connectDB from "@/database/db";
import WaitlistsUser from "@/models/WaitlistsUser";

export async function POST(req: Request) {
    try {
        // ✅ 1. Verify the request using Clerk webhook secret
        const headerList = await headers()
        const authHeader = headerList.get("Authorization")
        if (authHeader !== `Bearer ${process.env.CLERK_WEBHOOK_SECRET}`) {
            return new NextResponse("❌ Unauthorized", { status: 401 });
        }

        // ✅ 2. Parse the event
        const event: WebhookEvent = await req.json();

        // ✅ 3. Connect to DB
        await connectDB();

        const { id, username } = event.data as any;
        const email = (event.data as any)?.email_addresses?.[0]?.email_address;

        // ✅ 4. Handle only user.created for MVP
        if (event.type === "user.created") {
            if (!email) {
                console.warn("⚠️ No email found for new user.");
                return NextResponse.json({ status: "skipped" }, { status: 200 });
            }

            const exists = await WaitlistsUser.findOne({ clerkId: id });
            if (!exists) {
                await WaitlistsUser.create({
                    username: username || `user-${id.slice(-6)}`,
                    email,
                    clerkId: id,
                    isWaitlisted: true,
                    role: "user",
                });
            }
        }

        // Future logic:

        else if (event.type === "user.updated") {
            const email = event.data?.email_addresses?.[0]?.email_address;
            await WaitlistsUser.findOneAndUpdate(
                { clerkId: id },
                { email, username },
                { new: true }
            );
            console.log("🔄 User updated:", id);
        } else if (event.type === "user.deleted") {
            await WaitlistsUser.findOneAndDelete({ clerkId: id });
            console.log("🗑️ User deleted:", id);
        }


        return NextResponse.json({ status: "ok" }, { status: 200 });
    } catch (err) {
        console.error("❌ Clerk webhook error:", err);
        return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
    }
}

import { NextResponse } from "next/server";
import { z } from "zod";
import clientPromise, { dbName } from "../../lib/mongodb";

// Input validation schema
const waitlistSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate input
    const result = waitlistSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 },
      );
    }

    const { email } = result.data;

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db(dbName);
    const collection = db.collection("waitlist");

    // Check if email already exists
    const existing = await collection.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { message: "You're already on the waitlist!" },
        { status: 409 },
      );
    }

    // Add to waitlist
    await collection.insertOne({
      email,
      joinedAt: new Date(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Successfully joined the waitlist!",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Waitlist error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to join waitlist. Please try again.",
      },
      { status: 500 },
    );
  }
}

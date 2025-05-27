import { NextResponse } from "next/server";
import clientPromise, { dbName } from "../../lib/mongodb";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(dbName);

    const existing = await db.collection("waitlist").findOne({ email });
    if (existing) {
      return NextResponse.json(
        { message: "Email already in waitlist" },
        { status: 409 },
      );
    }

    await db.collection("waitlist").insertOne({
      email,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "You're on the waitlist!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
};

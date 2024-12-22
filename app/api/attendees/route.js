import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Attendee from "@/models/Attendee";

export async function GET() {
  await dbConnect();
  const attendees = await Attendee.find({}).populate("events");
  return NextResponse.json(attendees);
}

export async function POST(request) {
  await dbConnect();
  const data = await request.json();
  const attendee = await Attendee.create(data);
  return NextResponse.json(attendee, { status: 201 });
}

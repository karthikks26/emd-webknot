import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Event from "@/models/Event";

export async function GET() {
  await dbConnect();
  const events = await Event.find({}).populate("attendees");
  return NextResponse.json(events);
}

export async function POST(request) {
  await dbConnect();
  const data = await request.json();
  const event = await Event.create(data);
  return NextResponse.json(event, { status: 201 });
}

import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Event from "@/models/Event";

export async function GET(request, { params }) {
  await dbConnect();
  const event = await Event.findById(params.id).populate("attendees");
  if (!event) {
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }
  return NextResponse.json(event);
}

export async function PUT(request, { params }) {
  await dbConnect();
  const data = await request.json();
  const event = await Event.findByIdAndUpdate(params.id, data, {
    new: true,
    runValidators: true,
  });
  if (!event) {
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }
  return NextResponse.json(event);
}

export async function DELETE(request, { params }) {
  await dbConnect();
  const event = await Event.findByIdAndDelete(params.id);
  if (!event) {
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }
  return NextResponse.json({ message: "Event deleted successfully" });
}

import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Attendee from "@/models/Attendee";

export async function GET(request, { params }) {
  await dbConnect();
  const attendee = await Attendee.findById(params.id).populate("events");
  if (!attendee) {
    return NextResponse.json({ error: "Attendee not found" }, { status: 404 });
  }
  return NextResponse.json(attendee);
}

export async function PUT(request, { params }) {
  await dbConnect();
  const data = await request.json();
  const attendee = await Attendee.findByIdAndUpdate(params.id, data, {
    new: true,
    runValidators: true,
  });
  if (!attendee) {
    return NextResponse.json({ error: "Attendee not found" }, { status: 404 });
  }
  return NextResponse.json(attendee);
}

export async function DELETE(request, { params }) {
  await dbConnect();
  const attendee = await Attendee.findByIdAndDelete(params.id);
  if (!attendee) {
    return NextResponse.json({ error: "Attendee not found" }, { status: 404 });
  }
  return NextResponse.json({ message: "Attendee deleted successfully" });
}

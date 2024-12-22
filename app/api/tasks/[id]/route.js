import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Task from "@/models/Task";

export async function GET(request, { params }) {
  await dbConnect();
  const task = await Task.findById(params.id).populate("assignedTo event");
  if (!task) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }
  return NextResponse.json(task);
}

export async function PUT(request, { params }) {
  await dbConnect();
  const data = await request.json();
  const task = await Task.findByIdAndUpdate(params.id, data, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }
  return NextResponse.json(task);
}

export async function DELETE(request, { params }) {
  await dbConnect();
  const task = await Task.findByIdAndDelete(params.id);
  if (!task) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }
  return NextResponse.json({ message: "Task deleted successfully" });
}

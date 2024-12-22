import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Task from "@/models/Task";

export async function GET() {
  await dbConnect();
  const tasks = await Task.find({}).populate("assignedTo event");
  return NextResponse.json(tasks);
}

export async function POST(request) {
  await dbConnect();
  const data = await request.json();
  const task = await Task.create(data);
  return NextResponse.json(task, { status: 201 });
}

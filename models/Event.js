import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide an event name"],
      trim: true,
      maxlength: [50, "Name cannot be more than 50 characters"],
    },
    description: {
      type: String,
      required: [true, "Please provide an event description"],
      maxlength: [500, "Description cannot be more than 500 characters"],
    },
    location: {
      type: String,
      required: [true, "Please provide an event location"],
      trim: true,
    },
    date: {
      type: Date,
      required: [true, "Please provide an event date"],
    },
    attendees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Attendee",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.models.Event || mongoose.model("Event", EventSchema);

export default Event;

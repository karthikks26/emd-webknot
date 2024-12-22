import mongoose from "mongoose";

const AttendeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide an attendee name"],
      trim: true,
      maxlength: [50, "Name cannot be more than 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Please provide an attendee email"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    events: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Attendee =
  mongoose.models.Attendee || mongoose.model("Attendee", AttendeeSchema);

export default Attendee;

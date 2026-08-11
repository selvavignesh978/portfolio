import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,

      // ✅ Email validation
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
  },
  { timestamps: true }
);

// ✅ Prevent model overwrite error in dev (important)
const Subscriber =
  mongoose.models.Subscriber ||
  mongoose.model("Subscriber", subscriberSchema);

export default Subscriber;
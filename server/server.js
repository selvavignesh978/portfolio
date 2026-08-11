import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import Subscriber from "./models/Subscriber.js"; // ✅ FIXED NAME

dotenv.config("https://portfolio-2vmc.onrender.com");

const app = express();

app.use(cors());
app.use(express.json());

// DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error(err));

// Contact Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
}, { timestamps: true });

const Contact = mongoose.model("Contact", contactSchema);

// Routes
app.get("/", (req, res) => {
  res.json({ success: true, message: "API running" });
});

app.post("/contact", async (req, res) => {
  try {
    const saved = await Contact.create(req.body);
    res.json({ success: true, data: saved });
  } catch {
    res.status(500).json({ success: false });
  }
});

app.post("/subscribe", async (req, res) => {
  try {
    const saved = await Subscriber.create(req.body);
    res.json({ success: true, data: saved });
  } catch (err) {
    if (err.code === 11000) {
      return res.json({ success: false, message: "Already subscribed" });
    }
    res.status(500).json({ success: false });
  }
});

app.get("/subscribe", async (req, res) => {
  const data = await Subscriber.find();
  res.json({ success: true, data });
});

app.listen(5000, () => {
  console.log("🚀 Server running on 5000");
});
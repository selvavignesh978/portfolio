import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { profile } from "../data/portfolioData";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent!");
        setForm({
          name: "",
          email: "",
          phone: "",
          country: "",
          message: "",
        });
      } else {
        alert("Failed to send");
      }
    } catch (error) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    // ✅ FIX: add id="contact"
    <section id="contact" className="min-h-screen bg-[#020617] flex items-center justify-center px-6 scroll-mt-32">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT INFO */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Let's <span className="text-orange-500">Connect</span>
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            I'm open to entry-level MERN Stack Developer opportunities. Feel free to
            reach out — I'll get back to you as soon as I can.
          </p>

          <div className="space-y-4 text-gray-300">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-orange-400 transition">
              <FaEnvelope className="text-orange-500" /> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-orange-400 transition">
              <FaPhone className="text-orange-500" /> {profile.phone}
            </a>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-orange-500" /> {profile.location}
            </div>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-orange-400 transition">
              <FaGithub className="text-orange-500" /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-orange-400 transition">
              <FaLinkedin className="text-orange-500" /> LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-[#0f172a] p-8 rounded-xl shadow-lg border border-gray-800">
          <h2 className="text-3xl font-semibold mb-6 text-white">
            Get In <span className="text-orange-500">Touch</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#020617] border border-gray-700 rounded text-white outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#020617] border border-gray-700 rounded text-white outline-none"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 bg-[#020617] border border-gray-700 rounded text-white outline-none"
            />

            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full p-3 bg-[#020617] border border-gray-700 rounded text-white outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 transition py-3 rounded text-white font-medium"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
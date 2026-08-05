import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.message
    ) {
      alert("Please fill all fields.");
      return;
    }

    alert("Message Sent Successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">

      <Reveal>

        <div className="max-w-3xl mx-auto px-8">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center"
          >
            Contact Us
          </motion.h2>

          <p className="text-center text-gray-500 mt-4 mb-12">
            Let's build something amazing together.
          </p>

          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            onSubmit={handleSubmit}
            className="bg-gray-100 rounded-2xl shadow-xl p-8 space-y-6"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border outline-none focus:ring-2 focus:ring-blue-600"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border outline-none focus:ring-2 focus:ring-blue-600"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300 font-semibold"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </Reveal>

    </section>
  );
}

export default Contact;
"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactForm = ({ translation }: { translation: any }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(translation.contact.sending);

    try {
      const response = await emailjs.send(
        "service_1ioqr29",
        "template_8jeha3l",
        {
          from_name: formData.name,
          to_name: "SmartVentraWindow",
          reply_to: formData.email,
          message: formData.message,
        },
        "6I16Yyx00-iulQTk2"
      );

      if (response.status === 200) {
        setStatus(translation.contact.success);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send.");
      }
    } catch (error) {
      console.error("Send error:", error);
      setStatus(translation.contact.error);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-32 px-6 bg-gradient-to-r from-[#0D1B2A] via-[#010815] to-[#122131] shadow-lg text-white relative overflow-hidden"
    >
      {/* Glow achtergrond */}
      <div className="absolute inset-0 bg-gradient-radial from-yellow-300/10 via-transparent to-transparent blur-3xl z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto bg-white/5 p-12 rounded-2xl border border-white/10 shadow-2xl backdrop-blur relative z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 text-center mb-10">
          {translation.contact.title}
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder={translation.contact.name_placeholder}
            value={formData.name}
            onChange={handleChange}
            required
            className="col-span-1 sm:col-span-2 p-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-yellow-400"
          />
          <input
            type="email"
            name="email"
            placeholder={translation.contact.email_placeholder}
            value={formData.email}
            onChange={handleChange}
            required
            className="col-span-1 sm:col-span-2 p-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-yellow-400"
          />
          <textarea
            name="message"
            placeholder={translation.contact.message_placeholder}
            value={formData.message}
            onChange={handleChange}
            required
            className="col-span-1 sm:col-span-2 p-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-yellow-400 h-40"
          />
          <button
            type="submit"
            className="col-span-1 sm:col-span-2 bg-yellow-400 text-black font-bold py-4 rounded-lg shadow-lg hover:bg-yellow-500 transition-all"
          >
            {translation.contact.submit_button}
          </button>
        </form>

        {status && <p className="text-center mt-6 text-gray-300">{status}</p>}
      </motion.div>
    </section>
  );
};

export default ContactForm;

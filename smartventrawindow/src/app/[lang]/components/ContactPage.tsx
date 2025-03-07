"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";


const ContactForm = () => {
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
    setStatus("Versturen...");

    try {
      const response = await emailjs.send(
        "service_1ioqr29",
        "template_8jeha3l", 
        {
          from_name: formData.name,
          to_name: "SmartVentraWindow ", 
          reply_to: formData.email,
          message: formData.message,
        },
        "6I16Yyx00-iulQTk2" 
      );

      if (response.status === 200) {
        setStatus("Bericht verzonden! ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Fout bij verzenden.");
      }
    } catch (error) {
      console.error("Fout bij verzenden:", error);
      setStatus("Fout bij verzenden. Probeer opnieuw. ❌");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0D1117] py-20">
      <div className="w-full max-w-xl bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-yellow-400 text-center mb-4">Neem Contact Op 📩</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Naam"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-yellow-400"
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-yellow-400"
        />
        <textarea
          name="message"
          placeholder="Uw bericht..."
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-yellow-400 h-32"
        />
        <button
          type="submit"
          className="w-full bg-yellow-400 text-gray-900 font-bold py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition-all"
        >
          Verstuur Bericht
        </button>
      </form>
      {status && <p className="text-center mt-4 text-gray-300">{status}</p>}
    </div>
    </div>

  );
};

export default ContactForm;
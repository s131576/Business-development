"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import jafarImg from "../../../../public/frame.jpg";
import rachadImg from "../../../../public/frame.jpg";
import sofianeImg from "../../../../public/frame.jpg";
import dashiImg from "../../../../public/frame.jpg";
import benImg from "../../../../public/frame.jpg";

const teamMembers = [
  { 
    name: "Ben", 
    role: "Marketing & Sales", 
    image: benImg,
    funFact: "Loves to brainstorm new crazy campaign ideas 🎉",
    color: "#FFC300"
  },
  { 
    name: "Enes", 
    role: "Lead Designer", 
    image: dashiImg,
    funFact: "Sketching ideas 24/7 with a huge coffee ☕",
    color: "#FF5733"
  },
  { 
    name: "Jafar", 
    role: "CEO & Visionary", 
    image: jafarImg,
    funFact: "Mastermind behind all our wildest goals 🚀",
    color: "#C70039"
  },
  { 
    name: "Rachad", 
    role: "Full-Stack Wizard", 
    image: rachadImg,
    funFact: "Can debug code faster than you blink 👨‍💻",
    color: "#900C3F"
  },
  { 
    name: "Sofiane", 
    role: "Product Manager", 
    image: sofianeImg,
    funFact: "Always knows exactly what the users want 📋",
    color: "#581845"
  },
];

const AboutPage = ({ translation }: { translation: any }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen text-white px-6 py-20 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-20"
      >
        <h1 className="text-5xl font-extrabold mb-4 text-yellow-400 drop-shadow-lg">
          {translation.about.title} 🤪
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {translation.about.description}
        </p>
      </motion.div>

      {/* Main layout with vertical list + side popup */}
      <div className="flex flex-col md:flex-row gap-12 items-start justify-center">
        {/* Cards vertical stack */}
        <div className="flex flex-col gap-6 w-full max-w-md">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              layout
              className={`relative bg-[#222B3A] rounded-2xl shadow-2xl p-6 cursor-pointer flex items-center gap-6 select-none
                ${openIndex === idx ? "ring-4 ring-yellow-400 z-10" : "opacity-70 hover:opacity-100"}`}
              onClick={() => toggleDropdown(idx)}
              whileHover={{ scale: 1.05, boxShadow: `0 0 15px ${member.color}` }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
                className="rounded-full border-4 border-yellow-400 shadow-md flex-shrink-0"
                draggable={false}
              />
              <div>
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-yellow-300 font-semibold">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Popup info box */}
        <AnimatePresence>
          {openIndex !== null && (
            <motion.div
              key="popup"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4 }}
              className="bg-yellow-400 text-[#0D1117] rounded-xl p-8 max-w-xl shadow-xl select-none"
            >
              <h3 className="text-3xl font-extrabold mb-4">{teamMembers[openIndex].name}</h3>
              <p className="mb-2 font-semibold text-lg">{teamMembers[openIndex].role}</p>
              <p className="text-lg">{teamMembers[openIndex].funFact}</p>
              <button
                onClick={() => setOpenIndex(null)}
                className="mt-6 bg-[#0D1117] text-yellow-400 font-bold px-4 py-2 rounded-lg hover:bg-gray-900 transition"
              >
                Sluit
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AboutPage;

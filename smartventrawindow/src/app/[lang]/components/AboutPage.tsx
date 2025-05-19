"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import avatarBen from "../../../../public/avatarlogo.png";
import avatarDashi from "../../../../public/avatarlogo.png";
import avatarJafar from "../../../../public/avatarlogo.png";
import avatarRachad from "../../../../public/avatarlogo.png";
import avatarSofiane from "../../../../public/avatarlogo.png";

const AboutPage = ({ translation }: { translation: any }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Hardcoded volgorde (voor images en kleur)
  const rawTeam = [
    { name: "Ben", image: avatarBen, color: "#FFC300" },
    { name: "Enes", image: avatarDashi, color: "#FF5733" },
    { name: "Jafar", image: avatarJafar, color: "#C70039" },
    { name: "Rachad", image: avatarRachad, color: "#900C3F" },
    { name: "Sofiane", image: avatarSofiane, color: "#581845" },
  ];

  // Vertaalde teksten ophalen per naam
  const translatedTeam = rawTeam.map((member) => {
    const translated = translation.about.team_members.find(
      (t: any) => t.name === member.name
    ) || { role: "", funFact: "" };

    return {
      ...member,
      role: translated.role,
      funFact: translated.funFact,
    };
  });

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
          {translation.about.title}
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {translation.about.description}
        </p>
      </motion.div>

      {/* Cards + modals */}
      <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto">
        {translatedTeam.map((member, idx) => (
          <div key={member.name} className="flex gap-6 items-start">
            {/* Card */}
            <motion.div
              layout
              className={`relative bg-[#222B3A] rounded-2xl shadow-2xl p-6 cursor-pointer flex items-center gap-6 select-none w-full max-w-md
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

            {/* Popup naast deze kaart */}
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  key="popup"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.4 }}
                  className="bg-yellow-400 text-[#0D1117] rounded-xl p-6 max-w-md shadow-xl w-full"
                >
                  <h3 className="text-2xl font-extrabold mb-2">{member.name}</h3>
                  <p className="mb-1 font-semibold">{member.role}</p>
                  <p>{member.funFact}</p>
                  <button
                    onClick={() => setOpenIndex(null)}
                    className="mt-4 bg-[#0D1117] text-yellow-400 font-bold px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                  >
                    Sluit
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;

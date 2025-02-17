"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";


import background from "../../../../public/logo4.jpg";
import jafarImg from "../../../../public/frame.jpg";
import rachadImg from "../../../../public/frame.jpg";
import sofianeImg from "../../../../public/frame.jpg";
import dashiImg from "../../../../public/frame.jpg";
import benImg from "../../../../public/frame.jpg";

const teamMembers = [
  { name: "Jafar", role: "CEO & Visionair", image: jafarImg },
  { name: "Rachad", role: "Full-Stack Wizard", image: rachadImg },
  { name: "Sofiane", role: "Product Manager", image: sofianeImg },
  { name: "Enes", role: "Lead Designer", image: dashiImg },
  { name: "Ben", role: "Marketing & Sales", image: benImg },
];

const AboutPage = () => {
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/nl") ? "nl" : pathname.startsWith("/en") ? "en" : "fr";

  return (
    <div className="relative w-full min-h-screen bg-[#0D1117] text-white text-center px-4 sm:px-6 md:px-8">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center text-center">
        {/* Achtergrondafbeelding */}
        <Image
          src={background}
          alt="Startup Background"
          objectFit="cover"
          className="absolute inset-0 w-full h-full opacity-50"
        />
        {/* Donkere overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Tekst en logo */}
        {/* <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 flex flex-col items-center px-6"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-yellow-400">
            Welkom bij SmartVentraWindow 🚀
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl text-gray-300">
            Wij zijn een startup met een missie: innovatie in ramen en ventilatie! 🏢🌬️
            Een team van visionairs, techneuten en creatievelingen brengt dit tot leven.
          </p>
        </motion.div> */}
      </div>

      {/* Over Ons Sectie */}
      <div className="py-10 px-6 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-3xl sm:text-4xl font-bold text-yellow-400"
        >
          Wie zijn wij? 🤔
        </motion.h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300">
          SmartVentraWindow is een startup die ramen slimmer maakt. Wij combineren technologie
          met design om de ventilatie en isolatie van woningen te optimaliseren.
          Onze reis is net begonnen, maar we hebben grootse plannen! 🌍
        </p>
      </div>

      {/* Team Sectie */}
      <div className="py-16 bg-gray-800">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400">🚀 Ons Team</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-gray-700 rounded-lg shadow-lg p-6 text-center max-w-xs"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={120}
                height={120}
                className="mx-auto rounded-full border-4 border-yellow-400"
              />
              <h3 className="mt-4 text-xl sm:text-2xl font-bold">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Oproep tot Actie */}
      <div className="py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-3xl sm:text-4xl font-bold text-yellow-400"
        >
          Klaar om de toekomst van ramen te ontdekken? 🌍
        </motion.h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300">
          Word een van onze eerste klanten of partners en help ons innoveren!
          Contacteer ons vandaag en ontdek hoe SmartVentraWindow jouw huis kan verbeteren. 🏠
        </p>
        <motion.a
          href={`/${currentLang}/contact`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 inline-block bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition-all"
        >
          Neem contact op 📩
        </motion.a>
      </div>
    </div>
  );
};

export default AboutPage;

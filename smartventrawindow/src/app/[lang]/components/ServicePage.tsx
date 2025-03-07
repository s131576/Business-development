"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

import sensorImg from "../../../../public/frame.jpg"; 
import raamImg from "../../../../public/frame.jpg";

const ServicesPage = ({ translation }: { translation: any }) => {
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/nl") ? "nl" : pathname.startsWith("/en") ? "en" : "fr";

  return (
    <div className="relative bg-[#0D1117] text-white py-20 px-6">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl font-extrabold text-yellow-400"
        >
          {translation.service.title} 🚀
        </motion.h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          {translation.service.description}
        </p>
      </div>

      {/* Call to Quote */}
      <div className="py-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl font-bold text-yellow-400"
        >
          {translation.service.cta_title} 📩
        </motion.h2>

        <motion.a
          href={`/${currentLang}/quote`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 inline-block bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition-all"
        >
          {translation.service.cta_button}
        </motion.a>
      </div>

      {/* Sensoren Sectie */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">🔧 {translation.service.sensors_title}</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {translation.service.sensors.map((sensor: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center flex flex-col justify-between min-h-72"
            >
              <div>
                <Image src={sensorImg} alt={sensor.name} width={200} height={200} className="mx-auto rounded-lg shadow-md" />
                <p className="text-yellow-400 font-bold mt-4 text-lg">
                  €{sensor.price}
                </p>
                <h3 className="mt-4 text-2xl font-bold">{sensor.name}</h3>
                <p className="text-gray-300 mt-2">{sensor.description}</p>
              </div>
              <button className="mt-4 bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-500 transition-all">
                {translation.service.order_button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ramen Sectie */}
      <div>
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">🏠 {translation.service.windows_title}</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {translation.service.windows.map((window: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center flex flex-col justify-between min-h-72"
            >
              <div>
                <Image src={raamImg} alt={window.name} width={200} height={200} className="mx-auto rounded-lg shadow-md" />
                <p className="text-yellow-400 font-bold mt-4 text-lg">€{window.price}</p>
                <h3 className="mt-4 text-2xl font-bold">{window.name}</h3>
                <p className="text-gray-300 mt-2">{window.description}</p>
              </div>
              <button className="mt-4 bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-500 transition-all">
                {translation.service.order_button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl font-bold text-yellow-400"
        >
          {translation.service.cta_contact}
        </motion.h2>
        <p className="mt-4 text-lg text-gray-300">
          {translation.service.cta_description}
        </p>
        <motion.a
          href={`/${currentLang}/contact`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 inline-block bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition-all"
        >
          {translation.service.cta_contact_button}
        </motion.a>
      </div>
    </div>
  );
};

export default ServicesPage;

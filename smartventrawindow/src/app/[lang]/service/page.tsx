"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";


import sensorImg from "../../../../public/frame.jpg"; 
import raamImg from "../../../../public/frame.jpg";

const sensors = [
  { name: "Slimme CO2 Sensor", price: 100, description: "Meet en analyseert de luchtkwaliteit in realtime." },
  { name: "Geavanceerde Temperatuursensor", price: 150, description: "Houdt de temperatuur en vochtigheid in huis stabiel." },
  { name: "Slimme Bewegingssensor", price: 120, description: "Detecteert beweging en optimaliseert ventilatie." },
];

const windows = [
  { name: "Thermisch Isolerend Raam", price: 50, description: "Houdt de warmte binnen en bespaart energie." },
  { name: "Geluidsisolerend Raam", price: 50, description: "Vermindert externe geluiden voor maximale rust." },
  { name: "Automatisch Ventilerend Raam", price: 50, description: "Past zich aan de luchtkwaliteit aan voor optimaal comfort." },
];

const ServicesPage = () => {
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
          Onze Diensten 🚀
        </motion.h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          Ontdek de innovatieve oplossingen van SmartVentraWindow. Van slimme sensoren tot premium ramen, wij brengen technologie naar jouw woning!
        </p>
      </div>

      {/* Sensoren Sectie */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">🔧 Slimme Sensoren</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sensors.map((sensor, index) => {
            const discount = sensor.price === 150 ? 10 : 0;
            return (
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
                    €{sensor.price - discount}{" "}
                    {discount > 0 && <span className="text-sm text-gray-400 line-through">€{sensor.price}</span>}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold">{sensor.name}</h3>
                  <p className="text-gray-300 mt-2">{sensor.description}</p>
                  
                </div>
                <button className="mt-4 bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-500 transition-all">
                  Bestel Nu
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Ramen Sectie */}
      <div>
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">🏠 Premium Ramen</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {windows.map((window, index) => (
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
                Bestel Nu
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
          Meer weten? Neem contact op! 📩
        </motion.h2>
        <p className="mt-4 text-lg text-gray-300">
          Vraag vrijblijvend meer informatie over onze innovatieve oplossingen.
        </p>
        <motion.a
          href={`/${currentLang}/contact`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 inline-block bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition-all"
        >
          Contacteer Ons
        </motion.a>
      </div>
    </div>
  );
};

export default ServicesPage;

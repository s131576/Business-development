'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

import sensorImg from "../../../../public/camera2.webp";
import camera1 from "../../../../public/camera1.jpg";
import camera2 from "../../../../public/camera1.jpg";
import sensor2 from "../../../../public/bewegingsensor1.jpg";
import raamopening1 from "../../../../public/raam-opening1.png";
import raamopening2 from "../../../../public/raam-opening2.webp";

import SensorModal from "./modals/sensormodal/SensorModal";

const services = [
  {
    id: 1,
    category: "Sensoren",
    items: [
      { id: 101, name: "Bewegingssensor", description: "Detecteert beweging in een ruimte", price: 49.99, image: sensorImg, modalImage: raamopening1 },
      { id: 102, name: "Temperatuursensor", description: "Meet de omgevingstemperatuur", price: 29.99, image: sensor2, modalImage: raamopening1 },
    ]
  },
  {
    id: 2,
    category: "Camera's",
    items: [
      { id: 201, name: "Beveiligingscamera 1080p", description: "Hoge resolutie bewakingscamera", price: 99.99, image: camera1, modalImage: raamopening2 },
      { id: 202, name: "Draadloze IP-camera", description: "Verbonden via Wi-Fi voor live streaming", price: 129.99, image: camera2, modalImage: raamopening2 },
    ]
  }
];

const ServicesPage = ({ translation }: { translation: any }) => {

  const pathname = usePathname();
  const currentLang = pathname.startsWith("/nl") ? "nl" : pathname.startsWith("/en") ? "en" : "fr";

  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item: any) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="relative bg-[#0D1117] text-white py-16 px-6">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl font-extrabold text-yellow-400"
        >
          🔧{translation.service.title}🔧
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

      {/* Sensoren en Camera's Sectie */}
      {services.map((category) => (
        <div key={category.id} className="mb-20">
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">
            {category.category}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {category.items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg text-center flex flex-col justify-between min-h-72"
              >
                <div>
                  <Image src={item.image} alt={item.name} width={200} height={200} className="mx-auto rounded-lg shadow-md" />
                  <h3 className="mt-4 text-2xl font-bold">{item.name}</h3>
                  {/* <p className="text-gray-300 mt-2">{item.description}</p> */}
                </div>
                <button
                  className="mt-4 bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-500 transition-all"
                  onClick={() => openModal(item)}
                >
                  Lees meer
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal Component */}
      {selectedItem && <SensorModal sensor={selectedItem} onClose={closeModal} />}
    </div>
  );
};

export default ServicesPage
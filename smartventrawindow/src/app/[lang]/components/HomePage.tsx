"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // ✅ Stijl toevoegen

import raam1 from "../../../../public/raamdesign.webp";
import raam2 from "../../../../public/raam2.webp"; // Voeg extra afbeeldingen toe
import raam3 from "../../../../public/raam3.webp"; // Voeg extra afbeeldingen toe

export const HomePage = ({ translation }: { translation: any }) => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-800 text-white text-center px-6">
      {/* Geanimeerde introductie */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold sm:text-6xl md:text-7xl"
      >
        {translation.home.welcome}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-lg sm:text-xl md:text-2xl max-w-2xl"
      >
        {translation.home.description}
      </motion.p>

      {/* CTA-knoppen */}
      <div className="mt-8 flex space-x-6">
        <motion.a
          href="#about"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition-all"
        >
          {translation.home.learn_more}
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white text-blue-800 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-all"
        >
          {translation.home.contact}
        </motion.a>
      </div>

      {/* 🖼️ Responsive Image Carousel */}
      <div className="mt-10 w-full max-w-4xl">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showArrows={true}
          interval={4000}
          transitionTime={1000}
        >
          <div>
            <Image src={raam1} alt="Modern raamontwerp 1" className="rounded-lg shadow-lg" />
            <p className="legend">SmartVentra - Elegant Design</p>
          </div>
          <div>
            <Image src={raam2} alt="Modern raamontwerp 2" className="rounded-lg shadow-lg" />
            <p className="legend">Duurzaamheid & Innovatie</p>
          </div>
          <div>
            <Image src={raam3} alt="Modern raamontwerp 3" className="rounded-lg shadow-lg" />
            <p className="legend">Slimme technologieën</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

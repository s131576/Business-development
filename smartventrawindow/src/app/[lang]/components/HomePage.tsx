"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // ✅ Stijl toevoegen

import raam1 from "../../../../public/raamdesign.webp";
import raam2 from "../../../../public/raam2.webp"; 
import raam3 from "../../../../public/raam3.webp"; 

export const HomePage = ({ translation }: { translation: any }) => {
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/nl") ? "nl" : pathname.startsWith("/en") ? "en" : "fr";

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-[#0D1117] text-white text-center px-6">
      {/* Geanimeerde introductie */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold sm:text-6xl md:text-7xl text-yellow-400"
      >
        {translation.home.welcome}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-lg sm:text-xl md:text-2xl max-w-2xl text-gray-300"
      >
        {translation.home.description}
      </motion.p>

      {/* CTA-knoppen met correcte navigatiepaden */}
      <div className="mt-8 flex space-x-6">
        <motion.a
          href={`/${currentLang}/about`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition-all"
        >
          {translation.home.learn_more}
        </motion.a>
        <motion.a
          href={`/${currentLang}/contact`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gray-800 text-yellow-400 font-bold px-6 py-3 rounded-lg shadow-lg border border-yellow-400 hover:bg-yellow-500 hover:text-gray-900 transition-all"
        >
          {translation.home.contact}
        </motion.a>
      </div>

      {/* Responsive Image Carousel */}
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
            <p className="legend text-gray-900 bg-yellow-400">SmartVentra - Elegant Design</p>
          </div>
          <div>
            <Image src={raam2} alt="Modern raamontwerp 2" className="rounded-lg shadow-lg" />
            <p className="legend text-gray-900 bg-yellow-400">Duurzaamheid & Innovatie</p>
          </div>
          <div>
            <Image src={raam3} alt="Modern raamontwerp 3" className="rounded-lg shadow-lg" />
            <p className="legend text-gray-900 bg-yellow-400">Slimme technologieën</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

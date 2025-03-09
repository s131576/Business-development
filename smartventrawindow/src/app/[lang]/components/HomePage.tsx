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
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#0D1117] text-white text-center py-10 px-4 sm:px-6 md:px-8">
      {/* Geanimeerde introductie */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-yellow-400"
      >
        {translation.home.welcome}
      </motion.h1>

      {/* Video met aangepaste grootte */}
      <div className="mt-6 w-full max-w-4xl">
        <video autoPlay loop controls className="w-full h-auto rounded-lg shadow-lg">
          <source src="/videohome.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl text-gray-300 leading-relaxed"
      >
        {translation.home.description}
      </motion.p>

      {/* CTA-knoppen */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <motion.a
          href={`/${currentLang}/service`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-full sm:w-auto bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition-all text-center"
        >
          {translation.home.learn_more}
        </motion.a>
        <motion.a
          href={`/${currentLang}/contact`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-full sm:w-auto bg-gray-800 text-yellow-400 font-bold px-6 py-3 rounded-lg shadow-lg border border-yellow-400 hover:bg-yellow-500 hover:text-gray-900 transition-all text-center"
        >
          {translation.home.contact}
        </motion.a>
      </div>

      {/* Responsive Image Carousel */}
      <div className="mt-10 w-full max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-4xl px-2">
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
            <Image src={raam1} alt="Modern raamontwerp 1" className="rounded-lg shadow-lg w-full h-auto" />
            <p className="legend text-gray-900 bg-yellow-400">SmartVentra - Elegant Design</p>
          </div>
          <div>
            <Image src={raam2} alt="Modern raamontwerp 2" className="rounded-lg shadow-lg w-full h-auto" />
            <p className="legend text-gray-900 bg-yellow-400">Duurzaamheid & Innovatie</p>
          </div>
          <div>
            <Image src={raam3} alt="Modern raamontwerp 3" className="rounded-lg shadow-lg w-full h-auto" />
            <p className="legend text-gray-900 bg-yellow-400">Slimme technologieën</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

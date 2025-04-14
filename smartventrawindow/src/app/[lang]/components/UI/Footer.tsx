"use client";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import getTranslation from "../translation/getTranslation";
import { Locale } from "@/app/utils/i18n-config";

const Footer = () => {
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/nl") ? "nl" : pathname.startsWith("/en") ? "en" : "fr";
  const [translation, setTranslation] = useState<any>(null);

  useEffect(() => {
    async function fetchTranslation() {
      const langTranslation = await getTranslation(currentLang as Locale);
      setTranslation(langTranslation);
    }
    fetchTranslation();
  }, [currentLang]);

  if (!translation) return null;

  return (
    <footer className="bg-gradient-to-r from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] shadow-lg text-white py-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">

        {/* Logo & Info */}
        <div className="text-center md:text-left">
          <Link href={`/${currentLang}`}>
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-extrabold text-white cursor-pointer"
            >
              Tab<span className="text-yellow-400">Even</span>
            </motion.h1>
          </Link>
          <p className="mt-2 text-gray-400 text-sm sm:text-base">
            {translation.footer.tagline}
          </p>
        </div>

        {/* Navigatie */}
        <nav className="text-center md:text-left">
          <ul className="flex flex-wrap justify-center md:flex-col gap-3 text-sm sm:text-base">
            <li><a href="#home" className="hover:text-yellow-400">{translation.footer.home}</a></li>
            <li><a href="#features" className="hover:text-yellow-400">{translation.footer.features}</a></li>
            <li><a href="#how" className="hover:text-yellow-400">{translation.footer.how}</a></li>
            <li><a href="#usecases" className="hover:text-yellow-400">{translation.footer.usecases}</a></li>
            <li><a href="#pricing" className="hover:text-yellow-400">{translation.footer.pricing}</a></li>
            <li><a href="#faq" className="hover:text-yellow-400">{translation.footer.faq}</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">{translation.footer.contact}</a></li>
          </ul>
        </nav>

        {/* Socials */}
        <div className="flex justify-center md:justify-end items-center gap-4 text-xl">
          <Link href="https://facebook.com" className="hover:text-yellow-400"><FaFacebook /></Link>
          <Link href="https://instagram.com" className="hover:text-yellow-400"><FaInstagram /></Link>
          <Link href="https://linkedin.com" className="hover:text-yellow-400"><FaLinkedin /></Link>
          <Link href="https://twitter.com" className="hover:text-yellow-400"><FaTwitter /></Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm pt-4">
        &copy; {new Date().getFullYear()} TabEven. {translation.footer.rights}
      </div>
    </footer>

  );
};

export default Footer;

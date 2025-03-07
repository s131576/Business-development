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
    <footer className="bg-[#0D1117] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-around items-center">
        
        {/* Logo & Bedrijfsinfo */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <Link href={`/${currentLang}`}>
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white cursor-pointer"
            >
              SmartVentra<span className="text-yellow-400">Window</span>
            </motion.h1>
          </Link>
          <p className="mt-2 text-gray-400">{translation.footer.tagline}</p>
        </div>

        {/* Navigatie */}
        <nav className="mb-6 md:mb-0">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-9 text-sm">
            <li><Link href={`/${currentLang}/about`} className="hover:text-yellow-400">{translation.footer.about}</Link></li>
            <li><Link href={`/${currentLang}/service`} className="hover:text-yellow-400">{translation.footer.services}</Link></li>
            <li><Link href={`/${currentLang}/contact`} className="hover:text-yellow-400">{translation.footer.contact}</Link></li>
          </ul>
        </nav>

        {/* Social Media */}
        <div className="flex space-x-4 text-xl">
          <Link href="https://facebook.com" className="hover:text-yellow-400"><FaFacebook /></Link>
          <Link href="https://instagram.com" className="hover:text-yellow-400"><FaInstagram /></Link>
          <Link href="https://linkedin.com" className="hover:text-yellow-400"><FaLinkedin /></Link>
          <Link href="https://twitter.com" className="hover:text-yellow-400"><FaTwitter /></Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} SmartVentraWindow. {translation.footer.rights}
      </div>
    </footer>
  );
};

export default Footer;

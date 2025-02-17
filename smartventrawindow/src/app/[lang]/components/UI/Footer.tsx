"use client";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
      const pathname = usePathname();
      const currentLang = pathname.startsWith("/nl") ? "nl" : pathname.startsWith("/en") ? "en" : "fr";
  return (
    <footer className="bg-[#0D1117] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-around items-center">
        {/* Logo & Bedrijfsinfo */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-extrabold text-yellow-400">SmartVentra<span className="text-white">Window</span></h2>
          <p className="mt-2 text-gray-400">Duurzame & innovatieve ramen voor elk gebouw.</p>
        </div>

        {/* Navigatie */}
        <nav className="mb-6 md:mb-0">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-9 text-sm">
            <li><Link  href={`/${currentLang}/about`} className="hover:text-yellow-400">Over Ons</Link></li>
            <li><Link  href={`/${currentLang}/service`} className="hover:text-yellow-400">Diensten</Link></li>
            <li><Link  href={`/${currentLang}/contact`} className="hover:text-yellow-400">Contact</Link></li>
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
        &copy; {new Date().getFullYear()} SmartVentraWindow. Alle rechten voorbehouden.
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaBriefcase, FaEnvelope, FaGlobe } from "react-icons/fa";
import Flag from "react-world-flags";
import getTranslation from "../translation/getTranslation";
import { Locale } from "@/app/utils/i18n-config";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [translation, setTranslation] = useState<any>(null);

  const languages = [
    { code: "nl", name: "Nederlands", flag: "NL" },
    { code: "en", name: "English", flag: "GB" },
    { code: "fr", name: "Français", flag: "FR" },
  ];

  // Huidige taal bepalen
  const currentLang = languages.find((lang) => pathname.startsWith(`/${lang.code}`)) || languages[0];

  useEffect(() => {
    getTranslation(currentLang.code as Locale).then(setTranslation);
  }, [currentLang]);

  const menuItems = translation
    ? [
      { name: translation.navigation.home, path: "", icon: <FaHome /> },
      { name: translation.navigation.services, path: "service", icon: <FaBriefcase /> },
      { name: translation.navigation.about, path: "about", icon: <FaInfoCircle /> },
      { name: translation.navigation.contact, path: "contact", icon: <FaEnvelope /> },
    ]
    : [];

  const changeLanguage = (newLang: string) => {
    router.push(pathname.replace(`/${currentLang.code}`, `/${newLang}`));
    setShowDropdown(false);
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-[#0D1B2A] via-[#1B263B] to-[#415A77] shadow-lg fixed w-full top-0 left-0 z-50 border-b border-[#778DA9]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href={`/${currentLang.code}`}>
          <motion.h1 whileHover={{ scale: 1.05 }} className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#E0E1DD] cursor-pointer">
            SmartVentra<span className="text-yellow-400">Window</span>
          </motion.h1>
        </Link>

        {/* Desktop Navigatie */}
        <div className="hidden md:flex space-x-8 text-lg">
          {menuItems.map((item, index) => {
            const isActive = pathname === `/${currentLang.code}/${item.path}` || (item.path === "" && pathname === `/${currentLang.code}`);
            return (
              <Link
                key={index}
                href={`/${currentLang.code}/${item.path}`}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all ${isActive ? "text-[#76C7C0] bg-[#3c3d3d] shadow-neon" : "text-[#E0E1DD] hover:text-[#76C7C0]"
                  }`}
              >
                {item.icon} {item.name}
              </Link>
            );
          })}

          {/* Taalkeuze knop met vlag */}
          <div className="relative">
            <button className="text-[#E0E1DD] text-lg flex items-center gap-2 p-2 rounded-lg hover:text-[#76C7C0] transition-all" onClick={() => setShowDropdown(!showDropdown)}>
              <Flag code={currentLang.flag} style={{ width: 25, height: 20 }} />
              {currentLang.name}
            </button>
            <AnimatePresence>
              {showDropdown && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute right-0 mt-2 w-40 bg-[#1B263B] shadow-lg rounded-lg border border-[#76C7C0] z-50">
                  {languages.map((lang) => (
                    <button key={lang.code} onClick={() => changeLanguage(lang.code)} className="w-full text-left px-4 py-2 hover:bg-[#778DA9] flex items-center gap-2 text-[#E0E1DD]">
                      <Flag code={lang.flag} style={{ width: 25, height: 20 }} />
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Hamburger menu knop */}
        <button className="md:hidden text-[#E0E1DD] text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobiel menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="md:hidden bg-[#0D1B2A] text-white p-6 shadow-lg absolute top-16 left-0 w-full"
          >
            {menuItems.map((item, index) => {
              const isActive = pathname === `/${currentLang.code}/${item.path}` || (item.path === "" && pathname === `/${currentLang.code}`);
              return (
                <Link
                  key={index}
                  href={`/${currentLang.code}/${item.path}`}
                  className={`block py-2 text-lg  items-center gap-2 px-3 rounded-md transition-all ${isActive ? "text-[#76C7C0] bg-[#3c3d3d] shadow-neon" : "text-[#E0E1DD] hover:text-[#76C7C0]"
                    }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.icon} {item.name}
                </Link>
              );
            })}

            {/* Taalkeuze in mobiel menu */}
            <div className="border-t border-white mt-4 pt-4 flex flex-col items-center space-y-2">
              <span className="text-white text-lg flex items-center gap-2">
                🌍 Kies een taal:   <Flag code={currentLang.flag} style={{ width: 25, height: 20 }} />
              </span>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className="w-40 flex items-center justify-start px-4 py-2 bg-white text-[#1B263B] hover:bg-gray-100 rounded-md gap-3"
                >
                  <Flag code={lang.flag} style={{ width: 25, height: 20 }} />
                  <span className="text-lg">{lang.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

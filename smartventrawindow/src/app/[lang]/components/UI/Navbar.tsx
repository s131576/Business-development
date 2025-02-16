"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaBriefcase, FaEnvelope, FaGlobe } from "react-icons/fa";
import { IoLanguageOutline } from "react-icons/io5";
import Flag from "react-world-flags";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Bepaal huidige taal op basis van de URL
  const currentLang = pathname.startsWith("/nl") ? "nl" : pathname.startsWith("/en") ? "en" : "fr";

  // Ondersteunde talen met vlaggen
  const languages = [
    { code: "nl", name: "Nederlands", flag: "NL" },
    { code: "en", name: "English", flag: "GB" },
    { code: "fr", name: "Français", flag: "FR" },
  ];

  // Navigatie-items met iconen
  const menuItems = [
    { name: "Home", path: "", icon: <FaHome /> },
    { name: "Over ons", path: "about", icon: <FaInfoCircle /> },
    { name: "Diensten", path: "services", icon: <FaBriefcase /> },
    { name: "Contact", path: "contact", icon: <FaEnvelope /> },
  ];

  // Taal wisselen
  const changeLanguage = (newLang: string) => {
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPath);
    setShowDropdown(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href={`/${currentLang}`}>
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white cursor-pointer"
          >
            SmartVentra<span className="text-yellow-400">Window</span>
          </motion.h1>
        </Link>

        {/* Desktop navigatie */}
        <div className="hidden md:flex space-x-8 text-lg">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={`/${currentLang}/${item.path}`}
              className="flex items-center gap-2 text-white hover:text-yellow-300 transition-all"
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </div>

        {/* Taalwissel dropdown */}
        <div className="relative hidden md:block">
          <button
            className="text-white text-xl flex items-center gap-2 p-2 rounded-lg hover:text-yellow-300 transition-all"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FaGlobe className="text-2xl text-white mr-2" /> {/* 🌍 Wereldbol toegevoegd */}
            {languages.find((l) => l.code === currentLang)?.name}
          </button>
          <AnimatePresence>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-50"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center gap-2 text-gray-800"
                  >
                    <Flag code={lang.flag} style={{ width: 25, height: 20 }} />
                    {lang.name}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobiele menu knop */}
        <button className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
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
            className="md:hidden bg-blue-600 text-white p-6 shadow-lg absolute top-16 left-0 w-full"
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={`/${currentLang}/${item.path}`}
                className="block py-2 text-lg items-center gap-2 hover:text-yellow-300 transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {item.icon} {item.name}
              </Link>
            ))}

            {/* 🌍 Taalkeuze in mobiel menu */}
            <div className="border-t border-white mt-4 pt-4 flex flex-col space-y-2">
              <span className="text-white text-center text-lg">🌍 Kies een taal:</span>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className="w-full text-center px-4 py-2 bg-white text-blue-600 hover:bg-gray-100 flex items-center justify-center gap-2 rounded-md"
                >
                  <Flag code={lang.flag} style={{ width: 20, height: 15 }} />
                  {lang.name}
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

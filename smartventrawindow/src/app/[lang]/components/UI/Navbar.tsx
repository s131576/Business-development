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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const currentLang = pathname.startsWith("/nl") ? "nl" : pathname.startsWith("/en") ? "en" : "fr";

  const languages = [
    { code: "nl", name: "Nederlands", flag: "NL" },
    { code: "en", name: "English", flag: "GB" },
    { code: "fr", name: "Français", flag: "FR" },
  ];

  useEffect(() => {
    async function fetchTranslation() {
      const langTranslation = await getTranslation(currentLang as Locale);
      setTranslation(langTranslation);
    }
    fetchTranslation();
  }, [currentLang]);

  const menuItems = translation
    ? [
      { name: translation.navigation.home, path: "", icon: <FaHome /> },
      { name: translation.navigation.about, path: "about", icon: <FaInfoCircle /> },
      { name: translation.navigation.services, path: "service", icon: <FaBriefcase /> },
      { name: translation.navigation.contact, path: "contact", icon: <FaEnvelope /> },
    ]
    : [];

  const changeLanguage = (newLang: string) => {
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPath);
    setShowDropdown(false);
  };

  return (
    <nav className="bg-gradient-to-r from-[#0D1B2A] via-[#1B263B] to-[#415A77] shadow-lg fixed w-full top-0 left-0 z-50 border-b border-[#778DA9]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-16">
        <Link href={`/${currentLang}`}>
          <motion.h1 whileHover={{ scale: 1.05 }} className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#E0E1DD] cursor-pointer">
            SmartVentra<span className="text-yellow-400">Window</span>
          </motion.h1>
        </Link>

        <div className="hidden md:flex space-x-8 text-lg">
          {menuItems.length > 0 &&
            menuItems.map((item) => {
              const isActive = pathname === `/${currentLang}/${item.path}` || (item.path === "" && pathname === `/${currentLang}`);
              return (
                <Link
                  key={item.name}
                  href={`/${currentLang}/${item.path}`}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all ${isActive ? "text-[#76C7C0] bg-[#3c3d3d] shadow-neon" : "text-[#E0E1DD] hover:text-[#76C7C0]"
                    }`}
                >
                  {item.icon} {item.name}
                </Link>
              );
            })}
        </div>


        <div className="relative hidden md:block">
          <button className="text-[#E0E1DD] text-xl flex items-center gap-2 p-2 rounded-lg hover:text-[#76C7C0] transition-all" onClick={() => setShowDropdown(!showDropdown)}>
            <FaGlobe className="text-2xl text-[#76C7C0] mr-2" />
            {isClient ? (
              <div className="flex items-center gap-2">
                <Flag code={languages.find((l) => l.code === currentLang)?.flag} style={{ width: 25, height: 20 }} />
                <span>{languages.find((l) => l.code === currentLang)?.name}</span>
              </div>
            ) : (
              "..."
            )}
          </button>
          <AnimatePresence>
            {showDropdown && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute right-0 mt-2 w-40 bg-[#1B263B] shadow-lg rounded-lg border border-[#76C7C0] z-50">
                {languages.map((lang) => (
                  <button key={lang.code} onClick={() => changeLanguage(lang.code)} className="w-full text-left px-4 py-2 hover:bg-[#778DA9] flex items-center gap-2 text-[#E0E1DD]">
                    {isClient && <Flag code={lang.flag} style={{ width: 25, height: 20 }} />}
                    {lang.name}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button className="md:hidden text-[#E0E1DD] text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

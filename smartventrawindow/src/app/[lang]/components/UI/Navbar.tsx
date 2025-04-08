"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaEnvelope,
  FaRocket,
  FaPuzzlePiece,
} from "react-icons/fa";
import Flag from "react-world-flags";
import getTranslation from "../translation/getTranslation";
import { Locale } from "@/app/utils/i18n-config";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [translation, setTranslation] = useState<any>(null);

  const languages = [
    { code: "nl", name: "Nederlands", flag: "NL" },
    { code: "en", name: "English", flag: "GB" },
    { code: "fr", name: "Français", flag: "FR" },
  ];

  const currentLang = languages.find((lang) => pathname.startsWith(`/${lang.code}`)) || languages[0];

  useEffect(() => {
    getTranslation(currentLang.code as Locale).then(setTranslation);
  }, [currentLang]);

  const menuItems = translation
    ? [
        { name: translation.navigation.home, path: "#", icon: <FaHome /> },
        {
          name: translation.navigation.product,
          icon: <FaPuzzlePiece />,
          submenu: [
            { name: translation.navigation.features, path: "#features", icon: "🧩" },
            { name: translation.navigation.how, path: "#how", icon: "✨" },
            { name: translation.navigation.pricing, path: "#pricing", icon: "💰" },
          ],
        },
        { name: translation.navigation.launch, path: "#launch", icon: <FaRocket /> },
        { name: translation.navigation.contact, path: "#contact", icon: <FaEnvelope /> },
      ]
    : [];

  const changeLanguage = (newLang: string) => {
    router.push(pathname.replace(`/${currentLang.code}`, `/${newLang}`));
    setShowDropdown(false);
    setMenuOpen(false);
  };

  const handleLinkClick = () => {
    setShowDropdown(false);
    setMenuOpen(false);
    setMobileProductOpen(false);
  };

  return (
    <nav className="shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-16">
        <Link href={`/${currentLang.code}`}>
          <motion.h1 whileHover={{ scale: 1.05 }} className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#E0E1DD] cursor-pointer">
            Tab<span className="text-yellow-400">Even</span>
          </motion.h1>
        </Link>

        <div className="hidden md:flex space-x-8 text-lg">
          {menuItems.map((item, index) => {
            if (item.submenu) {
              return (
                <div key={index} className="relative group">
                  <button className="flex items-center gap-2 px-3 py-2 rounded-md text-[#E0E1DD] hover:text-[#76C7C0]">
                    {item.name} ▾
                  </button>
                  <div className="absolute hidden group-hover:block bg-[#1B263B] mt-2 rounded-md shadow-lg z-50 min-w-[200px]">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.path}
                        onClick={handleLinkClick}
                        className="block px-4 py-2 hover:bg-[#2C3E50] text-[#E0E1DD]"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <a
                key={index}
                href={item.path}
                onClick={handleLinkClick}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-[#E0E1DD] hover:text-[#76C7C0]"
              >
                {item.name}
              </a>
            );
          })}

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

        <button className="md:hidden text-[#E0E1DD] text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="md:hidden bg-[#0D1B2A] text-white p-6 shadow-lg absolute top-16 left-0 w-full">
            {menuItems.map((item, index) => {
              if (item.submenu) {
                return (
                  <div key={index}>
                    <button onClick={() => setMobileProductOpen(!mobileProductOpen)} className="flex items-center justify-between w-full px-3 py-2 rounded-md text-[#E0E1DD] hover:text-[#76C7C0]">
                      <span className="flex items-center gap-2">{item.icon} {item.name}</span>
                      <span>{mobileProductOpen ? "▲" : "▼"}</span>
                    </button>
                    {mobileProductOpen && (
                      <div className="ml-6 mt-2 flex flex-col gap-1">
                        {item.submenu.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.path}
                            onClick={handleLinkClick}
                            className="text-[#E0E1DD] hover:text-[#76C7C0]"
                          >
                            {subItem.icon} {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={index}
                  href={item.path}
                  onClick={handleLinkClick}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-[#E0E1DD] hover:text-[#76C7C0]"
                >
                  {item.icon} {item.name}
                </a>
              );
            })}

            <div className="border-t border-white mt-4 pt-4 flex flex-col items-center space-y-2">
              <span className="text-white text-lg flex items-center gap-2">
                🌍 Kies een taal: <Flag code={currentLang.flag} style={{ width: 25, height: 20 }} />
              </span>
              {languages.map((lang) => (
                <button key={lang.code} onClick={() => changeLanguage(lang.code)} className="w-40 flex items-center justify-start px-4 py-2 bg-white text-[#1B263B] hover:bg-gray-100 rounded-md gap-3">
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

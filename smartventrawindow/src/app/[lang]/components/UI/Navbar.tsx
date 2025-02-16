"use client";
import { Locale } from "@/app/utils/i18n-config";
import { useRouter, usePathname } from "next/navigation";

const Navbar = ({ lang }: { lang: Locale }) => {
  const router = useRouter();
  const pathname = usePathname();

  // Ondersteunde talen
  const languages: { code: Locale; name: string }[] = [
    { code: "nl", name: "Nederlands" },
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },

  ];

  // Taalwisselfunctie - past de URL aan
  const changeLanguage = (newLang: Locale) => {
    const newPath = `/${newLang}${pathname.substring(3)}`;

    if (newLang === lang) {
      // ✅ Forceer een herladen als dezelfde taal wordt gekozen
      router.replace(newPath); // Zorgt ervoor dat de pagina opnieuw gerenderd wordt
      router.refresh(); // Forceert een refresh in Next.js 13+
    } else {
      router.push(newPath);
    }
  };


  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
            SmartVentraWindow
          </h1>

          {/* Navigatie */}
          <div className="hidden md:flex space-x-6">
            <a href={`/${lang}`} className="text-gray-700 hover:text-blue-600">Home</a>
            <a href={`/${lang}/about`} className="text-gray-700 hover:text-blue-600">Over ons</a>
            <a href={`/${lang}/services`} className="text-gray-700 hover:text-blue-600">Diensten</a>
            <a href={`/${lang}/contact`} className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>

          {/* Taalwisselaar */}
          <div className="relative">
            <select
              className="p-2 bg-gray-100 border rounded cursor-pointer"
              value={lang}
              onChange={(e) => changeLanguage(e.target.value as Locale)}
            >
              {/* ✅ Voeg een placeholder-optie toe die niet selecteerbaar is */}
              <option value="" disabled>🌍 Kies een taal</option>

              {languages.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

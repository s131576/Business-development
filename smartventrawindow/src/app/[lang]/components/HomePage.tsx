"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

import kbc from "../../../../public/KBC.png";
import payconiq from "../../../../public/payconiq.png";
import tikkie from "../../../../public/tikkie.jpg";
import tabevenlogo1 from "../../../../public/tabevenlogo1-4.png";
import tabevenlogo from "../../../../public/tabevenlogo.png";
import demo from "../../../../public/demo.gif";
import members from "../../../../public/members.webp";
import banks from "../../../../public/choosebank.png";
import scanning from "../../../../public/scanningtabeven.png";
import logo from "../../../../public/logotabeven.png";
import showcaseimage from "../../../../public/tabeven.png";
import appstore from "../../../../public/app-store-png-logo-33112.png";
import playstorelogo from "../../../../public/google-play-png-logo-3799.png";
import ContactForm from "./ContactPage";
import AboutPage from "./AboutPage";

const stepImages = [scanning, members, banks];

export const HomePage = ({ translation }: { translation: any }) => {
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/nl")
    ? "nl"
    : pathname.startsWith("/en")
    ? "en"
    : "fr";
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#0D1117] text-white overflow-x-hidden">
      {/* Animated Background Lights */}

      {/* Hero Section */}
      <section className="w-full min-h-[90vh] pt-28 px-6 sm:px-10 bg-gradient-to-r from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] text-white flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-32 relative overflow-hidden">
        {/* Glow achtergrond kan behouden worden als visueel element */}
        <div className="absolute inset-0 bg-gradient-radial from-yellow-400/10 via-purple-600/10 to-transparent blur-3xl z-0" />

        {/* Tekstgedeelte */}
        <div className="flex-1 z-10 max-w-lg space-y-6 text-center lg:text-left">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start gap-1 sm:gap-4">
              <span className="text-4xl sm:text-5xl">📸</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-[0_0_10px_rgba(255,224,0,0.3)]">
                {translation.home.hero.scan}
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start gap-1 sm:gap-4">
              <span className="text-4xl sm:text-5xl">📊</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-[0_0_10px_rgba(255,224,0,0.3)]">
                {translation.home.hero.split}
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start gap-1 sm:gap-4">
              <span className="text-4xl sm:text-5xl">💸</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-[0_0_10px_rgba(255,224,0,0.3)]">
                {translation.home.hero.pay}
              </h1>
            </div>
          </div>

          <p className="text-base sm:text-lg text-gray-300">
            {translation.home.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
            <a
              href="#how"
              className="bg-yellow-400 text-[#0D1117] font-bold px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:bg-yellow-300 transition-all duration-300"
            >
              {translation.home.hero.cta_start}
            </a>
            <a
              href="#features"
              className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 hover:text-[#0D1117] hover:scale-105 transition-all duration-300"
            >
              {translation.home.hero.cta_info}
            </a>
          </div>
        </div>

        {/* Logo of titel */}
        <div className="flex-1 relative z-10 w-full max-w-md flex justify-center overflow-visible">
          <h2 className="text-[64px] sm:text-[90px] md:text-[110px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-yellow-400 drop-shadow-[0_10px_60px_rgba(255,255,255,0.4)]">
            Tab
            <span className="text-yellow-400 drop-shadow-[0_5px_25px_rgba(255,255,0,0.4)]">
              Even
            </span>
          </h2>

        </div>
        {/*</div>

        </div>*/
        }
      </section>

      {/*noen balk */}
      {/* <div className="neon-bar-container ">
        <div className="neon-bar" />
      </div> */}

      {/* Use Cases Section */}
      <section
        id="usecases"
        className="w-full py-24 px-6 sm:px-10 text-white relative bg-gradient-to-r from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] overflow-hidden"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 text-center mb-16"
        >
          {translation.home.usecases.title}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {translation.home.usecases.items.map((usecase: string, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white/5 border border-white/10 p-5 sm:p-6 rounded-2xl text-center text-base sm:text-lg font-semibold shadow-xl hover:scale-[1.02] transition-transform"
            >
              {usecase}
            </motion.div>
          ))}
        </div>

        <div className="overflow-hidden pt-24 sm:pt-36">
          <motion.div
            className="flex gap-4 sm:gap-6 animate-scroll-x"
            initial={{ x: 0 }}
            animate={{ x: [-1000, 0] }} // schuif van rechts naar links
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          >
            {[
              ...translation.home.usecases.reviews,
              ...translation.home.usecases.reviews,
            ].map((review: any, i: number) => (
              <div
                key={i}
                className="w-[260px] sm:w-[300px] bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/20 shadow-xl flex-shrink-0"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="text-yellow-400 text-lg sm:text-xl mr-2">
                    {"⭐️".repeat(review.rating) +
                      "☆".repeat(5 - review.rating)}
                  </div>
                  <span className="text-sm text-gray-400">
                    {review.rating}/5
                  </span>
                </div>
                <p className="text-gray-300 text-sm sm:text-base italic break-words">
                  "{review.text}"
                </p>
                <p className="text-sm text-gray-400 mt-3">– {review.author}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <style jsx>
          {`
            @keyframes scroll-x {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll-x {
              animation: scroll-x 60s linear infinite;
            }
          `}
        </style>
      </section>

      {/* Why Section */}
      <section
        id="features"
        className="w-full bg-gradient-to-r from-[#1B2E45] via-[#243954] to-[#1B2E45] py-20 px-6 sm:px-10 shadow-lg"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 text-center mb-12"
        >
          {translation.home.features.title}
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Why List */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            variants={{ hidden: {}, visible: {} }}
            className="space-y-6 sm:space-y-8 list-none"
          >
            {translation.home.features.list.map(
              (item: string, index: number) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="text-base sm:text-lg text-gray-300 leading-relaxed flex items-start gap-2"
                >
                  <span className="text-yellow-400 text-xl">✅</span> {item}
                </motion.li>
              )
            )}
          </motion.ul>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="rounded-xl overflow-hidden max-w-full"
          >
            <Image
              src={tabevenlogo1}
              alt="TabEven demo"
              className="w-full h-auto object-contain rounded-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how"
        className="w-full relative bg-gradient-to-r from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] overflow-hidden py-24 px-6 sm:px-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 text-center mb-16"
        >
          {translation.home.how.title}
        </motion.h2>

        <div className="max-w-6xl mx-auto space-y-24">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className={`flex flex-col ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-10 lg:gap-16`}
            >
              <Image
                src={stepImages[i]}
                alt={translation.home.how.steps[i].title}
                className="rounded-xl w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[240px] xl:max-w-[280px] shadow-lg h-auto"
              />
              <div className="text-center lg:text-left max-w-xl">
                <p className="text-5xl sm:text-6xl font-black text-yellow-400 mb-2">
                  0{i + 1}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  {translation.home.how.steps[i].title}
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  {translation.home.how.steps[i].desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="tabeven-showcase"
        className="w-full relative py-28 sm:py-32 px-6 sm:px-10 bg-gradient-to-r from-[#1B2E45] via-[#243954] to-[#1B2E45] overflow-hidden text-white"
      >
        {/* Glow Achtergrond */}
        <div className="absolute inset-0 z-0 bg-gradient-radial from-purple-600/30 via-purple-700/10 to-transparent blur-3xl" />

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 text-center mb-20 z-10 relative"
        >
          {translation.home.showcase.title}
        </motion.h2>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start z-10">
          {/* LINKER CARDS */}
          <div className="space-y-14 hidden md:block pr-4 pt-5">
            {translation.home.showcase.cards_left.map(
              (card: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.2, duration: 0.8 }}
                  className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 shadow-2xl max-w-sm"
                >
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                    {card.title}
                  </h4>
                  <p className="text-sm text-gray-300">{card.desc}</p>
                </motion.div>
              )
            )}
          </div>

          {/* MIDDEN IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="mx-auto relative z-10 max-w-[320px] sm:max-w-[380px] md:max-w-[210px]"
          >
            <Image
              src={demo}
              alt="TabEven App"
              className="w-full h-auto rounded-[9px] shadow-[0_30px_100px_rgba(255,255,255,0.15)]"
              priority
            />
          </motion.div>

          {/* RECHTER CARDS */}
          <div className="space-y-9 hidden md:block pl-4 pt-5">
            {translation.home.showcase.cards_right.map(
              (card: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
                  className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 shadow-2xl max-w-sm"
                >
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                    {card.title}
                  </h4>
                  <p className="text-sm text-gray-300">{card.desc}</p>
                </motion.div>
              )
            )}
          </div>

          {/* CARDS VOOR MOBILE (onder afbeelding) */}
          <div className="block md:hidden col-span-full space-y-6 mt-12">
            {[
              ...translation.home.showcase.cards_left,
              ...translation.home.showcase.cards_right,
            ].map((card: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 shadow-xl"
              >
                <h4 className="text-base font-bold text-white mb-1">
                  {card.title}
                </h4>
                <p className="text-sm text-gray-300">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="abonnementen"
        className="w-full relative bg-gradient-to-r from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] overflow-hidden  z-10 py-32 px-6 sm:py-32 text-white"
      >
        {/* Glow Background */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-yellow-400/10 via-transparent to-transparent blur-3xl" />

        {/* Responsive Titel */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-yellow-400 font-extrabold text-center mb-16  text-[clamp(1.75rem,5vw,2.75rem)] max-w-[90%] mx-auto leading-tight"
        >
          {translation.home.pricing.title}
        </motion.h2>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row justify-center gap-10 max-w-6xl mx-auto">
          {translation.home.pricing.plans.map((plan: any, index: number) => (
            <motion.div
              key={plan.title}
              className="relative bg-white/5 border border-yellow-400 rounded-3xl p-10 backdrop-blur-xl shadow-yellow-400/20 shadow-2xl w-full max-w-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="absolute -inset-px bg-gradient-to-br from-yellow-500/20 via-transparent to-yellow-400/10 rounded-3xl blur-xl pointer-events-none" />
              <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400">
                {plan.title}
              </h3>
              <p className="text-4xl sm:text-5xl font-extrabold mt-4">
                {plan.price}
              </p>
              <p className="text-gray-300 mt-4 mb-8 text-base sm:text-lg">
                {plan.description}
              </p>
              <ul className="text-gray-200 space-y-3 text-sm sm:text-base mb-8">
                {plan.features.map((feat: string, i: number) => (
                  <li key={i}>✅ {feat}</li>
                ))}
              </ul>
              {/* <a
                href="#start"
                className="inline-block bg-yellow-400 text-black font-bold px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg rounded-full hover:bg-yellow-300 transition"
              >
                {plan.button}
              </a> */}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section
        id="partners"
        className="w-full py-20 sm:py-32 text-white text-center relative bg-gradient-to-r from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] overflow-hidden px-6 sm:px-10"
      >
        {/* Glow Achtergrond */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[700px] sm:w-[900px] h-[700px] sm:h-[900px]  rounded-full blur-3xl z-0" />

        {/* Titel */}
        <h2 className="text-[clamp(2rem,6vw,3rem)] font-extrabold text-yellow-400 mb-6 relative z-10 animate-pulse">
          {translation.home.partners.title}
        </h2>

        {/* Beschrijving */}
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 sm:mb-12 relative z-10">
          {translation.home.partners.desc}
        </p>
      </section>

      {/* CTA Download Section */}
      <section
        id="download"
        className="w-full py-20 sm:py-32 text-center bg-gradient-to-r from-[#1B2E45] via-[#243954] to-[#1B2E45] text-white px-6 sm:px-10"
      >
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-yellow-400 mb-6">
          {translation.home.download.title}
        </h2>

        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-10">
          {translation.home.download.desc}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* App Store Button (inactief) */}
          <div className="relative group w-[180px] sm:w-[200px]">
            <Image
              src={appstore}
              alt="App Store"
              className="w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity cursor-not-allowed"
            />
            <span className="absolute -bottom-14 left-1/2 -translate-x-1/2 text-sm font-extrabold text-yellow-400">
              Binnenkort
            </span>
          </div>

          {/* Google Play Button (inactief) */}
          <div className="relative group w-[180px] sm:w-[200px]">
            <Image
              src={playstorelogo}
              alt="Google Play"
              className="w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity cursor-not-allowed"
            />
            <span className="absolute -bottom-14 left-1/2 -translate-x-1/2 text-sm font-extrabold text-yellow-400">
              Binnenkort
            </span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="w-full py-20 sm:py-32 px-6 sm:px-10 bg-gradient-to-r from-[#1B263B] via-[#0D1B2A] to-[#1B263B] text-white text-center"
      >
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-yellow-400 mb-12">
          📘 {translation.home.faq_title}
        </h2>

        <div className="max-w-4xl mx-auto space-y-6 text-left">
          {translation.home.faq.map((item: any, index: number) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl overflow-hidden"
            >
              <details className="group p-6 sm:p-8">
                <summary className="flex justify-between items-center cursor-pointer text-lg sm:text-xl font-semibold text-white group-open:text-yellow-400">
                  {item.title}
                  <span className="text-yellow-400 group-open:hidden">+</span>
                  <span className="text-yellow-400 hidden group-open:inline">
                    −
                  </span>
                </summary>

                <div className="transition-[max-height] duration-500 ease-in-out overflow-hidden group-open:max-h-[500px] max-h-0">
                  <p className="text-gray-300 mt-3 text-sm sm:text-base leading-relaxed opacity-0 group-open:opacity-100 transition-opacity duration-500">
                    {item.desc}
                  </p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section
        id="action"
        className="w-full py-20 sm:py-32 px-6 sm:px-10 bg-gradient-to-r from-[#1B2E45] via-[#243954] to-[#1B2E45] shadow-lg text-center bg-[#0D1117]"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-[clamp(2.25rem,5vw,3rem)] font-extrabold text-white mb-6 sm:mb-8"
        >
          {translation.home.cta.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-base sm:text-lg font-extrabold text-yellow-400 mb-8 sm:mb-10 max-w-2xl mx-auto"
        >
          {translation.home.cta.desc}
        </motion.p>

        {/* <motion.a
          href="#start"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-yellow-400 text-black font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-xl transition"
        >
          {translation.home.cta.button}
        </motion.a> */}
        <AboutPage translation={translation} />
      </section>

      {/* Scroll to Top Button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-yellow-400 text-black px-4 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition-all"
        >
          ↑
        </button>
      )}
      {/*call to contact */}
      <ContactForm translation={translation} />
    </div>
  );
};

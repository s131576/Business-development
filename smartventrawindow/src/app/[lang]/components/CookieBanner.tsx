"use client";
import CookieConsent from "react-cookie-consent";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import getTranslation from "./translation/getTranslation";

export function CookieBanner() {
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/nl")
    ? "nl"
    : pathname.startsWith("/en")
    ? "en"
    : "fr";
  const [translation, setTranslation] = useState<any>(null);

  useEffect(() => {
    async function fetchTranslation() {
      const langTranslation = await getTranslation(currentLang);
      setTranslation(langTranslation);
    }
    fetchTranslation();
  }, [currentLang]);

  if (!translation) return null;

  return (
    <CookieConsent
      location="bottom"
      buttonText={translation.cookiesverklaring.accept}
      declineButtonText={translation.cookiesverklaring.decline}
      enableDeclineButton
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      declineButtonStyle={{ fontSize: "13px" }}
      cookieName="tabeven-consent"
    >
      {translation.cookiesverklaring.bannerText}{" "}
      <a href={`/${currentLang}/cookies`}  className="underline text-yellow-400">
        {translation.footer.cookies}
      </a>
    </CookieConsent>
  );
}

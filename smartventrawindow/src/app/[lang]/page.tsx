import React from "react";
import getTranslation from "./components/translation/getTranslation";
import { Locale } from "../utils/i18n-config";
import { HomePage } from "./components/HomePage";

export default async function Page({ params }: { params: { lang: Locale } }) {
  const translation = await getTranslation(params.lang); // ✅ Vertaling ophalen

  return (
    <div>
      <HomePage translation={translation} />
    </div>
  );
}

// ✅ Voeg deze functie toe voor statische generatie van pagina's
export async function generateStaticParams() {
  return [{ lang: "nl" }, { lang: "en" }, { lang: "fr" }]; // Zorgt dat Next.js weet welke talen beschikbaar zijn
}

import React from "react";
import getTranslation from "./components/translation/getTranslation";
import { Locale } from "../utils/i18n-config";
import { HomePage } from "./components/HomePage";

export default async function Page({ params }: { params: { lang: string } }) {
  const lang = await Promise.resolve(params.lang); // ✅ Zorgt dat Next.js params als string herkent
  const translation = await getTranslation(lang as Locale); // ✅ Correct ophalen van vertaling

  return (
    <div>
      <HomePage translation={translation} />
    </div>
  );
}

// ✅ Voeg deze functie toe voor statische generatie van talen
export async function generateStaticParams() {
  return [{ lang: "nl" }, { lang: "en" }, { lang: "fr" }];
}

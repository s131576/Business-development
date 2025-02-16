import React from "react";
import getTranslation from "./components/translation/getTranslation";
import { Locale } from "../utils/i18n-config";
import { HomePage } from "./components/HomePage";

const Page = async ({ params }: { params: { lang: Locale } }) => {
  const translation = await getTranslation(params.lang); // ✅ Correct gebruik van await

  return (
    <div>
      <HomePage translation={translation} /> {/* ✅ Correcte prop naam */}
    </div>
  );
};

export default Page;

import React from "react";
import getTranslation from "./components/translation/getTranslation";
import { Locale } from "../utils/i18n-config";
import { HomePage } from "./components/HomePage";

const Page = async ({ params }: { params: Promise<{lang: Locale }> }) => {
  const resolvedParams = await params;
  const translation = await getTranslation(resolvedParams.lang);
  return (
    <div>
      <HomePage translation={translation} />
    </div>
  );
}

export async function generateStaticParams() {
  return [{ lang: "nl" }, { lang: "en" }, { lang: "fr" }];
}
 export default Page;


import React from "react";

import AboutPage from "../components/AboutPage";
import getTranslation from "../components/translation/getTranslation";
import { Locale } from "@/app/utils/i18n-config";



const Page = async ({ params }: { params: Promise<{lang: Locale }> }) => {
  const resolvedParams = await params;
  const translation = await getTranslation(resolvedParams.lang);
  return (
    <div>
      <AboutPage translation={translation} />
    </div>
  );
}


 export default Page;
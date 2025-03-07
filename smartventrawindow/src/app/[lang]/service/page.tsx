

import React from "react";

import getTranslation from "../components/translation/getTranslation";
import { Locale } from "@/app/utils/i18n-config";
import ServicesPage from "../components/ServicePage";



const Page = async ({ params }: { params: Promise<{lang: Locale }> }) => {
  const resolvedParams = await params;
  const translation = await getTranslation(resolvedParams.lang);
  return (
    <div>
      <ServicesPage translation={translation} />
    </div>
  );
}


 export default Page;
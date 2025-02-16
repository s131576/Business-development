import React from "react";
import getTranslation from "./components/translation/getTranslation";
import { Locale } from "../utils/i18n-config";

const Page = async ({ params }: { params: { lang: Locale } }) => {
  const translation = await getTranslation(params.lang);

  return (
    <div>
      <h1>{translation.home.welcome}</h1>
      <p>{translation.home.description}</p>
      <h1>{translation.home.welcome}</h1>
      <p>{translation.home.description}</p>
      <h1>{translation.home.welcome}</h1>
      <p>{translation.home.description}</p>
      <h1>{translation.home.welcome}</h1>
      <p>{translation.home.description}</p>
      <h1>{translation.home.welcome}</h1>
      <p>{translation.home.description}</p>
    </div>
  );
};

export default Page;

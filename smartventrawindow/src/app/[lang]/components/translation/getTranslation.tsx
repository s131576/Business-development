import { getDictionary } from "@/app/utils/get-dictionary";
import { Locale } from "@/app/utils/i18n-config";


export default async function getTranslation(lang:Locale) {
    const translation = getDictionary(lang)
    return translation;
  }
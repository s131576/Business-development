
import type { Locale } from './i18n-config'

import en from './../dictionaries/locals/en/en.json';
import nl from './../dictionaries/locals/nl/nl.json';
import fr from './../dictionaries/locals/fr/fr.json';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: en,
  nl: nl,
  fr: fr,
}

export const getDictionary =  async(locale: Locale) =>
  dictionaries[locale] ?? dictionaries.en
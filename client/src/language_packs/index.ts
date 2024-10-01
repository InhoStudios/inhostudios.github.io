import { AUTH_LEVELS } from "~/typings/enums";

export const languageCodeList = ["en" /*, "fr"*/] as const;

export type LanguageCode = (typeof languageCodeList)[number];

export type LanguagePacks = {
  [key in LanguageCode]: LanguagePackTemplate & { code: key };
};

export type LanguagePackTemplate = {
};

export type GenderOptions = "m" | "f" | "o";
export type SkinTypeOptions = "1" | "2" | "3" | "4" | "5" | "6";
export type EthnicityOptions =
  | "black"
  | "eastAsian"
  | "latino"
  | "middleEastern"
  | "southAsian"
  | "seAsian"
  | "pi"
  | "white"
  | "multi"
  | "other";

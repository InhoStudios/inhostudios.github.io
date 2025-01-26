import { proxy } from "valtio";
import {
  LanguageCode,
  languageCodeList,
  LanguagePacks,
} from "~/language_packs";
import { languagePackEn } from "~/language_packs/en";
// import { languagePackFr } from "~/language_packs/fr";
import { GlobalStateProps } from "~/typings/state";
import { Token } from "~/typings/user";

export const SERVER_ENDPOINT = `${window.location.protocol}//${process.env.REACT_APP_EXP_IP}:${process.env.REACT_APP_EXP_PORT}`;
// export const SERVER_ENDPOINT = `http://localhost:9000`;

export const languagePacks: LanguagePacks = {
  en: { ...languagePackEn, code: "en" },
  // fr: { ...languagePackFr, code: "fr" },
};

export function setLanguage(languageCode: LanguageCode) {
  if (languageCodeList.includes(languageCode)) {
    globalState.language = languagePacks[languageCode];
    localStorage.setItem("language", languageCode);
  }
}

const initialLanguageCode =
  (localStorage.getItem("language") as LanguageCode) ?? "en";

export const globalState = proxy<GlobalStateProps>({
  language: languagePacks[initialLanguageCode],
});

export async function setCSRFToken() {
  const token: Token = await fetch(`${SERVER_ENDPOINT}/csrf`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(data => data.json())
    .catch(err => console.log(err));
  globalState.csrfToken = token;
}

export async function wrapHeaderWithCSRFToken(headers: any) {
  await setCSRFToken();
  const wrappedHeaders = {
    ...headers,
    Authorization: `CSRF ${globalState.csrfToken?.token}, ${headers.Authorization}`,
  };
  return wrappedHeaders;
}

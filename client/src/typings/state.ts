import { LanguageCode, LanguagePackTemplate } from "~/language_packs";
import { Token, User } from "~/typings/user";

export type GlobalStateProps = {
  language: LanguagePackTemplate & { code: LanguageCode };
  user?: User;
  csrfToken?: Token;
  tokenTimer?: NodeJS.Timeout;
};

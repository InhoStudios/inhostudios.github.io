import { AUTH_LEVELS } from "~/typings/enums";

export type User = {
  uuid: string;
  email: string;
  name: string;
  iat: number;
  mid: string;
  authLevel: AUTH_LEVELS;
  token: Token;
};

export type Token = {
  token: string;
  expiry: number;
};

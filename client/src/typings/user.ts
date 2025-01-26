export type User = {
  uuid: string;
  email: string;
  name: string;
  iat: number;
  mid: string;
  token: Token;
};

export type Token = {
  token: string;
  expiry: number;
};

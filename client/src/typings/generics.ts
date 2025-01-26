import { Dispatch, SetStateAction } from "react";

export type Dict<T, K extends string = string> = {
  [key in K]?: T;
};

export type SetState<T> = Dispatch<SetStateAction<T>>;

export type EncryptedPacket = {
  key: string | false;
  data: string;
};

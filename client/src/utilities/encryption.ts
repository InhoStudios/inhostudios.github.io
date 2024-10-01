import CryptoES from "crypto-es";
import { JSEncrypt } from "jsencrypt";
import { assert } from "./util";
import { SERVER_ENDPOINT, wrapHeaderWithCSRFToken } from "./globalState";

const rsaEncrypt = new JSEncrypt();

const aes_iv = process.env.REACT_APP_AES_IV ?? "";

// let key = CryptoES.enc.Hex.parse(secret_key);
const iv = CryptoES.enc.Hex.parse(aes_iv);

export async function genKey() {
  const handshake = await fetch(`${SERVER_ENDPOINT}/auth/handshake`, {
    headers: await wrapHeaderWithCSRFToken({
      "Content-Type": "application/json",
    }),
  })
    .then(data => data.json())
    .catch(err => console.log(err));

  const rsa_public_key = handshake.public_key;

  if (!window.crypto) throw Error("Crypto library required");

  const byte_array = new Uint8Array(64);
  window.crypto.getRandomValues(byte_array);

  const key = Array.from(byte_array, function (byte) {
    return ("0" + (byte & 0xff).toString(16)).slice(-2);
  }).join("");

  rsaEncrypt.setPublicKey(rsa_public_key);

  const encryptedKey = rsaEncrypt.encrypt(key);

  return {
    key: key,
    encryptedKey: encryptedKey,
  };
}

export function readToken(tokenString: string) {
  const components = tokenString.split(".");

  assert(components.length === 3, "readToken", "Malformed token string");

  const b64_header = components[0],
    b64_payload = components[1];

  const header = JSON.parse(base64url_decode(b64_header));
  const payload = JSON.parse(base64url_decode(b64_payload));

  assert(header.alg === "HS256", "readToken", "Wrong signing algorithm");

  return payload;
}

export function base64url_decode(str: string) {
  const base64Encoded = str.replace(/-/g, "+").replace(/_/g, "/");
  const padding = str.length % 4 === 0 ? "" : "=".repeat(4 - (str.length % 4));
  const base64WithPadding = base64Encoded + padding;
  return atob(base64WithPadding);
}

export async function encryptData(dataToEncrypt: string) {
  const { key, encryptedKey } = await genKey();

  const encryptedData = CryptoES.AES.encrypt(dataToEncrypt, key, {
    iv: iv,
  }).toString();

  return {
    key: encryptedKey,
    data: encryptedData,
  };
}

export function simpleEncrypt(key: string, data_string: string) {
  const encrypted_data = CryptoES.AES.encrypt(data_string, key, {
    iv: iv,
  }).toString();
  return encrypted_data;
}

export function simpleDecrypt(key: string, encrypted_data: string) {
  const decrypted_data = CryptoES.AES.decrypt(encrypted_data, key, {
    iv: iv,
  }).toString(CryptoES.enc.Utf8);
  return decrypted_data;
}

export function decryptData(encryptedData: string) {
  // return CryptoES.AES.decrypt(encryptedData, key, { iv: iv }).toString(CryptoES.enc.Utf8);
}

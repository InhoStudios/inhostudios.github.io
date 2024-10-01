import { Token } from "~/typings/user";
import { assert } from "~/utilities/util";
import { readToken } from "~/utilities/encryption";
import {
  globalState,
  SERVER_ENDPOINT,
  wrapHeaderWithCSRFToken,
} from "~/utilities/globalState";

export const initUser = async (token: Token) => {
  // console.log("initUser() token", token);

  try {
    const tokenPayload = readToken(token.token);

    assert(
      tokenPayload.mid === getHID(),
      "checkToken",
      "Incorrect hardware ID"
    );
    assert(Date.now() < token.expiry);

    globalState.user = {
      uuid: tokenPayload.uid,
      email: tokenPayload.email,
      name: tokenPayload.name,
      mid: tokenPayload.mid,
      iat: tokenPayload.iat,
      authLevel: tokenPayload.auth_level,
      token: token,
    };

    const userResponse = await fetch(`${SERVER_ENDPOINT}/auth/get_user`, {
      method: "POST",
      headers: await wrapAuthToken({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ token: token }),
    }).then(data => data.json());

    assert(tokenPayload.uid === userResponse.user_id);

    localStorage.setItem("token", JSON.stringify(token));
  } catch (e) {
    globalState.user = undefined;
    localStorage.removeItem("token");
    console.log("initUser()", e);
  }
};

export const getHID = () => {
  let hid = localStorage.getItem("hid");

  if (!hid) {
    hid = window.crypto.randomUUID();
    localStorage.setItem("hid", hid);
  }

  return hid;
};

export const wrapAuthToken = async (headers: any) => {
  let updateHeaders = {
    ...headers,
  };
  if (!!globalState.user?.token) {
    updateHeaders = {
      ...headers,
      Authorization: `Bearer ${globalState.user.token.token}, ${headers.authorization}`,
    };
  }
  return await wrapHeaderWithCSRFToken(updateHeaders);
};

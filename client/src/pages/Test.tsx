import React from "react";
import { SERVER_ENDPOINT } from "~/utilities/globalState";

export function Test() {
  const postCSRFToken = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const result = await fetch(`${SERVER_ENDPOINT}/csrf`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(data => data.text())
      .catch(err => console.log(err));

    // console.log(result);
  };

  return (
    <div className="row">
      <button onClick={postCSRFToken}>new token</button>
    </div>
  );
}

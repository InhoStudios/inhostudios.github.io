export function assert(truth: boolean, source = "", error_message = "") {
  if (!truth) {
    console.log(source + ": " + error_message);
    throw source + ": " + error_message;
  }
}

/** Generate Base58 (alphanumeric without lookalikes) of specified length */
export function generateAlphaNumId(length: number) {
  const chars = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

  let result = "";
  for (let i = 0; i < length; i++)
    result += chars[Math.floor(Math.random() * chars.length)];

  return result;
}

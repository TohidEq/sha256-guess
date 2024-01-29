import sha256 from "sha256";
import getRandomNumber from "./getRandomNumber";

export default function generateRandomSha256(): string {
  const sha = sha256(getRandomNumber(0, 9999999).toString());
  return sha;
}

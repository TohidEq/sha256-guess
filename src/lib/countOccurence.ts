// Tnx God ❤️ https://github.com/Keftcha/sha256le/blob/master/utils/countOccurence.js

export const countOccurence = (word: string, character: string) => {
  return word.split("").filter((c: string) => c === character).length;
};
// secret: sha256(string)
export const countOccurenceGoodPlaceAfter = (
  start: number,
  guess: string,
  secret: string,
  character: string
) => {
  let nb = 0;

  for (let i = start; i < secret.length; i++) {
    if (guess[i] === character && secret[i] === character) {
      nb++;
    }
  }

  return nb;
};

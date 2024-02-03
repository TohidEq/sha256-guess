"use client";
import nextId from "react-id-generator";
import PrintGuess from "./PrintGuess";
import {
  countOccurence,
  countOccurenceGoodPlaceAfter,
} from "@/lib/countOccurence";
type Props = {
  guess: string;
  randomString: string;
};

export default function CheckGuess({ guess, randomString }: Props) {
  const item: {
    [key: number]: {
      char: string;
      class: string; // correct, incorrectPosition, incorrect
    };
  } = {};

  Object.values(guess).map((guessChar, index) => {
    // item[index] = {
    //   char: guessChar,
    //   class: !(index % 3)
    //     ? "correct"
    //     : !(index % 2)
    //     ? "incorrect"
    //     : "incorrectPosition",
    // };
    // console.log("index:", index, "guessChar:", guessChar);

    if (guessChar === randomString[index]) {
      item[index] = {
        char: guessChar,
        class: "correct",
      };
    } else if (
      countOccurence(guess.slice(0, index), guessChar) <
      countOccurence(randomString, guessChar) -
        countOccurenceGoodPlaceAfter(index + 1, guess, randomString, guessChar)
    ) {
      item[index] = {
        char: guessChar,
        class: "incorrectPosition",
      };
    } else {
      item[index] = {
        char: guessChar,
        class: "incorrect",
      };
    }
  });

  return (
    <div className="guess">
      <PrintGuess guess={item} />
    </div>
  );
}

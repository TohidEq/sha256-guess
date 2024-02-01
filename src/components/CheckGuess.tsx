"use client";
import nextId from "react-id-generator";
import PrintGuess from "./PrintGuess";
type Props = {
  guess: {
    [key: number]: string;
  };
  sha256: string;
};

export default function CheckGuess({ guess }: Props) {
  console.log("guess::::", guess);

  const item: {
    [key: number]: {
      char: string;
      class: string; // correct, incorrectPosition, incorrect
    };
  } = {};
  // for (let i = 0; i < 64; i++) {
  //   item[i] = guess[i];
  // }
  Object.values(guess).map((i, num) => {
    item[num] = {
      char: i,
      class: !(num % 3)
        ? "correct"
        : !(num % 2)
        ? "incorrect"
        : "incorrectPosition",
    };
  });

  return (
    <div className="guess">
      {/* {Object.values(guess).map((i) => (
        <div key={nextId()}>{i}</div>
      ))} */}
      <PrintGuess guess={item} />
    </div>
  );
}

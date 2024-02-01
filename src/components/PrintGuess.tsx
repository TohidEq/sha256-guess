import React from "react";

type Props = {
  guess: {
    [key: number]: {
      char: string;
      class: string; // correct, incorrectPosition, incorrect
    };
  };
};

export default function PrintGuess({}: Props) {
  return <div>PrintGuess</div>;
}

import React from "react";
import nextId from "react-id-generator";
type Props = {
  guess: {
    [key: number]: {
      char: string;
      class: string; // correct, incorrectPosition, incorrect
    };
  };
};

export default function PrintGuess({ guess }: Props) {
  return (
    <div className="chars  flex flex-wrap">
      {Object.values(guess).map((i) => (
        <div key={nextId()} className={`char ${i.class}`}>
          {i.char}
        </div>
      ))}
    </div>
  );
}

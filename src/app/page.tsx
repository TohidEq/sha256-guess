"use client";

import CheckGuess from "@/components/CheckGuess";
import generateRandomSha256 from "@/lib/generateRandomSha256";
import { useRef, useState } from "react";

export default function Home() {
  const [randomSha256, setRandomSha256] = useState<string>(
    generateRandomSha256()
  );
  const [guess, setGuess] = useState<{
    [key: number]: string;
  }>({});

  console.log(randomSha256);

  const changeControll = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputId = Number(e.currentTarget.id);
    console.log(inputId);
    if (e.currentTarget.value) {
      guess[`${inputId}`] = e.currentTarget.value;
      document.getElementById((inputId + 1).toString())?.focus();
      document.getElementById((inputId + 1).toString())?.select();

      console.log(guess);
    }
  };

  const allInputs: JSX.Element[] = [];

  for (let i = 0; i < 64; i++) {
    const input = (
      <input
        key={i}
        className="myinput"
        type="text"
        maxLength={1}
        onKeyUp={changeControll}
        id={`${i}`}
        placeholder={`${i % 2 ? "O" : "X"}`}
        required
      />
    );
    allInputs[i] = input;
  }

  const [guessCounter, setGuessCounter] = useState(0);
  const [checkGuessResults, setCheckGuessResults] = useState<JSX.Element[]>([]);
  // type form yadam nare :D =  React.SyntheticEvent<HTMLFormElement> #note
  const submitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    console.log("submit func");

    e.preventDefault();
    checkGuessResults[guessCounter] = (
      <CheckGuess guess={guess} sha256={randomSha256} key={guessCounter} />
    );
    console.log(checkGuessResults);

    setGuessCounter(guessCounter + 1);
  };

  return (
    <main className="Home">
      <form action="" onSubmit={submitHandler}>
        <div className="inputs">{allInputs.map((input) => input)}</div>
        <div className="btns">
          <button type="submit" className="btn">
            🔎
          </button>
        </div>
      </form>
      <div className="check-guess">
        {checkGuessResults.toReversed().map((item) => item)}
      </div>
    </main>
  );
}

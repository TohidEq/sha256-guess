"use client";

import CheckGuess from "@/components/CheckGuess";
import generateRandomSha256 from "@/lib/generateRandomSha256";
import getCharactersNumber from "@/lib/getCharactersNumber";
import { env } from "process";
import { useState } from "react";

export default function Home() {
  const [randomSha256, setRandomSha256] = useState<string>(
    generateRandomSha256()
  );
  const [chars, setChars] = useState(getCharactersNumber());

  const [guess, setGuess] = useState<{
    [key: number]: string;
  }>({});

  console.log(randomSha256);

  const changeControll = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputId = Number(e.currentTarget.id);
    console.log(inputId);
    if (e.currentTarget.value && inputId < chars) {
      guess[`${inputId}`] = e.currentTarget.value;

      const nextInput = document.getElementById(
        (inputId + 1).toString()
      ) as HTMLInputElement;

      nextInput.focus();
      nextInput.select();

      console.log(guess);
    }
  };

  const allInputs: JSX.Element[] = [];

  for (let i = 0; i < chars; i++) {
    const input = (
      <input
        key={i}
        className="charInput char"
        type="text"
        maxLength={1}
        onKeyUp={changeControll}
        id={`${i}`}
        placeholder={`${i % 2 ? "◦" : "•"}`}
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
    setGuessCounter(guessCounter + 1);

    console.log(checkGuessResults);
  };

  return (
    <main className="Home">
      <form action="" onSubmit={submitHandler} autoComplete="off">
        <div className="chars">{allInputs.map((input) => input)}</div>
        <div className="btns">
          <input type="submit" value="🔎" className="btn" id={`${chars}`} />
        </div>
      </form>

      <div className="check-guess">
        {checkGuessResults.toReversed().map((item) => item)}
      </div>
    </main>
  );
}

"use client";

import CheckGuess from "@/components/CheckGuess";
import generateRandomSha256 from "@/lib/generateRandomSha256";
import getCharactersNumber from "@/lib/getCharactersNumber";
import { BiDownArrow } from "react-icons/bi";
import { useState } from "react";

export default function Home() {
  const [randomString, setRandomString] = useState<string>(
    generateRandomSha256() // u should use your own create random string func <if u change (getCharactersNumber.ts)>
  );
  const [charsNumber, setCharsNumber] = useState(getCharactersNumber());

  const getGuess = (): string => {
    let strGuess = "";
    for (let i = 0; i < charsNumber; i++) {
      const input = document.getElementById(i.toString()) as HTMLInputElement;
      strGuess += input.value.toString();
    }
    return strGuess;
  };

  // console.log(randomString);

  const changeControl = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // console.log("changeControl func");
    const inputId = Number(e.currentTarget.id);

    if (e.currentTarget.value && inputId < charsNumber - 1) {
      const nextInput = document.getElementById(
        (inputId + 1).toString()
      ) as HTMLInputElement;

      nextInput.focus();
      nextInput.select();
    }
  };

  const [guessCounter, setGuessCounter] = useState(0);
  const [checkGuessResults, setCheckGuessResults] = useState<JSX.Element[]>([]);
  // type form yadam nare :D =  React.SyntheticEvent<HTMLFormElement> #note
  const submitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("submit func");

    let guess = getGuess();
    checkGuessResults[guessCounter] = (
      <CheckGuess
        guess={guess}
        randomString={randomString}
        key={guessCounter}
      />
    );
    setGuessCounter(guessCounter + 1);

    // console.log(checkGuessResults);
  };

  // create all inputs
  const allInputs: JSX.Element[] = [];
  for (let i = 0; i < charsNumber; i++) {
    const input = (
      <input
        key={i}
        className="charInput char"
        type="text"
        maxLength={1}
        onKeyUp={changeControl}
        id={`${i}`}
        placeholder={`${i % 2 ? "◦" : "•"}`}
        required
      />
    );
    allInputs[i] = input;
  }
  return (
    <main className="Home">
      <div className="game">
        <form action="" onSubmit={submitHandler} autoComplete="off">
          <div className="chars">{allInputs.map((input) => input)}</div>
          <div className="btns">
            <button type="submit" className="btn" id={`${charsNumber}`}>
              <BiDownArrow />
            </button>
          </div>
        </form>

        <div className="check-guess">
          {checkGuessResults.toReversed().map((item) => item)}
        </div>
      </div>
    </main>
  );
}

"use client";

import generateRandomSha256 from "@/lib/generateRandomSha256";
import { useRef, useState } from "react";

export default function Home() {
  const randomSha256 = generateRandomSha256();
  const [guess, setGuess] = useState<any>({ "1": 123 });
  const myRef = useRef<any>();
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

  const allInputs = [];

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

  return (
    <main className="Home">
      <form action="" ref={myRef}>
        <div className="inputs">{allInputs.map((input) => input)}</div>
        <div className="btns">
          <button type="submit" className="btn">
            check
          </button>
        </div>
      </form>
    </main>
  );
}

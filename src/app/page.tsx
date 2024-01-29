"use client";

import generateRandomSha256 from "@/lib/generateRandomSha256";
import { useState } from "react";

export default function Home() {
  const randomSha256 = generateRandomSha256();
  const [guess, setGuess] = useState<string>();
  console.log(randomSha256);

  return (
    <main className="Home">
      <p>hello, this is Home</p>
    </main>
  );
}

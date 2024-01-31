"use client";

type Props = {
  guess: {
    [key: number]: string;
  };
  sha256: string;
};

export default function CheckGuess({ guess }: Props) {
  console.log("guess::::", guess);

  // const item = [];
  // for (let i = 0; i < 64; i++) {
  //   item[i] = guess[i];
  // }

  return (
    <div className="flex flex-wrap">
      CheckGuess:
      {Object.values(guess).map((i) => (
        <div key={"test"}>{i}</div>
      ))}
    </div>
  );
}

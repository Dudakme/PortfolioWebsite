import Navbar from "../components/nav";
import FirstSec from "../components/main/FirstShowing";
import SecSection from "../components/main/SecShowing";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const getAverage = (text: string) => {
    const Numbers: Array<number> = text.split(/\s+/).map(Number);

    let result: number = 0;

    Numbers.forEach((number) => {
      result += number;
    });

    console.log(result)

    result = result / (Numbers.length);

    console.log(Numbers.length)

    setResult(result)

    return 0;
  };
  return (
    <div className="">
      <Navbar />
      <main className="pt-20 text-center mx-20">
        <h1 className="mt-20 text-6xl ">get the average!</h1>
        <div className="">
          <input
            className="mt-10 px-1 border w-6/12 h-20 rounded-md shadow-sm"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            name="name"
            required
          />
          <button className="bg-blue-600 w-2/12 h-20 border shadow-sm rounded-md text-white" onClick={ () => {getAverage(input)}}>
            Go!
          </button>

          <h1 className="mt-20 text-6xl text-clip overflow-hidden">{result}</h1>
        </div>
      </main>
    </div>
  );
}

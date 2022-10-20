import React, { useState, useEffect } from "react";
import Image from "next/image";
import WaveAnimation from "./waveAnimation";

const FirstSec: React.FC<any> = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col mt-40 relative">
      <WaveAnimation />
      <div>
        <main className="pt-4 text-center pb-36 bg-blue-600 h-screen">
          <Image
            src="/fish.svg"
            width="100"
            height="100"
            className="mt-20"
          />
          <h1 className="font-bold drop-shadow-sm text-5xl z-10 mb-3 text-gray-700">
            학생 개발자
          </h1>
          <p className="text-xl text-gray-600 drop-shadow-sm">
            안녕하세요. 개발을 좋아하는 평범한 학생입니다.
          </p>
        </main>
      </div>
    </div>
    </div>
  );
};

export default FirstSec;

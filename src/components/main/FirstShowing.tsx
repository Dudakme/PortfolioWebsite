import React, { useState, useEffect } from "react";
import Image from "next/image";

const FirstSec: React.FC<any> = () => {
  

  return (
    <div className="m-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2563EB"
          fill-opacity="1"
          d="M0,64L60,90.7C120,117,240,171,360,186.7C480,203,600,181,720,176C840,171,960,181,1080,186.7C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <main className="pt-4 text-center pb-72 bg-blue-600">
        <Image
          src="/fish.svg"
          width="100"
          height="100"
          className="mt-20 animate-pulse"
        />
        <h1 className="font-bold drop-shadow-sm text-5xl z-10 mb-3 text-white">
          학생 개발자
        </h1>
        <p className="text-xl text-gray-300">
          안녕하세요. 개발을 좋아하는 평범한 학생입니다.
        </p>
      </main>
    </div>
  );
};

export default FirstSec;

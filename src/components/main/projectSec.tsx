import React from "react";
import Image from "next/image";

const Card: React.FC<any> = (props: any) => {
  return (
    <div className="flex md:mx-5 mx-1 text-left" id='project'>
      <div className="block p-6 rounded-lg shadow-md bg-white max-w-sm">
        <h5 className="text-gray-900 md:text-xl text-sm leading-tight font-medium mb-2">
          {props.title}
        </h5>
        <p className="text-gray-700 md:text-xl text-sm mb-4">{props.description}</p>
      </div>
    </div>
  );
};

const SecSec: React.FC<any> = () => {
  return (
    <main className="pb-10 justify-center text-center bg-blue-600 pt-10 shadow-md">
      <h1 className="text-4xl mb-10 text-gray-100">프로젝트</h1>
      <div className="flex justify-center">
        <Card
        
          title="간편한 평균 구하기"
          description="Next.js 를 이용해서 만든 평균 구하는 애플리케이션. React 의 props 와 useState 을 더 정교하게 다루게 됨."
        />
        <Card
          title="블로그 API"
          description="Kotlin 의 Ktor 를 이용한 블로그용 API. Ktor 를 경험하기 위해 처음부터 끝까지 제작. 이 프로젝트를 하며 코틀린의 문법을 더 자세하게 공부하게 됨."
        />
        <Card
          title="블로그 API2"
          description="Nest.js 를 이용한 두번째 API. (진행중..)"
        />
      </div>
    </main>
  );
};

export default SecSec;

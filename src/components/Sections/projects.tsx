import { SecondCard as Card } from "../cards";
import React from "react";

const SecSec: React.FC = () => {
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

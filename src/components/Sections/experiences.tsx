import { FirstCard as Card } from "../cards";
import React from "react";
import Image from "next/image";

import type { Experience } from "../../types";

const filepath = "/images";

const ExperiencesList: Array<Experience> = [
  {
    imageLink: `${filepath}/nextjs.svg`,
    title: "Next.js",
    description:
      "Next.js 를 이용한 웹사이트 제작 경험. (이 웹사이트도 Next.js로 만들어졌어요 >_<)",
  },
  {
    imageLink: `${filepath}/android.svg`,
    title: "Android",
    description: "Kotlin 으로 안드로이드 앱 제작 경험. (코틀린 너무 조아 ^ㅇ^)",
  },
  {
    imageLink: `${filepath}/nestjs.svg`,
    title: "Nest.js",
    description:
      "Nest.js 를 이용한 REST API 제작 경험. (간단 간편 너무 좋다 뿡)",
  },
  {
    imageLink: `${filepath}/ktor.svg`,
    title: "Ktor",
    description:
      "Ktor 를 이용한 REST API 제작 경험. (간단 간편 그리고 완벽한 파일 구조 :o )",
  },
  {
    imageLink: `${filepath}/react.svg`,
    title: "React",
    description:
      "React 를 이용한 스태딕 애플리케이션. (Next.js 전엔 리액트! >_<)",
  },
];

const Experiences: React.FC = () => (
  <main className="pb-10 block justify-center text-center mb-56">
    {ExperiencesList.map((experience, index) => {
      return index % 2 == 0 ? (
        <div className="inline-flex w-screen justify-center mb-10">
          <Image src={experience.imageLink} width="248" height="248" />
          <Card title={experience.title} description={experience.description} />
        </div>
      ) : (
        <div className="inline-flex w-screen justify-center mb-10">
          <Card title={experience.title} description={experience.description} />
          <Image src={experience.imageLink} width="248" height="248" />
        </div>
      );
    })}
  </main>
);

export default Experiences;

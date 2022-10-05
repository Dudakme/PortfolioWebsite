import React from "react";
import Image from "next/image";

const Card: React.FC<any> = (props: any) => {
  return (
    <div className="flex mx-5 text-left">
      <div className="block p-6 border-2 rounded-lg shadow-lg bg-white max-w-sm">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          {props.title}
        </h5>
        <p className="text-gray-700 text-base mb-4">{props.description}</p>
      </div>
    </div>
  );
};

const SecSec: React.FC<any> = () => {
  return (
    <main className="pb-10 block justify-center text-center mb-56">
      <div className="inline-flex w-screen justify-center mb-10">
        <Image src="/nextjs.svg" width="248" height="248" />
        <Card
          title="Next.js"
          description="Next.js 를 이용한 웹사이트 제작 경험. (이 웹사이트도 Next.js로 만들어졌어요 >_<)"
        />
        <div className="max-w-max"></div>
      </div>
      <div className="inline-flex justify-center">
        <Card
          title="Android"
          description="Kotlin 으로 안드로이드 앱 제작 경험. (코틀린 너무 조아 ^ㅇ^)"
        />
        <Image src="/android.svg" width="248" height="248" />
      </div>
    </main>
  );
};

export default SecSec;

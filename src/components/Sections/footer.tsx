import React from "react";

const Footer: React.FC<{}> = () => {
  return (
    <footer className="flex items-center justify-between flex-wrap bg-gray-800 p-6 w-full shadow-md z-20 opacity-100">

      <div className="flex-grow flex items-center ml-4">
        <div className="text-sm flex-grow">
          <a
            href="#responsive-header"
            className="inline-block mt-0 lg:mt-0 text-gray-400 hover:text-gray-600 mr-5"
          >
            블로그 - 제작 중
          </a>
          <a
            href="#responsive-header"
            className="inline-block mt-0 lg:mt-0 text-gray-400 hover:text-gray-600"
          >
            디스코드 - ! d#8876
          </a>
        </div>
      </div>

      <hr className="border-2"/>

      <p className="underline text-gray-400 hover:text-gray-600">©2022 ㅇㅅㅇ</p>
    </footer>
  );
};

export default Footer;

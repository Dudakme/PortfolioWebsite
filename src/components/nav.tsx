import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex fixed items-center justify-between flex-wrap bg-white p-6 w-full border-b-gray- border shadow-sm z-20 opacity-100">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <Link href='/'>
          <span className="font-semibold text-xl tracking-tight hover:cursor-pointer">ㅇㅅㅇ</span>
        </Link>
      </div>

      <div className="flex-grow flex items-center ml-4">
        <div className="text-sm flex-grow">
          <a
            href="#project"
            className="inline-block mt-0 lg:mt-0 text-black hover:text-gray-700 mr-5"
          >
            프로젝트
          </a>
          <a
            href="#responsive-header"
            className="inline-block mt-0 lg:mt-0 text-black hover:text-gray-700"
          >
            블로그
          </a>
        </div>
        <div className="m-auto">
          <a
            href="https://bit.ly/3RKwYlQ"
            className="inline-block px-4 py-2 leading-none border text-md bg-blue-600 rounded-2xl shadow-sm text-white hover:bg-blue4600 mt-0"
          >
            연락하기
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

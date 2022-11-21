import React from "react";
import type { Card } from "../types";

export const FirstCard: React.FC<Card> = ({ title, description }) => (
  <div className="flex md:mx-5 mx-1 text-left" id="project">
    <div className="block p-6 rounded-lg shadow-md bg-white max-w-sm">
      <h5 className="text-gray-900 md:text-xl text-sm leading-tight font-medium mb-2">
        {title}
      </h5>
      <p className="text-gray-700 md:text-xl text-sm mb-4">{description}</p>
    </div>
  </div>
);

export const SecondCard: React.FC<Card> = ({ title, description }) => (
  <div className="flex mx-5 text-left">
    <div className="block p-6 rounded-lg shadow-sm bg-white max-w-sm">
      <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
        {title}
      </h5>
      <p className="text-gray-700 text-base mb-4">{description}</p>
    </div>
  </div>
);

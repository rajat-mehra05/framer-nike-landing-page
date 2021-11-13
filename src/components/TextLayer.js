import React from "react";

const TextLayer = () => {
  return (
    <div className="text-container flex flex-col h-full px-2 py-28 md:px-52">
      <div className="text-container-top flex items-center justify-between text-lg md:text-2xl">
        <span className="text-green-600">Welcome to shoes gallery</span>
        <span className="first-letter:text-2xl"> 2/4 </span>
      </div>

      <div className="text-container-middle grid flex-1 place-items-center">
        <span className="text-5xl font-black tracking-wider md:text-9xl">
          Nike
        </span>
      </div>

      <div className="text-container-bottom flex items-center justify-between">
        <button className="p-2 text-base tracking-wide text-white lowercase bg-gray-900 rounded-lg md:px-6 md:py-3 md:text-lg">
          Shoes section
        </button>
        <p className="text-sm font-semibold md:text-2xl">
          Your amazing <span className="text-green-600">lifestyle</span> starts
          now!
        </p>
      </div>
    </div>
  );
};

export default TextLayer;

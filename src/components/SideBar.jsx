import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Users } from "lucide-react";
import { Image } from "lucide-react";
import { Ellipsis } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ChevronDown } from "lucide-react";

const SideBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [showWanted, setShowWanted] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-black/70 h-full flex flex-col text-center absolute top-0 left-0 transition-all duration-200 ease-in-out ${
        isHovered ? " w-56" : " w-16"
      }`}
    >
      <div className="text-white flex mb-36 items-center justify-center w-full text-xl xl:text-2xl font-bold mt-10">
        <h2
          className={` absolute transition-all  ease-in-out ${
            isHovered ? "opacity-100 duration-500" : "opacity-0 duration-75"
          }`}
        >
          CrimeScope
        </h2>
        <h2
          className={`  absolute transition-all ease-in-out ${
            isHovered ? "opacity-0 duration-75" : "opacity-100 duration-500"
          }`}
        >
          CS
        </h2>
      </div>
      <div className="flex flex-col h-full gap-12">
        <div className=" flex items-center justify-center text-white ">
          {isHovered ? (
            <div className="flex cursor-pointer flex-col">
              <div className="flex items-center gap-2">
                <Users size={24} />
                <button
                  onClick={() => setDropDown(!dropDown)}
                  className={` whitespace-nowrap flex gap-2 items-center cursor-pointer font-semibold text-sm uppercase transition-all ease-in ${
                    isHovered
                      ? "opacity-100 duration-700"
                      : "opacity-0 duration-0"
                  }`}
                >
                  Most Wanted
                  {dropDown ? <ChevronDown /> : <ChevronRight />}
                </button>
              </div>
              <div
                className={`flex flex-col mt-4 gap-4 ${
                  dropDown ? "block" : "hidden"
                }`}
              >
                <Link to="/wanted">Top Ten</Link>
                <button>Test</button>
              </div>
            </div>
          ) : (
            <Users
              size={24}
              className={`  font-semibold text-sm uppercase transition-all ease-in ${
                isHovered ? "opacity-0 duration-0" : "opacity-100 duration-500"
              }`}
            />
          )}
        </div>
        <div className=" flex items-center justify-center text-white transition-all duration-500 ease-in">
          {isHovered ? (
            <div className="flex gap-2 items-center cursor-pointer">
              <Image size={24} />
              <button
                className={` whitespace-nowrap font-semibold text-sm uppercase transition-all duration-100 ease-in ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                Stolen Art
              </button>
            </div>
          ) : (
            <Image size={24} />
          )}
        </div>
        <div className="w-full flex absolute bottom-5 items-center justify-center text-white transition-all  ease-in">
          {isHovered ? (
            <div className="flex gap-2 items-center cursor-pointer">
              <button
                className={` flex gap-4 items-center  whitespace-nowrap font-semibold text-sm uppercase transition-all duration-100 ease-in ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                Read More
                <ChevronRight size={18} />
              </button>
            </div>
          ) : (
            <Ellipsis size={24} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;

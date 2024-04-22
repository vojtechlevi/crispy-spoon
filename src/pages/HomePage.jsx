import React from "react";

import { useFugitives } from "../hooks/useFugitives";
import SideBar from "../components/SideBar";

const HomePage = () => {
  const { fugitives } = useFugitives(
    "https://api.fbi.gov/@wanted?pageSize=20&page=1&sort_on=modified&sort_order=asc"
  );
  return (
    <div className="h-screen w-full overflow-hidden flex justify-center items-center ">
      <SideBar />
      <div className=" text-white flex flex-col items-center justify-center gap-3 rounded-lg text-center ">
        <p className="text-xs md:text-xl xl:text-2xl font-medium">
          Discover the latest information on
        </p>
        <h1 className="text-lg md:text-2xl xl:text-4xl font-extrabold">
          FBI's Most Wanted Fugitives <br className="md:hidden" /> and Stolen
          Art.
        </h1>
        <p className="text-xs md:text-md lg:text-lg xl:text-xl">
          Stay informed, stay vigilant
        </p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 grid-rows-4 md:grid-rows-3 gap-4 pt-6 -z-10">
        <div className="h-full w-full absolute top-0 left-0 backdrop-blur-sm bg-black/80"></div>
        {fugitives
          .filter((fugitive) => fugitive.images && fugitive.images.length > 0)
          .map((fugitive, index) => {
            return (
              <div key={index} className=" relative text-white">
                <img
                  className="absolute top-0 left-0 w-full h-full -z-10"
                  src={fugitive.images[0].large}
                  alt=""
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;

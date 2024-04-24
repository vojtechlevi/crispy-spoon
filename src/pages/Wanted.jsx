import React, { useState } from "react";
import DOMPurify from "dompurify";

import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useFugitives } from "../hooks/useFugitives";

const Wanted = ({ url, subheading }) => {
  const { fugitives } = useFugitives(url);
  const [showDetails, setShowDetails] = useState({});

  return (
    <div className="h-screen w-full flex flex-col gap-8">
      <div className=" text-white flex flex-col mt-8 ml-4">
        <Link to="/" className="mb-4 ">
          <ChevronLeft />
        </Link>
        <h1 className="text-lg md:text-2xl xl:text-4xl font-extrabold">
          FBI's Most Wanted
        </h1>
        <h2>{subheading}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8   pb-8 px-4 ">
        {fugitives
          .filter((fugitive) => fugitive.images && fugitive.images.length > 0)
          .map((fugitive, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row  rounded-xl items-center justify-center  text-white ${
                  showDetails[fugitive["@id"]] ? "col-span-4" : ""
                }`}
              >
                <div className="relative h-[550px] bg-white/10 items-center rounded-xl flex flex-col gap-4 ">
                  <img
                    className="rounded-t-xl  w-[300px] h-[300px]"
                    src={fugitive.images[0].large}
                    alt=""
                  />
                  <div className=" flex-col gap-2 w-[300px] flex px-4 ">
                    {fugitive &&
                      fugitive.aliases &&
                      fugitive.aliases.length > 0 && (
                        <p>Alias: {fugitive.aliases[0]}</p>
                      )}
                    <p>Gender: {fugitive.sex}</p>
                    {fugitive &&
                      fugitive.nationality &&
                      fugitive.nationality.length > 0 && (
                        <p>Nationality: {fugitive.nationality}</p>
                      )}
                    {fugitive &&
                      fugitive.dates_of_birth_used &&
                      fugitive.dates_of_birth_used.length > 0 && (
                        <p>DOB: {fugitive.dates_of_birth_used[0]}</p>
                      )}
                    {fugitive &&
                      fugitive.place_of_birth &&
                      fugitive.place_of_birth.length > 0 && (
                        <p>POB: {fugitive.place_of_birth}</p>
                      )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Wanted;

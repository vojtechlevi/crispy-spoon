import React from "react";
import DOMPurify from "dompurify";

import { useFugitives } from "../hooks/useFugitives";

const Wanted = ({ url }) => {
  const { fugitives } = useFugitives(url);

  return (
    <div className="w-full h-full text-white flex flex-col items-center justify-center">
      <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-extrabold">
        Ten Most Wanted Fugitives
      </h2>
      <div className=" grid grid-cols-1 lg:grid-col-3">
        {fugitives
          .filter((fugitive) => fugitive.images && fugitive.images.length > 0)
          .map((fugitive, index) => {
            return (
              <div
                key={index}
                className=" flex flex-col md:flex-row gap-12 m-12 bg-[#0f0f0f] p-4 rounded-lg cursor-pointer text-white"
              >
                <div className=" h-full w-full md:min-w-[300px]">
                  <img
                    className="rounded-xl max-h-[300px] w-full"
                    src={fugitive.images[0].large}
                    alt=""
                  />
                  <div className="flex-col w-full gap-4 flex mt-4">
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
                <div className="hidden md:flex flex-col gap-12">
                  <p className="">
                    Caution: <br />
                    {DOMPurify.sanitize(fugitive.caution, {
                      ALLOWED_TAGS: [],
                    }).replace(/&nbsp;/g, " ")}
                  </p>
                  <p>
                    Reward: <br /> {fugitive.reward_text}
                  </p>
                  <p>Field Office: {fugitive.field_offices}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Wanted;

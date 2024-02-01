import React from "react";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => {
        return (
          <div key={technology.name} className="flex flex-col items-center">
            {/* <BallCanvas icon={technology.icon} /> */}
            <div className="w-[70px] h-[70px]  bg-white-100 rounded-full p-1 border-violet-400 border-2">
              <img className="rounded-full" src={technology.icon} alt="img" />
            </div>

            <div className="capitalize mt-2">{technology.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SectionWrapper(Tech, "");

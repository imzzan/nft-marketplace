import React from "react";
import { Link } from "react-router-dom";
import { BackgroundImage, avatar1, iconEye } from "../../assests";
import { Button2 } from "../atoms";
import { ActionTimer } from "../moleculs";

const HighLight = () => {
  return (
    <div className=" mt-16 md:mt-[100px]">
      <div className="relative md:h-[630px]">
        <img src={BackgroundImage} alt="background" className=" -z-10 w-full md:h-full object-cover" />
        <div className="bg-gradient-to-b opacity-1 flex items-center from-transparent to-[#A259FF] absolute top-0 w-full h-full">
          <div className=" container mx-auto md:justify-center lg:justify-around w-[315px] md:flex gap-10 md:w-[750px] lg:w-full items-center">
            <div>
              <div className="flex items-center bg-secondary p-2 w-[151px] rounded-[20px]">
                <img
                  src={avatar1}
                  alt="avatar"
                  className="w-[24px] h-[24px] rounded-full"
                />{" "}
                Shroomie
              </div>
              <h1 className=" font-[600] text-[38px] lg:text-[57px] leading-[43.2px] mt-4 md:mt-10 md:mb-10">
                Magic Mashrooms
              </h1>
              <Link to='/marketplace'><Button2 text="See NFT" icon={iconEye} className="w-full mt-10 border-none md:w-[200px] md:h-[60px] hover:scale-110 transition" /></Link>
            </div>
            <div>
              <ActionTimer />
              <Link to='/marketplace'><Button2 text="See NFT" icon={iconEye} className="w-full mt-10 md:hidden border-none hover:scale-110 transition" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighLight;

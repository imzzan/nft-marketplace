import React from "react";
import { Button2 } from "../../atoms";
import { iconArrowRight } from "../../../assests";
import ArtistCard from "./ArtistCard";
import { Link } from "react-router-dom";

const MoreNft = () => {
  return (
    <div className="mt-16 lg:mt-24 w-[315px] md:w-[750px] lg:w-full container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-[28px] md:text-[38px] leading-[39.2px] md:leading-[46px] font-[600]">
          More from this artist
        </h1>
        <Link to='/artistpage'><Button2 text="Go To Artist Page" icon={iconArrowRight} className="w-full mt-10 border-2 border-primary md:w-[200px] md:h-[60px] hidden md:flex hover:scale-110 transition" /></Link>
      </div>
      <ArtistCard/>
      <Link to='/artistpage'><Button2 text="Go To Artist Page" icon={iconArrowRight} className="w-full mt-4 mb-10 border-2 border-primary md:w-[200px] md:h-[60px] md:hidden hover:scale-110 transition" /></Link>
    </div>
  );
};

export default MoreNft;

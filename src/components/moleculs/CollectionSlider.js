import React from "react";
import {image2, image3} from "../../assests";
import { ArtistCard } from "../atoms";

const CollectionSlider = ({ mainImage, invisibility, title, user, avatar}) => {

  return (
      <div className={`${invisibility} w-[315px] md:w-[400px]`}>
        <img src={mainImage} alt="image2" className="w-full mx-auto object-cover" />
        <div className="mt-5 flex justify-between">
            <img src={image2} alt="image2" className="w-[90px]" />
            <img src={image3} alt="image2" className="w-[90px]" />
            <div className="w-[90px] h-[90px] cursor-pointer bg-primary rounded-[20px] flex justify-center items-center">
              <p className=" font-[700] text-[16px] leading-[140%]">1025+</p>
            </div>
          </div>
          <ArtistCard image={avatar} text={user} title={title} />
      </div>
  );
};

export default CollectionSlider;

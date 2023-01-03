import React from "react";

const ArtistCard = ({title, image,text, mono }) => {
  return (
    <>
    <h5 className="text-[22px] leading-[140%] font-[600] mt-5">{title}</h5>
      <div className="flex items-center gap-3 my-3">
        <img src={image} alt="avatar" className="w-[24px] md:w-[35px] ld:w-[50px]" />
        <p className={` text-[16px] lg:text-[22px] leading-[22.5px] ${mono}`}>{text}</p>
      </div>
    </>
  );
};

export default ArtistCard;

import React from "react";

const CategoryCard = ({ image, key, icon, alt1, alt2, text }) => {
  return (
    <div key={key} className="w-[146px] md:w-[250px]">
      <div className="relative">
        <img src={image} alt={alt1} className="rounded-t-[20px]" />
        <div className=" bg-white/20 backdrop-opacity-100 backdrop-blur-[7px] absolute w-full h-full top-0 rounded-t-[20px]"></div>
        <img
          src={icon}
          alt={alt2}
          className="absolute top-1/4 md:top-[40%] left-[20%] md:left-[30%] w-[80px] h-[80px]"
        />
      </div>
      <div className=" bg-gray px-4 py-5 rounded-b-[15px]">
        <p className=" font-[600] text-[16px] leading-[22.4px]">{text}</p>
      </div>
    </div>
  );
};

export default CategoryCard;

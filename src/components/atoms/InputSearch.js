import React from "react";
import { iconSearch } from "../../assests";

const InputSearch = () => {
  return (
    <div className="flex items-center border-2 border-gray rounded-[20px] p-1 mb-10 text-white">
      <input
        type="search"
        name="search"
        id="search"
        className="w-[80%] h-[50px] lg:h-[60px] pl-2 outline-none bg-secondary text-white text-[16px] lg:text-[22px]"
        placeholder="Search your favourite NFTs"
      />
      <div className="w-[20%] bg-secondary h-[50px] lg:h-[60px] flex justify-center items-center">
        <img
          src={iconSearch}
          alt="icon_search"
          className="w-[25px] lg:w-[30px]"
        />
      </div>
    </div>
  );
};

export default InputSearch;

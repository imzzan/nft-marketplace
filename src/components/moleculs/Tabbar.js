import React from "react";
import { Link } from "react-router-dom";

const Tabbar = () => {
  const items = [
    {
      name: "Created",
      link: "/artistpage",
      number: 2712,
    },
    {
      name: "Owned",
      link: "/artistpage/owned",
      number: 271,
    },
    {
      name: "Collection",
      link: "/artistpage/collection",
      number: 46,
    },
  ];

  return (
    <div className="mt-8 lg:mt-24 w-full">
      <ul className="flex justify-around border-y border-gray h-[60px] lg:h-[70px]">
        {items.map((item, i) => {
          return (
            <Link to={item.link}>
              <li className="hover:border-b-4 border-[#858584] text-[#858584] hover:text-white h-[60px] flex items-center text-[16px] leading-[23px] font-[600] gap-1 lg:text-[22px] lg:leading-[31px] lg:h-[70px]">
                {item.name}
                <span className="w-[35px] h-[25px] bg-gray md:flex justify-center items-center rounded-[20px] text-white text-[12px] font-normal hidden hover:bg-[#858584] lg:w-[50px] lg:h-[32px] lg:text-[16px]">
                  {item.number}
                </span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabbar;

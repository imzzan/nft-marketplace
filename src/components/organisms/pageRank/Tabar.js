import React from "react";
import { Link } from "react-router-dom";

const Tabbar = () => {
  const items = [
    {
      name: "1d",
      nameds : "Today",
      link: "/rank",
    },
    {
      name: "7d",
      nameds : "This Week",
      link: "/rank/top7d",
    },
    {
      name: "30d",
      nameds : "This Month",
      link: "/rank/top30d",
    },
    {
      name: "All Time",
      nameds : "All Time",
      link: "/rank/topalltime",
    },
  ];

  return (
    <div className="mt-8 lg:mt-24 w-full">
      <ul className="flex justify-around border-y border-gray h-[60px] lg:h-[70px] md:hidden">
        {items.map((item, i) => {
          return (
            <Link to={item.link}>
              <li className="hover:border-b-4 border-[#858584] text-[#858584] hover:text-white h-[60px] flex items-center text-[16px] leading-[23px] font-[600] gap-1 lg:text-[22px] lg:leading-[31px] lg:h-[70px]">
                {item.name}
              </li>
            </Link>
          );
        })}
      </ul>

      <ul className="md:flex justify-around border-y border-gray h-[60px] lg:h-[70px] hidden">
        {items.map((item, i) => {
          return (
            <Link to={item.link}>
              <li className="hover:border-b-4 border-[#858584] text-[#858584] hover:text-white h-[60px] flex items-center text-[16px] leading-[23px] font-[600] gap-1 lg:text-[22px] lg:leading-[31px] lg:h-[70px]">
                {item.nameds}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabbar;

import React from "react";

const TopArtists = ({ name, profile, rank, sales }) => {
  return (
        <div className="flex lg:flex-col items-center gap-[20px] bg-gray lg:p-8 p-5 rounded-[20px] w-[full] md:w-[330px] lg:w-[260px]">
          <div className="relative">
            <img
              src={profile}
              alt="avatar"
              className="w-[60px] h-[60px]"
            />
            <p className="absolute top-[-7px] lg:top-[-10px] left-[-7px] lg:left-[-80px] z-10 bg-secondary text-[#858584] w-[30px] h-[30px] flex items-center justify-center rounded-full">
              {rank}
            </p>
          </div>
          <div>
            <h1 className="font-[600] text-[22px] leading-[30.8px] lg:text-center">
              {name}
            </h1>
            <p>
              <span className="text-[16px] font-normal leading-[140%] text-[#858584]">
                Total Sales :{" "}
              </span>{" "}
              <span className="text-[16px] font-normal leading-[140%] font-mono">
                {sales} ETH
              </span>
            </p>
          </div>
        </div>
  );
};

export default TopArtists;

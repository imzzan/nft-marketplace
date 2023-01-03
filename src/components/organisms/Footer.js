import React from "react";
import { Logo, Button, Input } from "../atoms";
import {
  iconDiscord,
  iconTwitter,
  iconInstagram,
  iconYoutube,
  iconLetter,
} from "../../assests";

const Footer = () => {
  return (
    <div className=" bg-gray">
      <div className="w-[315px] md:w-full mx-auto pt-4 md:pt-8">
        <div className="flex flex-col lg:flex-row container mx-auto gap-4 border-b border-[#858584] justify-between">
          <div>
            <Logo />
            <p className="text-[16px] font-normal leading-[22.4px] text-[#CCCCCC] my-4">
              NFT marketplace UI created with Anima for Figma.
            </p>
            <p className="text-[16px] font-normal leading-[22.4px] text-[#CCCCCC] mb-4">
              Join our community
            </p>
            <div className=" flex gap-4">
              <img src={iconDiscord} alt="iconDiscord" />
              <img src={iconTwitter} alt="iconTwitter" />
              <img src={iconInstagram} alt="iconInstagram" />
              <img src={iconYoutube} alt="iconYoutube" />
            </div>
          </div>
          <div>
            <h1 className="font-[700] text-[22px] leading-[35.2px] font-mono">
              Explore
            </h1>
            <ul>
              <li className="text-[16px] font-normal leading-[22.4px] text-[#CCCCCC] my-4">
                Marketplace
              </li>
              <li className="text-[16px] font-normal leading-[22.4px] text-[#CCCCCC] mb-4">
                Rankings
              </li>
              <li className="text-[16px] font-normal leading-[22.4px] text-[#CCCCCC] mb-4">
                Connect a wallet
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-[700] text-[22px] leading-[35.2px] font-mono">
              Join our weekly digest
            </h1>
            <p className="text-[16px] font-normal leading-[22.4px] text-[#CCCCCC] my-4">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <div className="md:flex md:justify-end md:relative mb-4">
              <Input width="w-full md:w-[300px] lg:w-full md:h-[60px] text-[16px] lg:text-[20px]" />
              <Button
                className=" w-full mt-6 md:w-[150px] md:absolute md:top-[-28px] md:right-0 lg:h-[70px]"
                text="Suscribe"
                icon={iconLetter}
              />
            </div>
          </div>
        </div>
      </div>

      <p className="text-[12px] font-normal leading-[12.4px] text-[#CCCCCC] my-[40px] pb-4 text-center">
        Ⓒ NFT Market. Use this template freely.
      </p>
    </div>
  );
};

export default Footer;

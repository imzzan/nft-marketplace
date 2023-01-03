import React from "react";
import {
  iconCoinBase,
  iconMateMask,
  iconWalletConnect,
} from "../../../assests";
import { ButtonWallet } from "../../moleculs";

const ConnectWallet = () => {
  const items = [
    {
      image: iconMateMask,
      name: "Metamask",
    },
    {
      image: iconWalletConnect,
      name: "Wallet Connect",
    },
    {
      image: iconCoinBase,
      name: "Coinbase",
    },
  ];

  return (
    <div className="md:w-[50%]">
      <div className="flex flex-col justify-center w-[315px] container mx-auto mb-8 md:w-[325px] lg:w-[460px]">
        <h1 className="text-[38px] leading-[45.6px] font-[600] my-5 lg:text-[51px] lg:leading-[51px]">
        Connect wallet
        </h1>
        <p className="font-normal text-[16px] leading-[22.4px] lg:text-[22px] leading-[35px]">
        Choose a wallet you want to connect. There are several wallet providers.
        </p>
        <div className="mt-8 flex flex-col gap-7 lg:gap-10">
          {items.map((item, i) => {
            return <ButtonWallet key={i} image={item.image} name={item.name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;

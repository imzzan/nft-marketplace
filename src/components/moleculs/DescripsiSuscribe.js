import React from "react";
import { Input, Button } from "../atoms";
import { iconLetter } from "../../assests";

const DescripsiSuscribe = () => {
  return (
    <div className="mt-10 md:mt-0 md:w-[300px] lg:w-[450px]">
      <h1 className="text-[28px] lg:text-[38px] leading-[39.2px] lg:leading-[46px] font-[600] capitalize">
        Join our weekly digest
      </h1>
      <p className="font-normal text-[16px] leading-[22.5px] mt-3 mb-6 md:text-[22px] leading-[35.2px]">
        Get exclusive promotions & updates straight to your inbox.
      </p>
      <div className="lg:flex lg:relative">
        <Input width="w-full md:w-[300px] lg:w-full lg:h-[60px] text-[16px] lg:text-[20px]" />
        <Button
          className=" w-full mt-6 md:w-[300px] lg:w-[150px] lg:absolute lg:top-[-30px] lg:right-0 lg:h-[70px]"
          text="Suscribe"
          icon={iconLetter}
        />
      </div>
    </div>
  );
};

export default DescripsiSuscribe;

import React from "react";
import { Link } from "react-router-dom";
import { Form } from "../moleculs";

const SignForm = () => {
  return (
    <div className="md:w-[50%]">
      <div className="flex flex-col justify-center w-[315px] container mx-auto mb-8 md:w-[325px] lg:w-[460px]">
        <h1 className="text-[38px] leading-[45.6px] font-[600] my-5 lg:text-[51px] lg:leading-[51px]">
          Create account
        </h1>
        <p className="font-normal text-[16px] leading-[22.4px] lg:text-[22px] leading-[35px]">
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </p>
        <Form />
        <Link to='/login'><p className="text-[12px] md:text-[16px] font-mono text-[#CCCCCC] mt-2 md:mt-4 text-center underline leading-[12px]">I have an account</p></Link>
      </div>
    </div>
  );
};

export default SignForm;

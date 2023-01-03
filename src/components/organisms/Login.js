import React from 'react';
import { LoginForm } from '../moleculs';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="md:w-[50%]">
    <div className="flex flex-col justify-center w-[315px] container mx-auto mb-8 md:w-[325px] lg:w-[460px]">
      <h1 className="text-[38px] leading-[45.6px] font-[600] my-5 lg:text-[51px] lg:leading-[51px] text-center">
        I already have an account
      </h1>
      <LoginForm/>
      <Link to='/signup'><p className="text-[12px] md:text-[16px] font-mono text-[#CCCCCC] mt-2 md:mt-4 text-center underline leading-[12px]">I dont have any account</p></Link>
    </div>
  </div>
  )
}

export default Login
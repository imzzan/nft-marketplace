import React from 'react';
import { BackgroundImage2 } from '../assests';
import { Login } from '../components';

const LoginPage = () => {
  return (
    <div className='w-full mb-0'>
    <div className='flex flex-col md:flex-row lg:items-center'>
        <div className='md:w-[50%]'>
           <img src={BackgroundImage2} alt="background2" className='w-full h-[232px] md:h-full object-cover'/>
        </div>
        <Login/>
    </div>
</div>
  )
}

export default LoginPage
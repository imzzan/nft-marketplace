import React from 'react'

const Input = ({width}) => {
  return (
    <input type="text" name="suscribe" id="suscribe" placeholder='Enter Your Email Address' className={`border border-primary bg-white text-black py-4 px-4 rounded-[20px] text-[12px] leading-[140%] outline-none ${width}`}/>
  )
}

export default Input;
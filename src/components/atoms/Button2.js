import React from 'react'

const Button2 = ({className, icon, text}) => {
  return (
    <button
    className={`${className} bg-secondary border-2 border-primary py-[15px] justify-center gap-2 text-white font-[600] flex items-center rounded-[20px]`}
  >
    <img src={icon} className="w-[20px]" alt="icon" /> {text}
  </button>
  )
}

export default Button2
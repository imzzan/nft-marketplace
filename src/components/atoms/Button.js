import React from "react";

const Button = ({ text, icon, className, submit }) => {
  return (
    <button
      onClick={submit}
      className={`${className} bg-primary py-[15px] lg:py-[20px] justify-center gap-2 text-white font-[600] flex items-center rounded-[20px]`}
    >
      <img src={icon} className="w-[20px]" alt="icon" /> {text}
    </button>
  );
};

export default Button;

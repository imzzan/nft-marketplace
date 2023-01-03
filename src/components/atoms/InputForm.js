import React from "react";

const InputForm = ({ icon, type, name, placeHolder }) => {
  return (
    <div className="flex items-center">
      <div className="w-[20%] bg-white h-[50px] lg:h-[60px] flex justify-center items-center rounded-l-[20px]">
        <img src={icon} alt="iconInput" className="w-[25px] lg:w-[30px]" />
      </div>
      <input
        type={type}
        name={name}
        required
        placeholder={placeHolder}
        className="w-[80%] h-[50px] lg:h-[60px] rounded-r-[20px] pl-2 text-secondary outline-none"
      />
    </div>
  );
};

export default InputForm;

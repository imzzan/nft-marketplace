import React, { useState } from "react";
import { InputForm, Button } from "../atoms";
import {
  iconRocet,
  iconUser,
  iconMessage,
  iconLockKey,
} from "../../assests";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const items = [
    {
      icon: iconUser,
      type: "text",
      name: "username",
      placeHolder: "User Name",
    },
    {
      icon: iconMessage,
      type: "email",
      name: "emailAddress",
      placeHolder: "Email Address",
    },
    {
      icon: iconLockKey,
      type: "password",
      name: "password",
      placeHolder: "Password",
    },
    {
      icon: iconLockKey,
      type: "password",
      name: "password",
      placeHolder: "Confirm Password",
    },
  ];

  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate('/artistpage')
  }

  return (
    <form className="flex flex-col gap-6 mt-8">
      {items.map((item, i) => {
        return <InputForm icon={item.icon} type={item.type} name={item.name} placeHolder={item.placeHolder}/>;
      })}
      <Button
        className=" w-full"
        text="Create Acount"
        icon={iconRocet}
        submit={handleSubmit}
      />
    </form>
  );
};

export default Form;

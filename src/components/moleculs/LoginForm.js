import React from 'react';
import { InputForm, Button } from '../atoms';
import { iconRocetLunch, iconUser, iconLockKey } from '../../assests';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const items = [
        {
          icon: iconUser,
          type: "text",
          name: "username",
          placeHolder: "User Name",
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
      text="Log In"
      icon={iconRocetLunch}
      submit={handleSubmit}
    />
  </form>
  )
}

export default LoginForm
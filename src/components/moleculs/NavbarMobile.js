import React, { useState } from "react";
import { Button, Logo } from "../atoms";
import { iconUser, iconHumburger } from "../../assests";
import { Link } from "react-router-dom";

const NavbarMobile = ({ nav }) => {
  const [state, setState] = useState(false);

  const handleOnclick = () => {
    setState(!state);
  };

  return (
    <>
      <div className="flex sticky lg:hidden items-center justify-between px-4 py-[14px]">
        <Link to='/'><Logo/></Link>
        <img
          src={iconHumburger}
          alt="humbuger"
          className="w-[24px] cursor-pointer"
          onClick={handleOnclick}
        />
      </div>
      {state ? (
        <ul className="lg:hidden bg-secondary w-screen h-screen absolute z-10 pt-5">
          {nav.map((item, i) => {
            return (
              <Link to={item.link}><li key={i} className="py-4 text-center border-b border-white">
                {item.name}
              </li></Link>
            );
          })}
          <li className="py-4 flex justify-center">
            <Link to='/signup'><Button className=" w-[152px]" text="Sign Up" icon={iconUser} /></Link>
          </li>
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavbarMobile;

import React from "react";
import { Button, Logo } from "../atoms";
import { iconUser } from "../../assests";
import { Link } from "react-router-dom";

const NavbarDekstop = ({ nav }) => {
  return (
    <div className="lg:flex sticky w-full hidden items-center justify-between px-[50px] py-[14px]">
      <Link to='/'><Logo/></Link>
      <ul className="flex items-center gap-10">
        {nav.map((item, i) => (
          <Link to={item.link}><li key={i} className="text-[16px] cursor-pointer">
            {item.name}
          </li></Link>
        ))}
        <li>
          <Link to='signup'><Button className=" w-[152px]" text="Sign Up" icon={iconUser} /></Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarDekstop;

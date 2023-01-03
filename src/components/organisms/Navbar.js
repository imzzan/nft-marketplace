import React from 'react';
import { NavbarDekstop, NavbarMobile } from '../moleculs';

const Navbar = () => {

    const nav = [
      {
        name : "Marketplace",
        link : '/marketplace'
      },
      {
        name : "Rankings",
        link : '/rank'
      },
      {
        name : "Connect a Wallet",
        link : '/wallet'
      }
    ];

  return (
    <>
      <NavbarDekstop nav={nav}/>
      <NavbarMobile nav={nav}/>
    </>
  )
}

export default Navbar
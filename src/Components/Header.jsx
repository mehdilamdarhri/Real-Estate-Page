import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [menuClosed, setMenuClosed] = useState(false);
  const getMenutyles = (menuClosed) => {
    if (window.screen.width <= 800) {
      return { right: !menuClosed && "-100%" };
    }
  };
  return (
    <section className="text-white">
      <div className="paddings innerWidth flexCenter justify-between py-4 text-[#ffffffc7]">
        <img src="./logo.png" alt="" width={100} />
        <div
          className="flexCenter gap-8 mx:z-[99] mx:font-medium mx:gap-8 mx:p-12 mx:rounded-[10px] mx:items-start mx:absolute mx:top-12 mx:right-16 mx:bg-white mx:text-black mx:flex-col mx:transition-all mx:ease-in mx:duration-300"
          style={getMenutyles(menuClosed)}
        >
          <a href="">Recidencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">Contact</button>
        </div>
        <div
          className="hidden mx:block"
          onClick={() => setMenuClosed((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;

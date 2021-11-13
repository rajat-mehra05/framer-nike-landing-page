import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Header = () => {
  return (
    <div>
      <motion.nav
        variants={fadeIn("down")}
        initial="initial"
        animate="animate"
        className="flex h-[10vh] items-center px-10 py-4 text-lg justify-between md:px-20"
      >
        <span className="font-black md:text-2xl">LOGO</span>
        <ul className="flex-1 md:flex justify-center space-x-5">
          <li>Shop</li>
          <li>Favourites</li>
          <li>My Cart</li>
        </ul>
        <span className="hidden font-medium md:block">My Account</span>
        <span className="block md:hidden"> 🤠 </span>
      </motion.nav>
    </div>
  );
};

export default Header;

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../variants";

const TextLayer = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="text-container flex flex-col h-full px-2 py-28 md:px-52"
    >
      <div className="text-container-top flex items-center justify-between text-lg md:text-2xl">
        <motion.span variants={fadeIn()} className="text-green-600">
          Welcome to shoes gallery
        </motion.span>
        <motion.span variants={fadeIn()} className="first-letter:text-2xl">
          {" "}
          2/4{" "}
        </motion.span>
      </div>

      <div className="text-container-middle grid flex-1 place-items-center">
        <motion.span
          variants={fadeIn()}
          className="text-5xl font-black tracking-wider md:text-9xl"
        >
          Nike
        </motion.span>
      </div>

      <div className="text-container-bottom flex items-center justify-between">
        <motion.button
          variants={fadeIn()}
          className="p-2 text-base tracking-wide text-white lowercase bg-gray-900 rounded-lg md:px-6 md:py-3 md:text-lg"
        >
          Shoes section
        </motion.button>
        <motion.p
          variants={fadeIn()}
          className="text-sm font-semibold md:text-2xl"
        >
          Your amazing <span className="text-green-600">lifestyle</span> starts
          now!
        </motion.p>
      </div>
    </motion.div>
  );
};

export default TextLayer;

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer } from "../../variants";

const ImageLayer = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="wrapper-picture absolute top-10 left-64 grid w-full text-center place-items-center"
    >
      <motion.div
        animate={{ rotate: [30, 10, 30] }}
        transition={{
          duration: 1.6,
          ease: "linear",
          repeat: Infinity,
          type: "spring",
        }}
        className="imageWrappe"
      >
        <Image
          className="h-[400px] w-[250px] md:h-[550px] md:w-[500px] object-contain"
          src="/images/nike1.png"
          alt="nike-pic"
          height="400px"
          width="400px"
        />
      </motion.div>
    </motion.div>
  );
};

export default ImageLayer;

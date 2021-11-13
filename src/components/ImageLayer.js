import React from "react";
import Image from "next/image";

const ImageLayer = () => {
  return (
    <div className="wrapper-picture absolute top-0 left-0 grid w-full text-center place-items-center">
      <Image
        className="h-[400px] w-[250px] md:h-[550px] md:w-[500px] object-contain"
        src="/images/nike1.png"
        alt="nike-pic"
        height="400px"
        width="400px"
      />
    </div>
  );
};

export default ImageLayer;

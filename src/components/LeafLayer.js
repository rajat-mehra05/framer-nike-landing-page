import React from "react";
import Image from "next/image";

const LeafLayer = ({ className, imageUrl }) => {
  return (
    <div className={className}>
      <Image className="leaf" src={imageUrl} alt="leaf-pics" />
    </div>
  );
};

export default LeafLayer;

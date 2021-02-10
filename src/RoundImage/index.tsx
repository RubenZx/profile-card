import React from "react";
import "./index.css";

interface RoundImageProps {
  imageSrc: string;
  imageAlt: string;
}

const RoundImage = ({ imageSrc, imageAlt }: RoundImageProps) => {
  return <img className="roundedImage" src={imageSrc} alt={imageAlt} />;
};

export default RoundImage;

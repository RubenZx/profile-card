import React from "react";
import "./index.css";

const BottomElement = ({
  element,
  name,
}: {
  element: string;
  name: string;
}) => {
  return (
    <div className="e-content">
      <div className="element">{element}</div>
      <div className="name">{name}</div>
    </div>
  );
};

export default BottomElement;

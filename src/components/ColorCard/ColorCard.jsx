import React from "react";
import "./style.css";

const ColorCard = ({ backgroundColor }) => {
  return (
    <div className="card" style={{ backgroundColor: backgroundColor }}></div>
  );
};

export default ColorCard;

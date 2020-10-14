import React from "react";
import "./RangeSlider.css";

const RangeSlider = (props) => {
  return (
    <div className="wrapper">
      <input type="range" min="1" max="40" {...props} />
      <h3 style={{ marginLeft: "25px" }}>{props.value}</h3>
    </div>
  );
};

export default RangeSlider;

import React, { useState } from "react";
import RangeSlider from "../../components/RangeSlider/RangeSlider";
import "./ColorToner.css";
import lightenColor from "../../utils/lightenColor";
import ColorsGrid from "../../components/ColorsGrid";

const ColorToner = () => {
  const [colors, setColors] = useState([]);
  const [colorHex, setColorHex] = useState("");
  const [rangeValue, setRangeValue] = useState(1);
  const [error, setError] = useState("");
  const regex = "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$";

  const populateColors = (value, colorH) => {
    const step = 100 / (value - 1);
    const colors = [];
    let colorhex = colorH.substring(1);
    if (colorhex === "") {
      return;
    } else {
      for (let i = 0; i <= 100; i += step) {
        const color = lightenColor(colorhex, -i);
        colors.push(color);
      }

      setColors(colors);
    }
  };

  const handleCreate = () => {
    if (colorHex.match(regex)) {
      setError("");
      populateColors(rangeValue, colorHex);
    } else {
      setError("Please enter valid hex");
    }
  };

  const handleChange = (e) => {
    setRangeValue(e.target.value);
    populateColors(e.target.value, colorHex);
  };

  return (
    <div className="main">
      <h2>Dopley challenge , Farid shariati</h2>
      <div className="input__section">
        <input
          className="input"
          type="text"
          placeholder="#FFFFFF"
          value={colorHex}
          onChange={(e) => setColorHex(e.target.value)}
        />
        <button className="find__button" onClick={handleCreate}>
          Create
        </button>
      </div>
      <h4 style={{ color: "red" }}>{error !== "" && error}</h4>
      <div className="content">
        <div className="content__range-slider">
          <h3 style={{ marginRight: "55px" }}>Shades</h3>
          <RangeSlider value={rangeValue} onChange={handleChange} />
        </div>
        <ColorsGrid colors={colors}/>
      </div>
    </div>
  );
};

export default ColorToner;

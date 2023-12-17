import React, { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleColorValue = (event, color) => {
    let value = event.target.value;
    if (value > 255) value = 255;
    else if (value < 0) value = 0;

    if (color === "r") setRValue(value);
    else if (color === "g") setGValue(value);
    else if (color === "b") setBValue(value);
    else
      throw new Error(
        "Unexpected color  value, only r,g,b values are expected"
      );
  };

  return (
    <>
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={(event) => {
          handleColorValue(event, "r");
        }}
      />

      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={(event) => {
          handleColorValue(event, "g");
        }}
      />

      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={(event) => {
          handleColorValue(event, "b");
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: `rgb(${rValue}, ${gValue},${bValue})`,
            width: "50px",
            height: "50px",
            border: "2px solid grey",
            borderRadius: "10px",
            margin: "10px 10px 0 10px",
          }}
        ></div>
        <div>
          <p style={{ marginTop: "15px" }}>
            rgb ({`${rValue} , ${gValue}, ${bValue}`})
          </p>
        </div>
      </div>
    </>
  );
}

export default RGBColorPicker;

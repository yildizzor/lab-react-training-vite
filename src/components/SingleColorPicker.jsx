import React from "react";

function SingleColorPicker({ color, value, onChange }) {
  let rValue = color === "r" ? 255 : 0;
  let gValue = color === "g" ? 255 : 0;
  let bValue = color === "b" ? 255 : 0;

  return (
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
          marginRight: "10px"
        }}
      >
      </div>
      <div>

      
      <span>{color.toUpperCase()}: </span>
      <input
        type="number"
        value={value}
        min="0"
        max="255"
        onChange={onChange}
      />
      </div>
    </div>
  );
}

export default SingleColorPicker;

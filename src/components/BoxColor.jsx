import React from "react";

function BoxColor(props) {
  return (
    <div
      style={{
        backgroundColor: `rgb(${props.r}, ${props.g},${props.b})`,
        width: "500px",
        height: "150px",
        margin: "10px auto",
        border: "2px solid black",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>
        rgb({props.r}, {props.g}, {props.b})
      </p>
    </div>
  );
}

export default BoxColor;

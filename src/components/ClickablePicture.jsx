import React from "react";
import { useState } from "react";

function ClickablePicture(props) {
  const { img, imgClicked } = props;

  const [state, setState] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <img
        style={{ position: "absolute", left: 0, top: 0, zIndex: -1 }}
        src={img}
        onClick={() => setState(!state)}
      />
      <img
        src={imgClicked}
        style={{
          visibility: state ? "visible" : "hidden",
          width: "100px",
          position: "absolute",
          left: "48px",
          top: "56px",
          zIndex: 2,
        }}
      />
    </div>
  );
}

export default ClickablePicture;

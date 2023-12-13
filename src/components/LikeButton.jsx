import React from "react";
import { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);

  const color = ["purple", "blue", "green", "yellow", "orange", "red"];

  return (
    <div>
      <button
        style={{ backgroundColor: color[count % color.length],width:"100px", height: "40px" }}
        onClick={() => setCount(count + 1)}
      >
        {count} LIKES
      </button>
    </div>
  );
}

export default LikeButton;

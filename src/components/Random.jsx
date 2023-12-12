import React from "react";

function Random(props) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <div>
      <p>
        Random value between {props.min} and {props.max} =&gt;{" "}
        {getRandomInt(props.min, props.max)}
      </p>
    </div>
  );
}

export default Random;

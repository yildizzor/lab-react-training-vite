import React, { useState } from "react";

function Carousel(props) {
  const [photoIndex, setPhotoIndex] = useState(0);

  const clickPhoto = (operation) => {
    if (operation === "increase") {
      if (photoIndex === props.images.length - 1) {
        setPhotoIndex(0);
      } else {
        setPhotoIndex(photoIndex + 1);
      }
    } else if (operation === "decrease" && photoIndex > 0)
      setPhotoIndex(photoIndex - 1);
    else setPhotoIndex(props.images.length - 1);
  };

  return (
    <div>
      <button onClick={() => clickPhoto("decrease")}>Left</button>
      <img src={props.images[photoIndex]} />
      <button onClick={() => clickPhoto("increase")}>Right</button>
    </div>
  );
}

export default Carousel;

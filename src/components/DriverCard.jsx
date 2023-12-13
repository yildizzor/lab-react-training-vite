import React from "react";
import "./DriverCard.css";
import Rating from "./Rating";

function DriverCard(props) {
  return (
    <div className="driver-card">
      <div className="w-40-block text-right p-20">
        <img src={props.img} />
      </div>
      <div className="w-60-block text-left p-20">
        <h2>{props.name}</h2>
        <Rating color="white">{props.rating}</Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;

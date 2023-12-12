import React from "react";
import VisaCard from "../assets/images/visa.png";
import MasterCard from "../assets/images/master-card.svg";
import "./CreditCard.css";

function CreditCard(props) {
  const cardType = (imgType) => {
    if (imgType.toLowerCase() === "visa") {
      return VisaCard;
    } else return MasterCard;
  };
  return (
    <div
      className="card"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <div className="visa_logo">
        <img src={cardType(props.type)} alt="Card-Type" />
      </div>
      <div className="visa_info">
        <img
          src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
          alt=""
        />
        <p>.... .... .... {props.number.slice(12)}</p>
      </div>
      <div className="visa_crinfo">
        <p>
          Expires {props.expirationMonth}/{props.expirationYear} {props.bank}
        </p>
      </div>
      <div className="card-name">
        <p>{props.owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;

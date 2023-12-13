import React from "react";
import { useState, useEffect } from "react";
import Dice0 from "../assets/images/dice-empty.png";
import Dice1 from "../assets/images/dice1.png";
import Dice2 from "../assets/images/dice2.png";
import Dice3 from "../assets/images/dice3.png";
import Dice4 from "../assets/images/dice4.png";
import Dice5 from "../assets/images/dice5.png";
import Dice6 from "../assets/images/dice6.png";

function Dice() {
  const [dice, setDice] = useState(Dice0);
  const [clicked, setClicked] = useState(false);
  const diceArray = [Dice0, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  useEffect(() => {
    setDice(Dice0);
    const timeoutId = setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6 + 1);
      setDice(diceArray[randomNumber]);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [clicked]);

  return (
    <div>
      <img
        style={{ width: "200px" }}
        src={dice}
        onClick={() => setClicked(!clicked)}
      />
    </div>
  );
}

export default Dice;

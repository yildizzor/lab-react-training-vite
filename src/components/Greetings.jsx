import React from "react";

function Greetings(props) {
  const greeting = { en: "Hello", de: "Hallo", fr: "Bonjour", es: "Ola" };
  return (
    <div>
      <p>
        {greeting[props.lang]} {props.children}

      </p>
    </div>
  );
}

export default Greetings;

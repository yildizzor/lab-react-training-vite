import React from "react";

import { v4 as uuidv4 } from "uuid";

function NumbersTable({ limit }) {
  const numbersArray = [];

  for (let i = 1; i <= limit; i++) {
    numbersArray.push(i);
  }

  const numbersOfRows = Math.ceil(limit / 5);

  return (
    <table style={{ border: "1px solid black" }}>
      {[...Array(numbersOfRows)].map(() => {
        return (
          <tr
            key={uuidv4()}
            style={{ border: "1px solid black" }}
            width="1000px"
          >
            {numbersArray.map((number) => {
              return (
                <td
                  key={uuidv4()}
                  width="50px"
                  height="50px"
                  style={{
                    border: "1px solid black",
                    backgroundColor: number % 2 === 0 ? "red" : "white",
                  }}
                >
                  {number}
                </td>
              );
            })}
          </tr>
        );
      })}
    </table>
  );
}

export default NumbersTable;

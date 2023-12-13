import { v4 as uuidv4 } from "uuid";
import "./Rating.css";

function Rating(props) {
  const rating = Math.round(props.children);
  const emptyStar = 5 - rating;

  return (
    <div>
      {[...Array(rating)].map(() => {
        return (
          <span
            key={uuidv4()}
            className="star-icon"
            style={{ color: props.color ? props.color : "black" }}
          >
            ★
          </span>
        );
      })}
      {[...Array(emptyStar)].map(() => {
        return (
          <span key={uuidv4()} className="star-icon">
            ☆
          </span>
        );
      })}
    </div>
  );
}

export default Rating;

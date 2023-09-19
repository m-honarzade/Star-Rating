import { useState } from "react";
import Star from "./Star";

const StarRating = ({
  maxRating = 5,
  textColor = "black",
  starColor = "black",
  textSize = "xs",
  starSize = 5,
  messages = [],
}) => {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const onRateHandler = (rate) => {
    setRating(rate);
  };
  const onHoverInHandler = (rate) => {
    setTempRating(rate);
  };
  const onHoverOutHandler = () => {
    setTempRating(0);
  };

  return (
    <div className={`flex flex-row justify-center items-center gap-x-4 p-8 `}>
      <div className="flex flex-row justify-center items-center gap-x-3 ">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => onRateHandler(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            hoverIn={() => onHoverInHandler(i + 1)}
            hoverOut={onHoverOutHandler}
            color={starColor}
            size={starSize}
          />
        ))}
      </div>
      <p className={`text-${textColor} text-${textSize}`}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
};

export default StarRating;

import { useState } from "react";
import Star from "./Star";

const StarRating = ({ maxRating = 5 }) => {
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
            full={rating >= i + 1}
            hoverIn={() => onHoverInHandler(i + 1)}
            hoverOut={onHoverOutHandler}
          />
        ))}
      </div>
      <p className={`text-white text-base`}>{tempRating || rating || ""}</p>
    </div>
  );
};

export default StarRating;

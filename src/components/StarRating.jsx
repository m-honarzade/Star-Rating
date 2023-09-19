import { useState } from "react";
import PropTypes from "prop-types";
import Star from "./Star";

const StarRating = ({
  maxRating = 5,
  defaultRating = 0,
  textColor = "black",
  starColor = "black",
  textSize = "xs",
  starSize = 5,
  messages = [],
  onSetRating,
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const onRateHandler = (rate) => {
    setRating(rate);
    onSetRating(rate);
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
StarRating.propTypes = {
  maxRating: PropTypes.number,
  defaultRating: PropTypes.number,
  messages: PropTypes.array,
  textColor: PropTypes.string,
  textSize: PropTypes.string,
  starColor: PropTypes.string,
  starSize: PropTypes.string,
  onSetRating: PropTypes.func,
};

export default StarRating;

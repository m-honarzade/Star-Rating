import { useState } from "react";
import StarRating from "./StarRating";

const ShowRating = () => {
  const [rated, setRated] = useState(0);
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <StarRating onSetRating={setRated} />
      <p>Movie Rate is: {rated} stars</p>
    </div>
  );
};

export default ShowRating;

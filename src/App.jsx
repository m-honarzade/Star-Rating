import ShowRating from "./components/ShowRating";
import StarRating from "./components/StarRating";

function App() {
  return (
    <>
      <StarRating
        maxRating={10}
        textColor={"gold"}
        starColor={"gold"}
        starLineColor={"gold"}
        textSize={"md"}
      />
      <StarRating
        messages={["terrible", "bad", "ok", "good", "super"]}
        defaultRating={2}
      />
      <ShowRating />
    </>
  );
}

export default App;

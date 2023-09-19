import StarRating from "./components/StarRating";

function App() {
  return (
    <>
      <StarRating maxRating={10} />
      <StarRating messages={["terrible", "bad", "ok", "good", "super"]} />
    </>
  );
}

export default App;

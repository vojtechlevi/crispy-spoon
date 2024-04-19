import "./App.css";
import { usePaintings } from "./hooks/usePaintings";

function App() {
  const { paintings } = usePaintings();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        padding: "2rem",
      }}
    >
      {paintings.map((painting) => {
        return (
          <div>
            <h2>{painting.title}</h2>
            <p>{painting.maker}</p>
            <img
              style={{ maxWidth: "150px" }}
              src={painting.images[0].original}
              alt=""
            />
            <p>{painting.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;

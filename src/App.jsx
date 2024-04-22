import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Wanted from "./pages/Wanted";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/topten"
        element={
          <Wanted
            url={
              "https://api.fbi.gov/@wanted?pageSize=20&page=1&sort_on=modified&sort_order=asc&poster_classification=ten"
            }
          />
        }
      />
      <Route
        path="/terrorist"
        element={
          <Wanted
            url={
              "https://api.fbi.gov/@wanted?pageSize=20&page=1&sort_on=modified&sort_order=asc&poster_classification=terrorist"
            }
          />
        }
      />
    </Routes>
  );
}

export default App;

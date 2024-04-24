import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Wanted from "./pages/Wanted";

import { Paintings } from "./components/Paintings";
import { Books } from "./components/Books";
import { Crucifix } from "./components/Crucifix";
import { Guitars } from "./components/Guitars";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/topten"
        element={
          <Wanted
            subheading={"Top Ten"}
            url={
              "https://api.fbi.gov/@wanted?pageSize=20&page=1&sort_on=modified&sort_order=asc&poster_classification=ten"
            }
          />
        }
      />
      <Route
        path="/terrorists"
        element={
          <Wanted
            subheading={"Terrorists"}
            url={
              "https://api.fbi.gov/@wanted?pageSize=20&page=1&sort_on=modified&sort_order=asc&poster_classification=terrorist"
            }
          />
        }
      />

      <Route path="/paintings" element={<Paintings />} />
      <Route path="/books" element={<Books />} />
      <Route path="/crucifix" element={<Crucifix />} />
      <Route path="/guitars" element={<Guitars />} />
    </Routes>
  );
}

export default App;

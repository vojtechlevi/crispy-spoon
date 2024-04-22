import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Wanted from "./components/Wanted";
import { Paintings } from "./components/Paintings";
import { Books } from "./components/Books";
import { Crucifix } from "./components/Crucifix";
import { Guitars } from "./components/Guitars";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/wanted" element={<Wanted />} />

      <Route path="/paintings" element={<Paintings />} />
      <Route path="/books" element={<Books />} />
      <Route path="/crucifix" element={<Crucifix />} />
      <Route path="/guitars" element={<Guitars />} />
    </Routes>
  );
}

export default App;

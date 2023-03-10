import Home from "./pages/Home";
import Flats from "./pages/Flats";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viviendas/:busqueda" element={<Flats />} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home/Home";
import Modalities from "./pages/Modalities/Modalities";
import UnitDetails from "./pages/UnitDetails/UnitDetails";
import Units from "./pages/Units/Units";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          {/* Página principal */}
          <Route 
            path="/" 
            element={<Home />} 
          />

          {/* Modalidades */}
          <Route
            path="/modalidades"
            element={<Modalities />}
            />

          {/* Modalidades */}
          <Route
            path="/unidades"
            element={<Units />}
          />

          <Route
            path="/unidades/:slug"
            element={<UnitDetails />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
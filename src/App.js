import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Harita from "./pages/Harita";
import List from "./pages/List";
import About from "./pages/About";
import WeatherDetails from "./pages/WeatherDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/harita" element={<Harita />} />
        <Route path="/list" element={<List />} />
        <Route path="/:city" element={<WeatherDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;

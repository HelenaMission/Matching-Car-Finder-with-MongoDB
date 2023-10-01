import "./App.css";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/SearchVehicles/Search";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkcar" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Inventory from "./pages/Inventory";
import Services from "./pages/Services";
import Navbar from "./Components/Navbar";
import './app.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
};

export default App;

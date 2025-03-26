import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Inventory from "./pages/Inventory";
import Services from "./pages/Services";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CookieConsent from "./Components/CookieConsent";
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default App;

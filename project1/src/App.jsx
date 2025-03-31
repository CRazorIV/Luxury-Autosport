import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Inventory from "./pages/Inventory";
import Financing from "./pages/Financing";
import Services from "./pages/Services";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CookieConsent from "./Components/CookieConsent";
import Loader from "./Components/Loader";
import './App.css';

const App = () => {
  return (
    <>
      <Loader />
      <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/services" element={<Services />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default App;
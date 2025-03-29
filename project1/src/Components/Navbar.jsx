import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">Luxury Autos</Link>
            </div>

            <div className={`menu ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li className={location.pathname === "/" ? "active" : ""}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={location.pathname === "/inventory" ? "active" : ""}>
                        <Link to="/inventory">Inventory</Link>
                    </li>
                    <li className={location.pathname === "/services" ? "active" : ""}>
                        <Link to="/services">Services</Link>
                    </li>
                    <li className={location.pathname === "/financing" ? "active" : ""}>
                        <Link to="/financing">Financing</Link>
                    </li>
                    <li className={location.pathname === "/contact" ? "active" : ""}>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>

            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
        </nav>
    );
};

export default Navbar;

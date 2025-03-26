import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    // script komt hier.
    // view is hieronder. 
    return (
        <>
            <nav>
                <h1>Dit is de navbar</h1>
                <ul>
                    <li><Link to='/' />Ghome....</li>
                    <li><Link to='/About' />Ghome....</li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
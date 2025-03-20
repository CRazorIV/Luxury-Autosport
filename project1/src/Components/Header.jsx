import React from "react";

const Header = () => {
    // script komt hier.

    const naam = "Yuri Kuvalja";

    // view is hieronder. 
    return (
        <>
            <div className="Header">
                <h1>Hallo, Wereld</h1>
                <p>Mijn naam is {naam} en ik kan react.</p>
            </div>
        </>
    );
};

export default Header;
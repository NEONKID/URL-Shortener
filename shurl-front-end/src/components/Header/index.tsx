import React from 'react';

import NavbarBrand from './NavbarBrand';
import NavBarEnd from './NavBarEnd';

const Header = () => {
    return (
        <div className="hero-head">
            <nav className="navbar">
                <div className="container">
                    <NavbarBrand />
                    <NavBarEnd />
                </div>
            </nav>
        </div>
    );
};

export default Header;

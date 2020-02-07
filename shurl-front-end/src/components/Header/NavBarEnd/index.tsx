import React from 'react';
import NavItem from './NavItem';

import { faHome, faAddressBook } from '@fortawesome/free-solid-svg-icons';

const NavBarEnd = () => {
    return (
        <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
                <NavItem icon={faHome} name="Home" />
                <NavItem icon={faAddressBook} name="About" />
            </div>
        </div>
    );
};

export default NavBarEnd;

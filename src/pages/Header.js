import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>clARity</h1>
        <NavLink to="/home" activeClassName="is-active">Home</NavLink>
        <NavLink to="/rooms" activeClassName="is-active">Rooms</NavLink>
        <NavLink to="/download" activeClassName="is-active">Download</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        <NavLink to="/">Log Out</NavLink>
    </header>
);

export default Header;
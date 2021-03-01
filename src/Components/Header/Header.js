import React from 'react';
import logo from "../../images/logo.png";
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="">About us</a>
                <a href="">Contact us</a>
                <a href="">Our Policy</a>
                <a href="">Our Team</a>
            </nav>
        </div>
    );
};

export default Header;
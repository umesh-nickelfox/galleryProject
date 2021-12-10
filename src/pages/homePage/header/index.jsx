import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
//import Proptypes from 'prop-types';

const Header = ({ setDarkmode, darkMode }) => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand href="#home">Image Gallery</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav>
                <div className="light-mode" >
                    <div className="container">
                        <span style={{ color: darkMode ? "grey" : "yellow" }} />
                        <div className="switch-checkbox">
                            <label className="switch">
                                <input type="checkbox" onChange={() => setDarkmode(!darkMode)} />
                                <span className="slider round" />
                            </label>

                        </div>
                        <span style={{ color: darkMode ? "black" : "blue" }}></span>
                    </div>
                    <div className="theme">
                        <h2>Theme {darkMode ? "Dark" : "Light"}</h2></div>
                    {/* <div className="header">
                <h1>Image Gallery</h1>
                <p>This Is The Image Gallery </p>
            </div> */}
                </div>
            </Nav>
        </Navbar>
    )
}

// //}

export default Header

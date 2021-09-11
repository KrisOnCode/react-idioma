import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import DarkModeToggle from './DarkModeToggle';
import NavBrand from './NavBrand';
import LanguageDropDown from './LanguageDropDown';

const NavBar = () => {
    return (
        <>
           <Navbar expand="lg" className="navbar-custom">
                <Container>
                    <NavBrand />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                        <LanguageDropDown />
                        <DarkModeToggle />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;

import React from 'react'
import useDarkMode from 'use-dark-mode';
import {Navbar} from 'react-bootstrap';
import LogoLight from '../../../assets/brand-light.svg';
import LogoDark from '../../../assets/brand-dark.svg';

const NavBrand = () => {
    const {value} = useDarkMode(false);
    return (
       <>
        { value ? (
            <Navbar.Brand href="#home">
            <img src={LogoDark} height="40" className="d-inline-block align-top" alt="React Bootstrap logo"/>
            </Navbar.Brand>
        ) : (
            <Navbar.Brand href="#home">
            <img src={LogoLight} height="40" className="d-inline-block align-top" alt="React Bootstrap logo"/>
            </Navbar.Brand>
        )}
       </>
    )
}

export default NavBrand;

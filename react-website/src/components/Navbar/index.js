import React from 'react';
import { Nav, NavbarContainer, NavLogo } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Logo</NavLogo>
                    <h1>Hello</h1>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar

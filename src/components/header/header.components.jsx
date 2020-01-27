import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import { HeaderContainer } from './header.styles';

const Header = () => (
    <HeaderContainer>
        <Navbar className="navbar-custom" expand="md">
            <Navbar.Brand>
                <Link to="/">
                    <img
                        src="img/logo/small-logo.png"
                        alt="rent-store-logo"
                        className="d-inline-block align-top"
                        height="50"
                    />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={NavLink} to="/rent" className="text-uppercase text-center">rent</Nav.Link>
                    <Nav.Link as={NavLink} to="/contacts" className="text-uppercase text-center">contacts</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </HeaderContainer>
);

export default Header;
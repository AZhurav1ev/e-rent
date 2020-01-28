import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { HeaderContainer } from './header.styles';

const Header = ({ currentUser }) => (
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
                    {
                        currentUser ?
                            <Nav.Link className="text-uppercase text-center" onClick={() => auth.signOut()}>sign out</Nav.Link> :
                            <Nav.Link as={NavLink} to="/signin" className="text-uppercase text-center">sign in</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </HeaderContainer>
);

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
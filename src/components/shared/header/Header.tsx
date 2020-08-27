import React from 'react';
import {Nav, Navbar,NavDropdown} from "react-bootstrap";
import {Link, withRouter} from "react-router-dom";
import './Header.scss';

const Header = (props: {location: any }) => {
    const { location } = props;

    //TODO - Display what page you are on as a title next to the logo
    const getPageTitle = () => {
        if(location.pathname.startsWith('/home') || location.pathname === '/') {
            return "Home"
        } else {
            return ""
        }
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="main-menu" style={{zIndex: 1}}>
                <Navbar.Brand href="/">BOHRINGART</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" activeKey={location.pathname}>
                        <Nav.Link as={Link} to={{pathname: '/', state: { popupOpened: false }}}
                                  active={location.pathname.startsWith('/home') || location.pathname === '/'}>
                            Home
                        </Nav.Link>

                        <NavDropdown title="Activities" id="collasible-nav-dropdown" style={{color: "white"}}>
                            <NavDropdown.Item as={Link} to={{pathname: '/activity/circuit-building'}}
                                              active={location.pathname.startsWith('/activity/circuit-building')}>
                                Circuit Construction
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={{pathname: '/activity/metal-engraving'}}
                                              active={location.pathname.startsWith('/activity/metal-engraving')}>
                                Lasers And Lenses
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={{pathname: '/activity/rocket-building'}}
                                              active={location.pathname.startsWith('/activity/rocket-building')}>
                                To The Stars
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={{pathname: '/activity/object-page'}}
                                              active={location.pathname.startsWith('/activity/object-page')}>
                                Stellar Life Cycle
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Nav className="ml-auto" activeKey={location.pathname}>
                        <Nav.Link as={Link} to="/resources" active={location.pathname.startsWith('/resources')}>
                            Resources
                        </Nav.Link>
                        <Nav.Link as={Link} to='/about' active={location.pathname.startsWith('/about')}>
                            About Us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default withRouter(Header);
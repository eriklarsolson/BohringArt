import React from 'react';
import {Nav, Navbar,NavDropdown} from "react-bootstrap";
import {Link, withRouter} from "react-router-dom";
import './Header.scss';
import line from "./line.png"
import logo from "./logo.png"

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
            {location.pathname === '/' ?
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="main-menu" style={{zIndex: 1}}>
                    <Navbar.Brand href="/" style={{textAlign: "right"}}>
                        <img src={logo} alt={"Logo"} />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <img src={line} alt={"Menu seperator"} />
                    </Navbar.Collapse>
                </Navbar>
            :
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="main-menu" style={{zIndex: 1}}>
                    <Navbar.Brand href="/" style={{textAlign: "right"}}>
                        <img src={logo} alt={"Logo"} />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <img src={line} alt={"Menu seperator"} />

                        <Nav className="mr-auto" activeKey={location.pathname}>

                            <Nav.Link as={Link} to={{pathname: '/home', state: { popupOpened: false }}}
                                      active={location.pathname.startsWith('/home') || location.pathname === '/'}>
                                Home
                            </Nav.Link>

                            <NavDropdown title="Activities" id="collasible-nav-dropdown" style={{color: "white"}}>
                                <NavDropdown.Item as={Link} to={{pathname: '/activity/circuit-building'}}
                                                  active={location.pathname.startsWith('/activity/circuit-building')}>
                                    Circuit Construction
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={{pathname: '/activity/metal-engraving'}}
                                                  active={location.pathname.startsWith('/activity/metal-engraving') ||
                                                  location.pathname.startsWith('/activity/telescope-activity')}>
                                    Lasers And Lenses
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={{pathname: '/activity/rocket-building'}}
                                                  active={location.pathname.startsWith('/activity/rocket-building') ||
                                                  location.pathname.startsWith('/activity/flight-simulator')}>
                                    To The Stars
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={{pathname: '/activity/object-page'}}
                                                  active={location.pathname.startsWith('/activity/object-page') ||
                                                  location.pathname.startsWith('/activity/info-page') ||
                                                  location.pathname.startsWith('/activity/stellar-cycle')}>
                                    Stellar Life Cycle
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav className="ml-auto" activeKey={location.pathname}>
                            {/*<Nav.Link as={Link} to="/resources" active={location.pathname.startsWith('/resources')}>*/}
                            {/*    Resources*/}
                            {/*</Nav.Link>*/}
                            <Nav.Link as={Link} to='/about' active={location.pathname.startsWith('/about')}>
                                About Us
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            }
        </>
    );
}

export default withRouter(Header);
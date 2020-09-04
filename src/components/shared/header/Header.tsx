import React from 'react';
import {Nav, Navbar,NavDropdown} from "react-bootstrap";
import {Link, withRouter} from "react-router-dom";
import './Header.scss';
import line from "./line.png"
import logo from "./logo.png"

const Header = (props: {location: any }) => {
    const { location } = props;

    //Display what page you are on as a title next to the logo
    const getPageTitle = () => {
        if(location.pathname.startsWith('/home') || location.pathname === '/') {
            return ""
        } else if(location.pathname === '/activity/circuit-building') {
            return "Circuit Construction"
        } if(location.pathname === '/activity/metal-engraving' || location.pathname === '/activity/telescope-activity') {
            return "Lasers And Lenses"
        } if(location.pathname === '/activity/rocket-building' || location.pathname === '/activity/flight-simulator') {
            return "To The Stars"
        } if(location.pathname === '/activity/object-page' || location.pathname === '/activity/info-page'
            || location.pathname === '/activity/stellar-cycle') {
            return "Stellar Life Cycle"
        } else {
            return location.pathname
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
                    <Navbar.Brand href="/" style={{textAlign: "right", paddingLeft: "1%"}}>
                        <img src={logo} alt={"Logo"} style={{width: "80%"}} />

                        <img src={line} alt={"Menu seperator"} style={{marginLeft: 25}} />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="mr-auto" activeKey={location.pathname}>
                            <p style={{marginBottom: 0, color: "white", marginLeft: 10}}>{getPageTitle()}</p>
                        </Nav>

                        <Nav className="ml-auto" activeKey={location.pathname}>

                            <Nav.Link as={Link} to={{pathname: '/home', state: { popupOpened: false }}}
                                      active={location.pathname.startsWith('/home') || location.pathname === '/'}
                                      style={{marginLeft: 25}}>
                                Home
                            </Nav.Link>

                            <NavDropdown title="Activities" id="collasible-nav-dropdown" style={{color: "white", marginLeft: 10}}>
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

                            <Nav.Link as={Link} to='/about' style={{marginLeft: 10}}
                                      active={location.pathname.startsWith('/about')}>
                                About Us
                            </Nav.Link>
                        </Nav>

                        {/*<Nav className="ml-auto" activeKey={location.pathname}>*/}
                        {/*    /!*<Nav.Link as={Link} to="/resources" active={location.pathname.startsWith('/resources')}>*!/*/}
                        {/*    /!*    Resources*!/*/}
                        {/*    /!*</Nav.Link>*!/*/}
                        {/*    <Nav.Link as={Link} to='/about' active={location.pathname.startsWith('/about')}>*/}
                        {/*        About Us*/}
                        {/*    </Nav.Link>*/}
                        {/*</Nav>*/}
                    </Navbar.Collapse>
                </Navbar>
            }
        </>
    );
}

export default withRouter(Header);
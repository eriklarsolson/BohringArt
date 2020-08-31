import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import logo from "../header/logo.png";

const Footer = () => {

    return (
        <>
            <Container fluid style={{backgroundColor: "#29405B", color: "white"}}>
                <Row className={"justify-content-end align-content-center"} style={{padding: 15}}>
                    <Col className={"col-1 mr-auto align-self-center"}>
                        <img src={logo} alt={"Logo"} style={{height: 30}} />
                    </Col>

                    <Col className={"col-1 ml-auto align-items-center"}>
                        <i className="fa fa-instagram" style={{color: "white", fontSize: 22, marginTop: 5}}
                           onClick={() => {
                            window.location.href = 'https://www.instagram.com/bohringart';
                            return null;
                        }} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Footer;
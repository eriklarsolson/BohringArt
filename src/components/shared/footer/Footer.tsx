import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import logo from "../header/logo.png";
import { Link } from "react-router-dom";
import line from "../header/line.png";

const Footer = () => {

    return (
        <>
            <Container fluid style={{backgroundColor: "#29405B", color: "white"}}>
                <Row className={"justify-content-end align-content-center"} style={{padding: 15}}>
                    <Col className={"col-1 align-self-center"}>
                        <img src={logo} alt={"Logo"} style={{height: 30}} />
                    </Col>

                    <img src={line} alt={"Menu seperator"} />

                    <Col className={"col-1 mr-auto align-self-center"}>
                        <p>SGD Logo here</p>
                    </Col>

                    <Col className={"col-1 ml-auto align-self-center"} style={{maxWidth: 100}}>
                        <Link to="/resources" style={{color: "white", fontSize: 14, fontWeight: "bold"}}>
                            Resources
                        </Link>
                    </Col>

                    <img src={line} alt={"Menu seperator"} />

                    <Col className={"col-1 align-self-center"} style={{maxWidth: 20, marginRight: 20}}>
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
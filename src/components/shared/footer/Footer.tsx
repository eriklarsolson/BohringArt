import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import logo from "../header/logo.png";
import sgd from "./sgd.png"
import { Link } from "react-router-dom";
import line from "../header/line.png";

const Footer = () => {

    return (
        <>
            <Container fluid style={{backgroundColor: "#29405B", color: "white", zIndex: 12}}>
                <Row className={"justify-content-end align-content-center"} style={{padding: 15}}>
                    <Col className={"col-2 col-md-1 align-self-center"}>
                        <img src={logo} alt={"Logo"} style={{height: 30}} />
                    </Col>

                    <img src={line} alt={"Menu seperator"} />

                    <Col className={"col-1 mr-auto align-self-center"}>
                        <img src={sgd} alt={"Science Gallery Of Detroit Logo"} style={{height: 40}} onClick={() => {
                            window.location.href = 'https://detroit.sciencegallery.com/';
                            return null;
                        }} />
                    </Col>

                    <Col className={"col-2 col-md-1 ml-auto align-self-center"}>
                        <Link to="/resources" style={{color: "white", fontSize: 14, fontWeight: "bold"}}>
                            Resources
                        </Link>
                    </Col>

                    <img src={line} alt={"Menu seperator"} />

                    <Col className={"col-2 col-md-1 align-self-center"} style={{maxWidth: 20, marginRight: 20}}>
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
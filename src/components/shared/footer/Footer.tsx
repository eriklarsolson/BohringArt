import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import logo from "../header/logo.png";
import sgd from "./sgd.png"
import msu from "./msu_cropped.png"
import { Link } from "react-router-dom";
import line from "../header/line.png";

const Footer = () => {

    return (
        <>
            <Container fluid style={{backgroundColor: "#29405B", color: "white", zIndex: 12}}>
                <Row className={"justify-content-end align-content-center"} style={{padding: 15}}>
                    <Col className={"align-self-center"} style={{maxWidth: 150, flex: "0 0 150px"}}>
                        <img className={"clickable-image"} src={logo} alt={"Logo"} style={{height: 30}} />
                    </Col>

                    <img src={line} alt={"Menu seperator"} />

                    <Col className={"align-self-center"} style={{maxWidth: 150, flex: "0 0 150px"}}>
                        <img className={"clickable-image"} src={sgd} alt={"Science Gallery Of Detroit Logo"} style={{height: 40}} onClick={() => {
                            window.location.href = 'https://detroit.sciencegallery.com/';
                            return null;
                        }} />
                    </Col>

                    <img src={line} alt={"Menu seperator"} />

                    <Col className={"align-self-center mr-auto"} style={{maxWidth: 150, flex: "0 0 150px", paddingLeft: 20}}>
                        <img className={"clickable-image"} src={msu} alt={"MSU Logo"} style={{float: "left", height: 40}} onClick={() => {
                            window.location.href = 'https://msu.edu/';
                            return null;
                        }} />
                    </Col>

                    <Col className={"align-self-center"} style={{maxWidth: 100, flex: "0 0 100px"}}>
                        <Link to="/resources" style={{color: "white", fontSize: 14, fontWeight: "bold"}}>
                            Resources
                        </Link>
                    </Col>

                    <img src={line} alt={"Menu seperator"} />

                    <Col className={"align-self-center"} style={{maxWidth: 50, flex: "0 0 50px"}}>
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
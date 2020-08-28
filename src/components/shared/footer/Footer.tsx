import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {

    return (
        <>
            <Container fluid style={{backgroundColor: "#29405B", color: "white"}}>
                <Row className={"justify-content-end align-content-center"} style={{padding: 15}}>
                    <Col className={"col-1 mr-auto align-self-center"}>
                        <p style={{fontWeight: "bold", marginBottom: 0}}>Bohring Art</p>
                    </Col>

                    <Col className={"col-1 ml-auto align-self-center"}>
                        <i className="fa fa-instagram" style={{color: "white"}}
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
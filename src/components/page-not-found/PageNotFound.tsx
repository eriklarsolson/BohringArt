import React from 'react';
import {useLocation} from "react-router";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from 'react-bootstrap'

const PageNotFound = () => {
    const loc = useLocation();
    return (
        <React.Fragment>
            <Container fluid>
                <Row className={"vh-100 justify-content-center align-content-center"}>
                    <Col className={"col-4"}>
                        <h1 style={{color: "#29405B", fontWeight: "bold"}}>
                            Sorry, not even physics could help you find the page you’re looking for.
                        </h1>

                        <p>
                            <code>{loc.pathname}</code>
                        </p>

                        <Button
                            href="/"
                            variant="primary"
                            type="submit"
                            className={"btn green-button"}
                            style={{width: 150,
                                clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}>
                            Home
                        </Button>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default PageNotFound;
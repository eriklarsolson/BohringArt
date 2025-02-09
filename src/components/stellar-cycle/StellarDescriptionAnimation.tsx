import React from "react";
import { motion } from "framer-motion";
import {Col, Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export interface AnimationProps {
    title: string;
    description: string;
    goBack: any;
}

export const StellarDescriptionAnimation: React.FC<AnimationProps>  = ({title, description, goBack}) => {
    return (
        <motion.div
            animate={{
                // scale: [1, 2, 2, 1, 1],
                // rotate: [0, 0, 270, 270, 0],
                // x: [100, 200, 300, 400, 500],
                x: [1000, 0]
                // borderRadius: ["20%", "20%", "50%", "50%", "20%"]
            }}

            style={{height: "100%"}}

            transition={{
                duration: 3,
                ease: "easeOut",
                times: [0, 1],
            }}>

            <Container fluid style={{margin: 0, padding: 0, backgroundColor: "#29405B", height: "100%",
                color: "white", clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)"}}>

                <Row style={{margin: 0, marginBottom: "5%"}}>
                    <Col className={"col-8 align-self-center"} style={{textAlign: "center", marginTop: 25}}>
                        <p style={{fontWeight: "bold", fontSize: "48px", marginBottom: 0}}>{title}</p>
                    </Col>

                    <Col className={"col-2 ml-auto align-self-center"} style={{padding: 0, marginTop: 25}}>
                        <Row style={{margin: 0}} className={"justify-content-end"}>
                            <Button className={"green-button"} style={{width: 200}}
                                    onClick={goBack}>
                                <i className="fa fa-arrow-right" />
                            </Button>
                        </Row>
                    </Col>
                </Row>

                <Row className="justify-content-center" style={{margin: 0, padding: 0}}>
                    <Col className={"col-8"}>
                        <p style={{fontSize: 20, whiteSpace: "pre-line"}}>{description}</p>
                    </Col>
                </Row>
            </Container>

        </motion.div>
    );
};

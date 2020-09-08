import * as React from "react";
import {motion, useAnimation} from "framer-motion";
import { Container, Row, Col, Button } from 'react-bootstrap'
import {useState} from "react";
import dena from "./images/dena.png";
import parisa from "./images/parisa2.jpg";
import brean from "./images/person3.png";
import danny from "./images/danny.png";
import wyatt from "./images/person1.png";
import pranav from "./images/person2.png";
import ray from "./images/person5.png";
import lars from "./images/lars.png";
import hueywen from "./images/person4.png";
import "./About.scss"

export interface AnimationProps {

}

export const AboutUsAnimation: React.FC<AnimationProps>  = ({}) => {
    const controls1 = useAnimation()
    const controls2 = useAnimation()

    const [image, setImage] = useState<string>(lars);
    const [name, setName] = useState<string>("Lars Olson");
    const [title, setTitle] = useState<string>("Programmer");
    const [description, setDescription] = useState<string>("This is a description about a person");

    const [infoStyles, setInfoStyles] = useState<React.CSSProperties>({
        display: "none"
    });

    const showInfo = () => {
        controls2.start({
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        })

        setInfoStyles({
            display: "block"
        })
    }

    const hideInfo = () => {
        controls2.start({
            opacity: [1, 0],
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        })

        setTimeout(() => {  showPeople() }, 500);
    }

    const showPeople = () => {
        controls1.start({
            x: ["100%", "0%"],
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        })

        setInfoStyles({
            display: "none"
        })
    }

    const hidePeople = () => {

        controls1.start({
            x: ["0%", "100%"],
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        })

        setTimeout(() => {  showInfo() }, 500);
    }
    const startAnimation = (person: string) => {
        if (person === "dena") {
            setImage(dena)
            setName("Dena")
            setTitle("Title here")
            setDescription("This is a description about a person")
        } else if (person === "parisa") {
            setImage(parisa)
            setName("Parisa Ghaderi")
            setTitle("Title here")
            setDescription("This is a description about a person")
        } else if (person === "brean") {
            setImage(brean)
            setName("Brean Prefontaine")
            setTitle("Graduate Student")
            setDescription("This is a description about a person")
        } else if (person === "danny") {
            setImage(danny)
            setName("Danny Brandwein")
            setTitle("Graphic Design Student")
            setDescription("This is a description about a person")
        } else if (person === "wyatt") {
            setImage(wyatt)
            setName("Wyatt Stonhouse")
            setTitle("Graphic Design Student")
            setDescription("This is a description about a person")
        } else if (person === "pranav") {
            setImage(pranav)
            setName("Pranav Nalamwar")
            setTitle("Physics Student")
            setDescription("This is a description about a person")
        } else if (person === "ray") {
            setImage(ray)
            setName("Ray Smith")
            setTitle("Physics Student")
            setDescription("This is a description about a person")
        } else if (person === "lars") {
            setImage(lars)
            setName("Lars Olson")
            setTitle("Developer")
            setDescription("This is a description about a person")
        } else if (person === "hueywen") {
            setImage(hueywen)
            setName("Hueywen")
            setTitle("Title here")
            setDescription("This is a description about a person")
        }

        hidePeople()
    }

    return (
        <>
            <motion.div
                animate={controls1}

                style={{height: "100%"}}>
                <Row className="justify-content-center">
                    <Container fluid>
                        <Row className={"justify-content-center"}>
                            <Col className={"col-8"}>
                                <Row  className={"justify-content-center"}>
                                    <Col className={"col-9"}>
                                        <p style={{marginLeft: "3%", color: "white", fontSize: 55, fontWeight: "bold", textAlign: "left"}}>Our Team</p>
                                    </Col>
                                </Row>

                                <Container fluid>
                                    <Row className={"justify-content-center"}>
                                        <Col className="col-12 col-md-12 col-lg-3 person" style={{margin: 5}} onClick={() => startAnimation("dena")}>
                                            <Container fluid style={{clipPath: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)"}}>
                                                <Row>
                                                    <img alt={"About Us Person"} src={dena} style={{width: "100%"}} />
                                                </Row>

                                                <Row style={{backgroundColor: "#F8EDDD", color: "#29405B"}}>
                                                    <Col>
                                                        <p style={{marginLeft: "8%", marginTop: 10, fontSize: "2vh", fontWeight: "bold"}}>Dena</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>

                                        <Col className="col-12 col-md-12 col-lg-3 person" style={{margin: 5}} onClick={() => startAnimation("parisa")}>
                                            <Container fluid style={{clipPath: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)"}}>
                                                <Row>
                                                    <img alt={"About Us Person"} src={parisa} style={{width: "100%"}} />
                                                </Row>

                                                <Row style={{backgroundColor: "#F8EDDD", color: "#29405B"}}>
                                                    <Col>
                                                        <p style={{marginLeft: "8%", marginTop: 10, fontSize: "2vh", fontWeight: "bold"}}>Parisa Ghaderi</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>

                                        <Col className="col-12 col-md-12 col-lg-3 person" style={{margin: 5}} onClick={() => startAnimation("brean")}>
                                            <Container fluid style={{clipPath: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)"}}>
                                                <Row>
                                                    <img alt={"About Us Person"} src={brean} style={{width: "100%"}} />
                                                </Row>

                                                <Row style={{backgroundColor: "#F8EDDD", color: "#29405B"}}>
                                                    <Col>
                                                        <p style={{marginLeft: "8%", marginTop: 10, fontSize: "2vh", fontWeight: "bold"}}>Brean Prefontaine</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>
                                    </Row>
                                    <Row className={"justify-content-center"} style={{marginLeft: "4%"}}>
                                        <Col className="col-12 col-md-12 col-lg-3 person" style={{margin: 5}} onClick={() => startAnimation("danny")}>
                                            <Container fluid style={{clipPath: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)"}}>
                                                <Row>
                                                    <img alt={"About Us Person"} src={danny} style={{width: "100%"}} />
                                                </Row>

                                                <Row style={{backgroundColor: "#F8EDDD", color: "#29405B"}}>
                                                    <Col>
                                                        <p style={{marginLeft: "8%", marginTop: 10, fontSize: "2vh", fontWeight: "bold"}}>Danny Brandwein</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>

                                        <Col className="col-12 col-md-12 col-lg-3 person" style={{margin: 5, marginLeft: "2%"}} onClick={() => startAnimation("wyatt")}>
                                            <Container fluid style={{clipPath: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)"}}>
                                                <Row>
                                                    <img alt={"About Us Person"} src={wyatt} style={{width: "100%"}} />
                                                </Row>

                                                <Row style={{backgroundColor: "#F8EDDD", color: "#29405B"}}>
                                                    <Col>
                                                        <p style={{marginLeft: "8%", marginTop: 10, fontSize: "2vh", fontWeight: "bold"}}>Wyatt Stonhouse</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>

                                        <Col className="col-12 col-md-12 col-lg-3 person" style={{margin: 5, marginLeft: "1%"}} onClick={() => startAnimation("pranav")}>
                                            <Container fluid style={{clipPath: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)"}}>
                                                <Row>
                                                    <img alt={"About Us Person"} src={pranav} style={{width: "100%"}} />
                                                </Row>

                                                <Row style={{backgroundColor: "#F8EDDD", color: "#29405B"}}>
                                                    <Col>
                                                        <p style={{marginLeft: "8%", marginTop: 10, fontSize: "2vh", fontWeight: "bold"}}>Pranav Nalamwar</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>
                                    </Row>
                                    <Row className={"justify-content-center"} style={{marginLeft: "9%"}}>
                                        <Col className="col-12 col-md-12 col-lg-3 person" style={{margin: 5}} onClick={() => startAnimation("ray")}>
                                            <Container fluid style={{clipPath: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)"}}>
                                                <Row>
                                                    <img alt={"About Us Person"} src={ray} style={{width: "100%"}} />
                                                </Row>

                                                <Row style={{backgroundColor: "#F8EDDD", color: "#29405B"}}>
                                                    <Col>
                                                        <p style={{marginLeft: "8%", marginTop: 10, fontSize: "2vh", fontWeight: "bold"}}>Ray Smith</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>

                                        <Col className="col-12 col-md-12 col-lg-3 person" style={{margin: 5, marginLeft: "4%"}} onClick={() => startAnimation("lars")}>
                                            <Container fluid style={{clipPath: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)"}}>
                                                <Row>
                                                    <img alt={"About Us Person"} src={lars} style={{width: "100%"}} />
                                                </Row>

                                                <Row style={{backgroundColor: "#F8EDDD", color: "#29405B"}}>
                                                    <Col>
                                                        <p style={{marginLeft: "8%", marginTop: 10, fontSize: "2vh", fontWeight: "bold"}}>Lars Olson</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>

                                        <Col className="col-12 col-md-12 col-lg-3 person" style={{margin: 5, marginLeft: "2%"}} onClick={() => startAnimation("hueywen")}>
                                            <Container fluid style={{clipPath: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)"}}>
                                                <Row>
                                                    <img alt={"About Us Person"} src={hueywen} style={{width: "100%"}} />
                                                </Row>

                                                <Row style={{backgroundColor: "#F8EDDD", color: "#29405B"}}>
                                                    <Col>
                                                        <p style={{marginLeft: "8%", marginTop: 10, fontSize: "2vh", fontWeight: "bold"}}>Hueywen</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </motion.div>

            <motion.div
                animate={controls2}

                style={{position: "absolute", top: 250, bottom: 0, right: 0, left: 0, opacity: 0, ...infoStyles}}>

                <Row  className={"justify-content-center"}>
                    <Col className={"col-9"}>
                        <p style={{marginLeft: "5%", color: "white", fontSize: 45, fontWeight: "bold", textAlign: "left"}}>Meet The Team</p>
                    </Col>
                </Row>

                <Row className={"justify-content-center"} style={{padding: 5}}>
                    <Col className={"col-2"} style={{padding: 0}}>
                        <Container fluid style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)"}}>
                            <Row>
                                <img alt={"About Us Person"} src={image} style={{width: "100%"}} />
                            </Row>
                        </Container>
                    </Col>

                    <Col className={"col-6"} style={{padding: 0, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 93% 0, 100% 100%, 0% 100%)"}}>
                        <Container fluid style={{textAlign: "left", margin: "3%", color: "#29405B"}}>
                            <Row className={"justify-content-center"}>
                                <Col className={"col-9"}>
                                    <Button className={"green-button"} style={{float: "right", width: 100,
                                        clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                            onClick={() => hideInfo()}>
                                        <i className="fa fa-arrow-right" />
                                    </Button>
                                </Col>
                            </Row>

                            <Row className={"justify-content-center"}>
                                <Col className={"col-9"}>
                                    <p style={{marginBottom: 0, fontSize: 40, fontWeight: "bold"}}>{name}</p>
                                </Col>
                            </Row>
                            <Row className={"justify-content-center"}>
                                <Col className={"col-9"}>
                                    <p style={{fontSize: 16, fontWeight: "bold"}}>{title}</p>
                                </Col>
                            </Row>
                            <Row className={"justify-content-center"}>
                                <Col className={"col-9"}>
                                    <p style={{marginBottom: 0, fontSize: 14, fontWeight: "bold"}}>{description}</p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </motion.div>
        </>
    );
};

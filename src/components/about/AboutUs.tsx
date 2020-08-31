import React from 'react';
import './About.scss';
import { Container, Row, Col } from 'react-bootstrap'
import danny from "./images/danny.png"
import dena from "./images/dena.png"
import parisa from "./images/parisa.png"
import person1 from "./images/person1.png"
import person2 from "./images/person2.png"
import person3 from "./images/person3.png"
import person4 from "./images/person4.png"
import person5 from "./images/person5.png"
import lars from "./images/lars.png"

class AboutUs extends React.Component<any, any> {
    render() {
        return (
            <>
                    <Container fluid style={{margin: 0}}>
                        <Row className="justify-content-center" style={{paddingBottom: "10%", backgroundColor: "#29405B",
                            clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)"}}>
                            <Container fluid>
                                <Row  className={"justify-content-center"}>
                                    <Col className={"col-10"}>
                                        <p style={{color: "white", fontSize: 55, fontWeight: "bold", textAlign: "left"}}>Our Team</p>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"}>
                                    <Col className={"col-6"}>
                                        <Container fluid>
                                            <Row className={"justify-content-center"}>
                                                <Col style={{margin: 20, clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                     className="col-sm-12 col-md-3">
                                                    <img src={danny} />
                                                </Col>

                                                <Col style={{margin: 20, clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                     className="col-sm-12 col-md-3">
                                                    <img src={dena} />
                                                </Col>

                                                <Col style={{margin: 20, clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                     className="col-sm-12 col-md-3">
                                                    <img src={parisa} />
                                                </Col>

                                                <Col style={{margin: 20, clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                     className="col-sm-12 col-md-3">
                                                    <img src={person1} />
                                                </Col>

                                                <Col style={{margin: 20, clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                     className="col-sm-12 col-md-3">
                                                    <img src={person2} />
                                                </Col>

                                                <Col style={{margin: 20, clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                     className="col-sm-12 col-md-3">
                                                    <img src={person3} />
                                                </Col>

                                                <Col style={{margin: 20, clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                     className="col-sm-12 col-md-3">
                                                    <img src={person4} />
                                                </Col>

                                                <Col style={{margin: 20, clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                     className="col-sm-12 col-md-3">
                                                    <img src={person5} />
                                                </Col>

                                                <Col style={{margin: 20, clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                     className="col-sm-12 col-md-3">
                                                    <img src={lars} style={{maxHeight: 250}} />
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                </Row>
                            </Container>
                        </Row>

                        <Row style={{marginTop: 50}} className={"justify-content-center"}>
                            <Col className={"col-6"} style={{padding: 100}}>
                                <Container fluid>
                                    <Row  style={{textAlign: "left", padding: "5%"}}>
                                        <h1 style={{fontWeight: "bolder", color: "#29405B"}}>PROJECT PURPOSE</h1>
                                    </Row>

                                    <Row style={{textAlign: "left", display: "block", padding: "5%"}}>
                                        <p style={{color: "#29405B", fontWeight: "bold"}}>
                                            In this collaborative project, we propose to design an educational kiosk, using the principles of interactive design,
                                            that will convey physics concepts effectively to college students. The concepts are chosen
                                            from Introductory Physics courses. Depending on the number of students and mediators we hire,
                                            we will expand on the scientific visualization. We will recruit at least two undergraduate physics students,
                                            two undergraduate graphic designers, and two programmers from computer science & Engineering.
                                            The physics students (with Dena’s supervision) will be responsible for communicating selected
                                            physics concepts to the designers. The designers will then use their knowledge to create
                                            infographics that elucidate physics phenomena.
                                        </p>
                                    </Row>
                                </Container>
                            </Col>

                            <Col className={"ml-auto col-5"} style={{backgroundColor: "rgba(82, 82, 82, 0.8)", clipPath: "polygon(0 10%, 100% 0, 100% 100%, 10% 100%)"}}>
                                <Container fluid style={{padding: 100}}>
                                    <Row  style={{textAlign: "left", padding: "5%"}}>
                                        <h1 style={{fontWeight: "bolder", color: "white"}}>WHY BOHRING?</h1>
                                    </Row>

                                    <Row style={{textAlign: "left", display: "block", padding: "5%"}}>
                                        <p style={{color: "white"}}>
                                            Niels bohr was a ... text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here. text goes here
                                        </p>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                {/*<div className="about-banner">*/}
                {/*    <img  className="about-banner" src={banner} width={"100%"} height={"100%"} />*/}
                {/*    <div className="about-text" style={{backgroundColor: "#29405B", height: "auto"}}>*/}
            </>
        );
    }
}

export default AboutUs;
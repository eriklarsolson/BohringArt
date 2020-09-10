import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import line from "../shared/header/line.png";
import "../home/Home.scss"

class Resources extends React.Component {
    render() {
        return (
            <>
                <Container fluid style={{backgroundColor: "#F8EDDD"}}>
                    <Row className={"justify-content-center"} style={{paddingTop: 25}}>
                        <Container fluid>
                            {/*<Row className={"justify-content-center"}>*/}
                            {/*    <p style={{color: "#29405B", fontSize: 55, fontWeight: "bold"}}>*/}
                            {/*        Resources*/}
                            {/*    </p>*/}
                            {/*</Row>*/}

                            <Row className={"justify-content-center"}>
                                <Container fluid>
                                    <Row className={"justify-content-center"}>
                                        <Col className={"col-10 col-md-10 col-lg-3"}>
                                            <Row className={"justify-content-center"}>
                                                <p style={{color: "#29405B", fontWeight: "bold", fontSize: 30, marginBottom: 0}}>
                                                    'Lasers & Lenses' Resources
                                                </p>
                                            </Row>

                                            <Row className={"justify-content-center align-content-center"} style={{margin: 25}}>
                                                <Col className={"col-8 col-md-8 col-lg-12 learn-section"} style={{backgroundColor: "#29405B", color: "#F8EDDD", minHeight: 100,
                                                    clipPath: "polygon(0 0, 98% 0, 100% 100%, 2% 100%)"}}>
                                                    <Container fluid>
                                                        <Row className={"justify-content-center align-content-center"}>
                                                            <Col className={"col-12 align-self-center"} style={{paddingTop: 15, textAlign: "center", margin: 10}}>
                                                                <a href={"https://www.smithsonianmag.com/innovation/this-new-dye-changes-color-when-exposed-to-uv-light-180973099/"} style={{fontSize: 16, color: "white", wordWrap: "break-word"}}>
                                                                    Smithsonian Magazine
                                                                </a>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </Col>
                                            </Row>

                                            <Row className={"justify-content-center align-content-center"} style={{margin: 25}}>
                                                <Col className={"col-8 col-md-8 col-lg-12 learn-section"} style={{marginLeft: 20, backgroundColor: "#29405B", color: "#F8EDDD", minHeight: 100,
                                                    clipPath: "polygon(0 0, 98% 0, 100% 100%, 2% 100%)"}}>
                                                    <Container fluid>
                                                        <Row className={"justify-content-center align-content-center"}>
                                                            <Col className={"col-12 align-self-center"} style={{paddingTop: 15, textAlign: "center", margin: 10}}>
                                                                <a href={"https://ricktu288.github.io/ray-optics/simulator/"} style={{fontSize: 16, color: "white", wordWrap: "break-word"}}>
                                                                    Ray Optics Simulation
                                                                </a>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </Col>
                                            </Row>

                                            <Row className={"justify-content-center align-content-center"} style={{margin: 25}}>
                                                <Col className={"col-8 col-md-8 col-lg-12 learn-section"} style={{marginLeft: 40, backgroundColor: "#29405B", color: "#F8EDDD", minHeight: 100,
                                                    clipPath: "polygon(0 0, 98% 0, 100% 100%, 2% 100%)"}}>
                                                    <Container fluid>
                                                        <Row className={"justify-content-center align-content-center"}>
                                                            <Col className={"col-12 align-self-center"} style={{paddingTop: 15, textAlign: "center", margin: 10}}>
                                                                <a href={"https://www.nasa.gov/pdf/58258main_Optics.Guide.pdf"} style={{fontSize: 16, color: "white", wordWrap: "break-word"}}>
                                                                    OPTICS - Light, Color, and Their Uses
                                                                </a>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </Col>
                                            </Row>

                                            <Row className={"justify-content-center align-content-center"} style={{margin: 25}}>
                                                <Col className={"col-8 col-md-8 col-lg-12 learn-section"} style={{marginLeft: 60, backgroundColor: "#29405B", color: "#F8EDDD", minHeight: 100,
                                                    clipPath: "polygon(0 0, 98% 0, 100% 100%, 2% 100%)"}}>
                                                    <Container fluid>
                                                        <Row className={"justify-content-center align-content-center"}>
                                                            <Col className={"col-12 align-self-center"} style={{paddingTop: 5, textAlign: "center", margin: 10}}>
                                                                <a href={"https://escooptics.com/blogs/news/84277891-what-determines-the-wavelength-of-a-laser"} style={{fontSize: 16, color: "white", wordWrap: "break-word"}}>
                                                                    "What Determines the Wavelength of a Laser?" - ESCO Optics
                                                                </a>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col className={"col-10 col-md-10 col-lg-3"}>
                                            <Row className={"justify-content-center"}>
                                                <p style={{color: "#29405B", fontWeight: "bold", fontSize: 30, marginBottom: 0}}>
                                                    'Circuit Construction' Resources
                                                </p>
                                            </Row>

                                            <Row className={"justify-content-center align-content-center"} style={{margin: 25}}>
                                                <Col className={"col-8 col-md-8 col-lg-12 learn-section"} style={{backgroundColor: "#29405B", color: "#F8EDDD", minHeight: 100,
                                                    clipPath: "polygon(0 0, 98% 0, 100% 100%, 2% 100%)"}}>
                                                    <Container fluid>
                                                        <Row className={"justify-content-center align-content-center"}>
                                                             <Col className={"col-12 align-self-center"}  style={{paddingTop: 15, textAlign: "center", margin: 10}}>
                                                                <a href={"https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc"} style={{fontSize: 16, color: "white", wordWrap: "break-word"}}>
                                                                    Circuit Construction Kit DC
                                                                </a>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </Col>
                                            </Row>

                                            <Row className={"justify-content-center align-content-center"} style={{margin: 25}}>
                                                <Col className={"col-8 col-md-8 col-lg-12 learn-section"} style={{marginLeft: 20, backgroundColor: "#29405B", color: "#F8EDDD", minHeight: 100,
                                                    clipPath: "polygon(0 0, 98% 0, 100% 100%, 2% 100%)"}}>
                                                    <Container fluid>
                                                        <Row className={"justify-content-center align-content-center"}>
                                                             <Col className={"col-12 align-self-center"}  style={{paddingTop: 15, textAlign: "center", margin: 10}}>
                                                                <a href={"https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic "} style={{fontSize: 16, color: "white", wordWrap: "break-word"}}>
                                                                    "Unit: Circuit analysis" = Khan Academy
                                                                </a>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </Col>
                                            </Row>

                                            <Row className={"justify-content-center align-content-center"} style={{margin: 25}}>
                                                <Col className={"col-8 col-md-8 col-lg-12 learn-section"} style={{marginLeft: 40, backgroundColor: "#29405B", color: "#F8EDDD", minHeight: 100,
                                                    clipPath: "polygon(0 0, 98% 0, 100% 100%, 2% 100%)"}}>
                                                    <Container fluid>
                                                        <Row className={"justify-content-center align-content-center"}>
                                                             <Col className={"col-12 align-self-center"}  style={{paddingTop: 15, textAlign: "center", margin: 10}}>
                                                                <a href={"https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_University_Physics_(OpenStax)/Map%3A_University_Physics_II_-_Thermodynamics_Electricity_and_Magnetism_(OpenStax)/10%3A_Direct-Current_Circuits/10.03%3A_Resistors_in_Series_and_Parallel"} style={{fontSize: 16, color: "white", wordWrap: "break-word"}}>
                                                                    "Resistors in Series and Parallel"
                                                                </a>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                    <Row className={"justify-content-center"}>
                                        <Col className={"col-10"}>
                                             <hr style={{width: "100%", margin: 10, height: 4, borderRadius: 50,
                                                 backgroundColor: "#29405B"}} />
                                        </Col>
                                    </Row>

                                    <Row className={"justify-content-center"} style={{marginLeft: 55, textAlign: "center"}}>
                                        <Col className={"col-10 col-md-10 col-lg-3"}>
                                            <Row className={"justify-content-center"}>
                                                <p style={{color: "#29405B", fontWeight: "bold", fontSize: 30, marginBottom: 0}}>
                                                    'To The Stars' Resources
                                                </p>
                                            </Row>

                                            <Row className={"justify-content-center align-content-center"} style={{margin: 25}}>
                                                <Col className={"col-8 col-md-8 col-lg-12 learn-section"} style={{backgroundColor: "#29405B", color: "#F8EDDD", minHeight: 100,
                                                    clipPath: "polygon(0 0, 98% 0, 100% 100%, 2% 100%)"}}>
                                                    <Container fluid>
                                                        <Row className={"justify-content-center align-content-center"}>
                                                             <Col className={"col-12 align-self-center"}  style={{paddingTop: 15, textAlign: "center", margin: 10}}>
                                                                <a href={"https://www.grc.nasa.gov/www/k-12/rocket/rktpow.html"} style={{fontSize: 16, color: "white", wordWrap: "break-word"}}>
                                                                    "Ideal Rocket Equation" - NASA
                                                                </a>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </Col>
                                            </Row>

                                            <Row className={"justify-content-center align-content-center"} style={{margin: 25}}>
                                                <Col className={"col-8 col-md-8 col-lg-12 learn-section"} style={{marginLeft: 20, backgroundColor: "#29405B", color: "#F8EDDD", minHeight: 100,
                                                    clipPath: "polygon(0 0, 98% 0, 100% 100%, 2% 100%)"}}>
                                                    <Container fluid>
                                                        <Row className={"justify-content-center align-content-center"}>
                                                             <Col className={"col-12 align-self-center"}  style={{paddingTop: 15, textAlign: "center", margin: 10}}>
                                                                <a href={"https://mars.nasa.gov/insight/spacecraft/launch-vehicle/atlas-v-rocket/"} style={{fontSize: 16, color: "white", wordWrap: "break-word"}}>
                                                                   Atlas V Rocket - NASA
                                                                </a>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </Col>
                                            </Row>

                                            <Row className={"justify-content-center align-content-center"} style={{margin: 25}}>
                                                <Col className={"col-8 col-md-8 col-lg-12 learn-section"} style={{marginLeft: 40, backgroundColor: "#29405B", color: "#F8EDDD", minHeight: 100,
                                                    clipPath: "polygon(0 0, 98% 0, 100% 100%, 2% 100%)"}}>
                                                    <Container fluid>
                                                        <Row className={"justify-content-center align-content-center"}>
                                                             <Col className={"col-12 align-self-center"}  style={{paddingTop: 15, textAlign: "center", margin: 10}}>
                                                                <a href={"http://learn.sigmarockets.com/lessons/understanding-aerodynamics-with-the-educator-rocket/?print=print"} style={{fontSize: 16, color: "white", wordWrap: "break-word"}}>
                                                                    "Understanding Rocket Aerodynamics" - Sigma Rockets
                                                                </a>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </Col>
                                            </Row>

                                            <Row className={"justify-content-center align-content-center"} style={{margin: 25}}>
                                                <Col className={"col-8 col-md-8 col-lg-12 learn-section"} style={{marginLeft: 60, backgroundColor: "#29405B", color: "#F8EDDD", minHeight: 100,
                                                    clipPath: "polygon(0 0, 98% 0, 100% 100%, 2% 100%)"}}>
                                                    <Container fluid>
                                                        <Row className={"justify-content-center align-content-center"}>
                                                             <Col className={"col-12 align-self-center"}  style={{paddingTop: 15, textAlign: "center", margin: 10}}>
                                                                <a href={"https://blogs.nasa.gov/Rocketology/2015/07/09/designing-a-rocket-in-six-easy-steps/"} style={{fontSize: 16, color: "white", wordWrap: "break-word"}}>
                                                                    "Designing A Rocket In Six Easy Steps" - NASA
                                                                </a>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col className={"col-10 col-md-10 col-lg-3"} style={{marginLeft: 10}}>
                                            <Row className={"justify-content-center"}>
                                                <p style={{color: "#29405B", fontWeight: "bold", fontSize: 30, marginBottom: 0}}>
                                                    'Stellar Life Cycle' Resources
                                                </p>
                                            </Row>

                                            <Row className={"justify-content-center align-content-center"} style={{margin: 25}}>
                                                <Col className={"col-8 col-md-8 col-lg-12 learn-section"} style={{backgroundColor: "#29405B", color: "#F8EDDD", minHeight: 100,
                                                    clipPath: "polygon(0 0, 98% 0, 100% 100%, 2% 100%)"}}>
                                                    <Container fluid>
                                                        <Row className={"justify-content-center align-content-center"}>
                                                             <Col className={"col-12 align-self-center"}  style={{paddingTop: 15, textAlign: "center", margin: 10}}>
                                                                <a href={"https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-a-black-hole-58.html"} style={{fontSize: 16, color: "white", wordWrap: "break-word"}}>
                                                                    "What is a Black Hole" - NASA
                                                                </a>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </Col>
                                            </Row>

                                            <Row className={"justify-content-center align-content-center"} style={{margin: 25}}>
                                                <Col className={"col-8 col-md-8 col-lg-12 learn-section"} style={{marginLeft: 20, backgroundColor: "#29405B", color: "#F8EDDD", minHeight: 100,
                                                    clipPath: "polygon(0 0, 98% 0, 100% 100%, 2% 100%)"}}>
                                                    <Container fluid>
                                                        <Row className={"justify-content-center align-content-center"}>
                                                             <Col className={"col-12 align-self-center"}  style={{paddingTop: 15, textAlign: "center", margin: 10}}>
                                                                <a href={"https://www.nasa.gov/vision/universe/starsgalaxies/black_hole_description.html"} style={{fontSize: 16, color: "white", wordWrap: "break-word"}}>
                                                                    "What Are Black Holes?" - NASA
                                                                </a>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </Col>
                                            </Row>

                                            <Row className={"justify-content-center align-content-center"} style={{margin: 25}}>
                                                <Col className={"col-8 col-md-8 col-lg-12 learn-section"} style={{marginLeft: 40, backgroundColor: "#29405B", color: "#F8EDDD", minHeight: 100,
                                                    clipPath: "polygon(0 0, 98% 0, 100% 100%, 2% 100%)"}}>
                                                    <Container fluid>
                                                        <Row className={"justify-content-center align-content-center"}>
                                                             <Col className={"col-12 align-self-center"}  style={{paddingTop: 15, textAlign: "center", margin: 10}}>
                                                                <a href={"https://en.wikipedia.org/wiki/Stellar_evolution"} style={{fontSize: 16, color: "white", wordWrap: "break-word"}}>
                                                                    Stellar Evolution - Wikipedia
                                                                </a>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </Col>
                                            </Row>
                                            <Row className={"justify-content-center align-content-center"} style={{margin: 25}}>
                                                <Col className={"col-8 col-md-8 col-lg-12 learn-section"} style={{marginLeft: 60, backgroundColor: "#29405B", color: "#F8EDDD", minHeight: 100,
                                                    clipPath: "polygon(0 0, 98% 0, 100% 100%, 2% 100%)"}}>
                                                    <Container fluid>
                                                        <Row className={"justify-content-center align-content-center"}>
                                                             <Col className={"col-12 align-self-center"}  style={{paddingTop: 15, textAlign: "center", margin: 10}}>
                                                                <a href={"https://starinabox.lco.global/"} style={{fontSize: 16, color: "white", wordWrap: "break-word"}}>
                                                                    Star In A Box
                                                                </a>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </Col>
                                            </Row>

                                            <Row className={"justify-content-center align-content-center"} style={{margin: 25}}>
                                                <Col className={"col-8 col-md-8 col-lg-12 learn-section"} style={{marginLeft: 80, backgroundColor: "#29405B", color: "#F8EDDD", minHeight: 100,
                                                    clipPath: "polygon(0 0, 98% 0, 100% 100%, 2% 100%)"}}>
                                                    <Container fluid>
                                                        <Row className={"justify-content-center align-content-center"}>
                                                             <Col className={"col-12 align-self-center"}  style={{paddingTop: 15, textAlign: "center", margin: 10}}>
                                                                <a href={"https://imagine.gsfc.nasa.gov/science/objects/dwarfs2.html"} style={{fontSize: 16, color: "white", wordWrap: "break-word"}}>
                                                                    White Dwarfs - NASA
                                                                </a>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                    <Row className={"justify-content-center"}>
                                        <Col className={"col-10"}>
                                            <hr style={{width: "100%", margin: 10, height: 3,borderRadius: 50,
                                                backgroundColor: "#29405B"}} />
                                        </Col>
                                    </Row>

                                    <Row className={"justify-content-center"} style={{marginLeft: 130, textAlign: "center"}}>
                                        <Col className={"col-10 col-md-10 col-lg-3"}>
                                            <Row className={"justify-content-center"}>
                                                <p style={{color: "#29405B", fontWeight: "bold", fontSize: 30, marginBottom: 0}}>
                                                    General Resources
                                                </p>
                                            </Row>

                                            <Row className={"justify-content-center align-content-center"} style={{margin: 25}}>
                                                <Col className={"col-8 col-md-8 col-lg-12 learn-section"} style={{backgroundColor: "#29405B", color: "#F8EDDD", minHeight: 100,
                                                    clipPath: "polygon(0 0, 98% 0, 100% 100%, 2% 100%)"}}>
                                                    <Container fluid>
                                                        <Row className={"justify-content-center align-content-center"}>
                                                             <Col className={"col-12 align-self-center"}  style={{paddingTop: 15, textAlign: "center", margin: 10}}>
                                                                <a href={"https://www.compadre.org/IVV/collection.cfm"} style={{fontSize: 16, color: "white", wordWrap: "break-word"}}>
                                                                    Interactive Video Vignettes
                                                                </a>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col className={"col-10 col-md-10 col-lg-3"}>

                                        </Col>
                                    </Row>
                                </Container>
                            </Row>
                        </Container>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Resources;
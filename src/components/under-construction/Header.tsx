import React from "react";
import stellarBackground from './../stellar-cycle/stellarBackground.png';
import './Home.scss';
import Button from 'react-bootstrap/Button';
import {Container, Row, Col} from 'react-bootstrap'
import {TelescopeAnimation} from "./TelescopeAnimation";
import {EarthAnimation} from "./EarthAnimation";

class Header extends React.Component {
    render() {
        return (
            <>
                {/*<div className="home-banner">*/}
                {/*    <img className="home-banner" src={banner} width={"100%"} height={"100%"} />*/}

                {/*    <div className="home-text">*/}
                {/*        <Row style={{display: "block"}}>*/}
                {/*            <h1>Help us Launch a Telescope</h1>*/}
                {/*        </Row>*/}
                {/*        <Row style={{display: "block", textAlign: "left"}}>*/}
                {/*            <p>*/}
                {/*                In this practice, you will learn the building of a circuit to build an electric telescope.*/}
                {/*                After preparing the telescope it the engine will be observed before being launched to observe star life cycles*/}
                {/*            </p>*/}
                {/*        </Row>*/}
                {/*        <Row style={{display: "block"}}>*/}
                {/*            <Button*/}
                {/*                href="/activity/circuit-building"*/}
                {/*                variant="primary"*/}
                {/*                type="submit"*/}
                {/*                className={"btn green-button"}*/}
                {/*                style={{width: "30%",*/}
                {/*                clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}>*/}
                {/*                Start*/}
                {/*            </Button>*/}
                {/*        </Row>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <Container fluid style={{color: "white", padding: 0}}>
                    <Row style={{margin: 0, padding: 0, clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)", backgroundColor: "#29405B"}}>
                        <Col style={{marginTop: "10%", padding: 0}}>
                            <Container fluid>
                                <Row className={"justify-content-center"} style={{textAlign: "left"}}>
                                    <Col className={"col-8"}>
                                        <p style={{fontWeight: "bold", fontSize: 45}}>Help us Launch a Telescope</p>
                                    </Col>
                                </Row>
                                <Row className={"justify-content-center"} style={{textAlign: "left"}}>
                                    <Col className={"col-8"}>
                                        <p style={{fontSize: 18}}>
                                            In this practice, you will learn the building of a circuit to build an electric telescope.
                                            After preparing the telescope it the engine will be observed before being launched to observe star life cycles
                                        </p>
                                    </Col>
                                </Row>
                                <Row className={"justify-content-center"}>
                                    <Button
                                        href="/"
                                        variant="primary"
                                        type="submit"
                                        className={"btn green-button"}
                                        style={{width: "50%",
                                            clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}>
                                        Under Construction - Coming Soon
                                    </Button>
                                </Row>
                            </Container>
                        </Col>

                        <Col style={{padding: 0, overflow: "hidden"}}>
                            <img alt={"Stellar Background"} src={stellarBackground} />

                            <div style={{position: "absolute", top: "25%", right: "10%"}}>
                                <TelescopeAnimation />
                            </div>

                            <div style={{position: "absolute", top: "55%", right: "60%"}}>
                                <EarthAnimation />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default Header;
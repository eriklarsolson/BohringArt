import React from "react";
import stellarBackground from './../stellar-cycle/stellarBackground.png';
import './Home.scss';
import Button from 'react-bootstrap/Button';
import {Container, Row, Col} from 'react-bootstrap'
import {TelescopeAnimation} from "./TelescopeAnimation";
import {EarthAnimation} from "./EarthAnimation";
import 'react-toastify/dist/ReactToastify.css';

class Header extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

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

                {/*TODO - Need to figure out how to remove clip path on mobile version of site*/}
                <Container fluid style={{color: "white", padding: 0}}>
                    <Row style={{margin: 0, padding: 0, clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)", backgroundImage:`url(${stellarBackground})`, minHeight: this.state.width > 1000 ? 1000 : 1500}}>
                        <Col className={"col-12 col-md-12 col-lg-6"} style={{paddingTop: "10%", zIndex: 2,
                            clipPath: this.state.width > 1000 ? "polygon(0 0, 95% 0, 100% 100%, 0 100%)" : "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                            backgroundColor: "#29405B", maxHeight: this.state.width > 1000 ? "100%" : 600}}>
                            <Container fluid>
                                <Row className={"justify-content-center"} style={{textAlign: "left"}}>
                                    <Col className={"col-12 col-md-12 col-lg-8"}>
                                        <p style={{fontWeight: "bold", fontSize: 30, whiteSpace: "nowrap"}}>Help us Launch a Telescope</p>
                                    </Col>
                                </Row>
                                <Row className={"justify-content-center"} style={{textAlign: "left"}}>
                                    <Col className={"col-8"}>
                                        <p style={{fontSize: 18}}>
                                           This platform offers interactive activities where you can learn physics, create
                                            experiments, and have fun!
                                        </p>
                                    </Col>
                                </Row>
                                <Row className={"justify-content-end"} style={{marginTop: 50}}>
                                    {(this.state.width > 1000) ?
                                        <Col className={"col-8"}>
                                            <Button
                                                href="/activity/metal-engraving"
                                                variant="primary"
                                                type="submit"
                                                className={"btn green-button"}
                                                style={{width: "50%", marginRight: "5%",
                                                    clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}>
                                                Start
                                            </Button>
                                        </Col>
                                        :
                                        <Col className={"col-12"}>
                                            <Button
                                                variant="primary"
                                                type="submit"
                                                className={"btn green-button"}
                                                style={{width: "60%", marginBottom: 25,
                                                    clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}>
                                                This site is not mobile optimized, please use a computer to use this exhibit!
                                            </Button>
                                        </Col>
                                    }
                                </Row>
                            </Container>
                        </Col>

                        <div style={{position: "absolute", top: "25%", right: "35%", zIndex: 1}}>
                            <EarthAnimation />
                        </div>

                        <Col className={"col-12 col-md-12 col-lg-6"} style={{zIndex: 2, padding: 0, overflow: "hidden"}}>
                            {/*<img alt={"Stellar Background"} src={stellarBackground} />*/}

                            <div style={{position: "absolute", top: this.state.width > 1000 ? "25%" : "0%", right: this.state.width > 1000 ? "10%" : "0%"}}>
                                <TelescopeAnimation />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default Header;
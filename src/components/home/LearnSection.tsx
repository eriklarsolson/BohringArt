import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './Home.scss';
import one from "./1.png"
import two from "./2.png"
import three from "./3.png"
import four from "./4.png"

class LearnSection extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            learnSelection: 0,
            imageSelection: 0,
            width: 0,
            height: 0
        }
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
               <Container fluid style={{color: "white", textAlign: "left"}}>
                   <Row className={"justify-content-center"}>
                       <Col className={"col-9"}>
                           <p style={{color: "#29405B", margin: "4%", fontWeight: "bold", fontSize: 50}}>What You'll Learn</p>

                       </Col>
                   </Row>

                    <Row className={"justify-content-center"}>
                        <Col className={"col-10 col-md-10 col-lg-4 learn-section"} onClick={() => (this.state.width > 1000) ? this.props.goToActivity(0) : null}
                             style={{clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)", backgroundColor: "#29405B",
                                 padding: 25, marginBottom: 20}}>
                            <Row>
                                <Col className={"col-2"} style={{padding: 0, overflow: "hidden", minWidth: 140}}>
                                    <img alt={"#1"} src={one} style={{height: "75%", marginTop: "25%", float: "right", maxHeight: 175}} />
                                </Col>
                                <Col style={{paddingLeft: 25, marginTop: 20}}>
                                    <h4>LASERS & LENSES</h4>
                                    <p style={{paddingRight: 50, fontSize: "1.6vh"}}>
                                        Learn how lenses manipulate light to understand how your telescope sees distant
                                        stars. Experiment with the variables that affect the image formed when shining
                                        light through a lens, and begin controlling the type of image you see by manipulating these variables.
                                    </p>
                                    {/*<Button*/}
                                    {/*    href="/activity/circuit-building"*/}
                                    {/*    variant="primary"*/}
                                    {/*    type="submit"*/}
                                    {/*    className={"btn green-button"}*/}
                                    {/*    style={{width: "45%",*/}
                                    {/*        clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}>*/}
                                    {/*    Start*/}
                                    {/*</Button>*/}
                                </Col>
                            </Row>
                        </Col>

                        <Col className={"col-10 col-md-10 col-lg-4 learn-section"} onClick={() => (this.state.width > 1000) ? this.props.goToActivity(1) : null}
                             style={{clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)", backgroundColor: "#29405B",
                                 padding: 25, marginBottom: 20}}>
                            <Row>
                                <Col className={"col-2"} style={{padding: 0, overflow: "hidden", minWidth: 140}}>
                                    <img alt={"#2"} src={two} style={{height: "75%", marginTop: "25%", float: "right", maxHeight: 175}} />
                                </Col>
                                <Col style={{paddingLeft: 25, marginTop: 20}}>
                                    <h4>CIRCUIT CONSTRUCTION</h4>
                                    <p style={{paddingRight: 50, fontSize: "1.6vh"}}>
                                        Learn about circuit components to build one that can power your satellite.
                                        Demonstrate the flow of electrons in a circuit and how circuit components
                                        (batteries, resistors, wires, etc.) can affect their energy.
                                    </p>
                                    {/*<Button*/}
                                    {/*    href="/activity/metal-engraving"*/}
                                    {/*    variant="primary"*/}
                                    {/*    type="submit"*/}
                                    {/*    className={"btn green-button"}*/}
                                    {/*    style={{width: "45%",*/}
                                    {/*        clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}>*/}
                                    {/*    Start*/}
                                    {/*</Button>*/}
                                </Col>
                            </Row>
                        </Col>

                        <Col className={"col-10 col-md-10 col-lg-4 learn-section"} onClick={() => (this.state.width > 1000) ? this.props.goToActivity(2) : null}
                             style={{clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)", backgroundColor: "#29405B",
                                 padding: 25, marginLeft: "4%", marginBottom: 20}}>
                            <Row>
                                <Col className={"col-2"} style={{padding: 0, overflow: "hidden", minWidth: 140}}>
                                    <img alt={"#3"} src={three} style={{height: "75%", marginTop: "25%", float: "right", maxHeight: 200}} />
                                </Col>
                                <Col style={{paddingLeft: 25, marginTop: 20}}>
                                    <h4>TO THE STARS</h4>
                                    <p style={{paddingRight: 50, fontSize: "1.6vh"}}>
                                        Create a rocket with four different parts, and make sure
                                        to account for fuel, air resistance, and weight as all affect the rocket’s motion
                                        greatly! Send your rocket off into space with the
                                        telescope and answer questions that determine the fate of your journey!
                                    </p>
                                    {/*<Button*/}
                                    {/*    href="/activity/rocket-building"*/}
                                    {/*    variant="primary"*/}
                                    {/*    type="submit"*/}
                                    {/*    className={"btn green-button"}*/}
                                    {/*    style={{width: "45%",*/}
                                    {/*        clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}>*/}
                                    {/*    Start*/}
                                    {/*</Button>*/}
                                </Col>
                            </Row>
                        </Col>

                        <Col className={"col-10 col-md-10 col-lg-4 learn-section"} onClick={() => (this.state.width > 1000) ? this.props.goToActivity(3) : null}
                             style={{clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)", backgroundColor: "#29405B",
                                 padding: 25, marginBottom: 20}}>
                            <Row>
                                <Col className={"col-2"} style={{padding: 0, overflow: "hidden", minWidth: 140}}>
                                    <img alt={"#4"} src={four} style={{height: "75%", marginTop: "25%", float: "right", maxHeight: 175}} />
                                </Col>
                                <Col style={{paddingLeft: 25, marginTop: 20}}>
                                    <h4>STELLAR LIFE CYCLE</h4>
                                    <p style={{paddingRight: 50, fontSize: "1.6vh"}}>
                                        Learn more about what your telescope sees, and a star’s life cycle from creation
                                        to destruction. See how important certain variables such as mass and radius are
                                        in determining the next phase and the stellar event, i.e. a supernova.
                                    </p>
                                    {/*<Button*/}
                                    {/*    href="/activity/object-page"*/}
                                    {/*    variant="primary"*/}
                                    {/*    type="submit"*/}
                                    {/*    className={"btn green-button"}*/}
                                    {/*    style={{width: "45%",*/}
                                    {/*        clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}>*/}
                                    {/*    Start*/}
                                    {/*</Button>*/}
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                   {/*<Row className={"justify-content-center"}>*/}
                   {/*    <Col className="col-2" style={{color: "white"}}>*/}
                   {/*         <Row className="justify-content-center" style={{margin: "10px"}}>*/}
                   {/*             <div className={"number-block"} style={{width: "100px", height: "100px",*/}
                   {/*                 backgroundColor: "#29405B"}} onMouseOver={() => changeLearnSection(0)}*/}
                   {/*                  onClick={() => this.props.goToActivity(0)}>*/}
                   {/*                 <h1>01</h1>*/}
                   {/*             </div>*/}
                   {/*         </Row>*/}

                   {/*        <Row className="justify-content-center" style={{margin: "10px"}}>*/}
                   {/*            <div className={"number-block"} style={{width: "100px", height: "100px",*/}
                   {/*                backgroundColor: "#29405B"}} onMouseOver={() => changeLearnSection(1)}*/}
                   {/*                 onClick={() => this.props.goToActivity(1)}>*/}
                   {/*                <h1>02</h1>*/}
                   {/*            </div>*/}
                   {/*        </Row>*/}

                   {/*        <Row className="justify-content-center" style={{margin: "10px"}}>*/}
                   {/*            <div className={"number-block"} style={{width: "100px", height: "100px",*/}
                   {/*                backgroundColor: "#29405B"}} onMouseOver={() => changeLearnSection(2)}*/}
                   {/*                 onClick={() => this.props.goToActivity(2)}>*/}
                   {/*                <h1>03</h1>*/}
                   {/*            </div>*/}
                   {/*        </Row>*/}

                   {/*        <Row className="justify-content-center" style={{margin: "10px"}}>*/}
                   {/*            <div className={"number-block"} style={{width: "100px", height: "100px",*/}
                   {/*                backgroundColor: "#29405B"}} onMouseOver={() => changeLearnSection(3)}*/}
                   {/*                 onClick={() => this.props.goToActivity(3)}>*/}
                   {/*                <h1>04</h1>*/}
                   {/*            </div>*/}
                   {/*        </Row>*/}
                   {/*    </Col>*/}

                   {/*    <Col className="col-8" style={{width: "100px", backgroundColor: "#29405B", color: "white", marginBottom: "5%"}}>*/}
                   {/*        <Row style={{padding: 25}} className={"justify-content-center"}>*/}
                   {/*            <Col className={"col-8"}>*/}
                   {/*                <h1>{learnSections[this.state.learnSelection].Title}</h1>*/}

                   {/*                <p>{learnSections[this.state.learnSelection].Description}</p>*/}
                   {/*            </Col>*/}

                   {/*            /!*<Col style={{padding: "0"}}>*!/*/}
                   {/*            /!*    <img src={images[this.state.learnSelection]}*!/*/}
                   {/*            /!*        style={{objectFit: "cover", maxWidth: "100%",*!/*/}
                   {/*            /!*            display: "block", height: "auto"}} />*!/*/}
                   {/*            /!*</Col>*!/*/}
                   {/*        </Row>*/}
                   {/*    </Col>*/}
                   {/*</Row>*/}
               </Container>
            </>
        )
    }
}
export default LearnSection;
import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './Home.scss';
import one from "./1.png"
import two from "./2.png"
import three from "./3.png"
import four from "./4.png"

class LearnSection extends React.Component<any, any> {
    render() {
        return (
            <>
               <Container fluid style={{color: "white", textAlign: "left"}}>
                   <Row className={"justify-content-center"}>
                       <Col className={"col-10"}>
                           <p style={{color: "#002245", margin: "3%", fontWeight: "bold", fontSize: 50}}>What You'll Learn</p>

                       </Col>
                   </Row>

                    <Row className={"justify-content-center"}>
                        <Col className={"col-10 col-md-4"} style={{clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)", backgroundColor: "#29405B", padding: 25}}>
                            <Row>
                                <Col className={"col-3"} style={{overflow: "hidden"}}>
                                    <img alt={"#1"} src={one} />
                                </Col>
                                <Col>
                                    <h4>CIRCUIT CONSTRUCTION</h4>
                                    <p>Learn about circuit components to build one that can power your satellite. Demonstrate the flow of electrons in a circuit and how circuit components (capacitors, resistors, inductors, etc.) can affect their energy.</p>
                                </Col>
                            </Row>
                        </Col>

                        <Col className={"col-10 col-md-4"} style={{clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)", backgroundColor: "#29405B", padding: 25}}>
                            <Row>
                                <Col className={"col-3"} style={{overflow: "hidden"}}>
                                    <img alt={"#2"} src={two} />
                                </Col>
                                <Col>
                                    <h4>LASERS AND LENSES</h4>
                                    <p>
                                        Learn how lenses manipulate light to understand how your telescope sees distant stars. Experiment with the variables that affect the image formed when shining light through a lens, and begin controlling the type of image you see by manipulating these variables.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                   <Row className={"justify-content-center"} style={{marginTop: 50, marginBottom: 50}}>
                       <Col className={"col-10 col-md-4"} style={{clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)", backgroundColor: "#29405B", padding: 25, marginLeft: "4%"}}>
                           <Row>
                               <Col className={"col-3"} style={{overflow: "hidden"}}>
                                   <img alt={"#3"} src={three} />
                               </Col>
                               <Col>
                                   <h4>TO THE STARS</h4>
                                   <p>
                                       Create a rocket consisting of an engine, boosters, a body, and a cone. Make sure to account for fuel, air resistance, and weight as all affect the rocket’s motion greatly! Send your rocket off into space with the telescope as the payload and along the way, answer TEXT-based questions that determine the fate of your journey!
                                   </p>
                               </Col>
                           </Row>
                       </Col>

                       <Col className={"col-10 col-md-4"} style={{clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)", backgroundColor: "#29405B", padding: 25}}>
                           <Row>
                               <Col className={"col-3"} style={{overflow: "hidden"}}>
                                   <img alt={"#4"} src={four} />
                               </Col>
                               <Col>
                                   <h4>STELLAR LIFE CYCLE</h4>
                                   <p>
                                       Learn more about what your telescope sees, and a star’s life cycle from creation to destruction. See how important certain variables such as mass and radius are in determining the next phase and the stellar event, i.e. a supernova.
                                   </p>
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
import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import leftarrow from "../stellar-cycle/leftarrow.png";
import rightarrow from "../stellar-cycle/rightarrow.png";
import PartPropertySlider from "./PartPropertySlider";
import cone_1 from "./images/cones/cone_1.png"
import cone_2 from "./images/cones/cone_2.png"
import cone_3 from "./images/cones/cone_3.png"
import cone_4 from "./images/cones/cone_4.png"
import body_1 from "./images/bodys/body_1.png"
import body_2 from "./images/bodys/body_2.png"
import body_3 from "./images/bodys/body_3.png"
import body_4 from "./images/bodys/body_4.png"
import engine_1 from "./images/engines/engine_1.png"
import engine_2 from "./images/engines/engine_2.png"
import engine_3 from "./images/engines/engine_3.png"
import engine_4 from "./images/engines/engine_4.png"
import booster_1_left from "./images/boosters/booster_1_left.png"
import booster_2_left from "./images/boosters/booster_2_left.png"
import booster_3_left from "./images/boosters/booster_3_left.png"
import booster_4_left from "./images/boosters/booster_4_left.png"

class Sidebar extends React.Component<any, any> {
    render() {
        //Cone
        const maxConeAirResistance = 660000;
        const maxConeTotalMass = 3003;

        //Body
        const maxBodyFuelCapacity = 286677;
        const maxBodyTotalMass = 21630;

        //Booster
        const maxBoosterFuelCapacity = 48163;
        const maxBoosterAirResistance = 330000;
        const maxBoosterTotalMass = 4620;
        const maxBoosterThrust = 3690;

        //Engine
        const maxEngineTotalMass = 6120;
        const maxEngineThrust = 4300.1;

        return (
            <>
               <Container style={{backgroundColor: "#29405B", margin: 0, height: "100%", textAlign: "left",
                   clipPath: "polygon(0 0, 95% 0, 100% 100%, 0 100%)"}}>

                   <h4 style={{paddingLeft: 10}}>PARTS</h4>

                   <Row className={"justify-content-center"}>
                       <Col className={"col-11"} style={{backgroundColor: "#29405B", padding: 0}}>
                           <Container fluid style={{padding: 0}}>
                               <Row style={{backgroundColor: "#162F4C", padding: 5}}>
                                   <Col className="col-12" style={{margin: 0, textAlign: "left"}}>
                                       <p style={{marginBottom: 0, fontSize: 16, fontWeight: "bold"}}>Cone</p>
                                   </Col>
                               </Row>

                               {/*<Row className={"justify-content-center"} style={{backgroundColor: "#42949F", textAlign: "left", padding: 2}}>*/}
                               {/*    <Col className={"col-1"}>*/}
                               {/*        <img alt={"Arrow"} src={leftarrow} className={"part-image"} style={{height: 15}} onClick={() => this.props.changeCone(false)} />*/}
                               {/*    </Col>*/}

                               {/*    <Col className={"col-5 align-self-center"}>*/}
                               {/*        <p style={{marginBottom: 0, fontSize: 12, textAlign: "center", fontWeight: "bold"}}>{this.props.cone.title}</p>*/}
                               {/*    </Col>*/}

                               {/*    <Col className={"col-1"} style={{float: "left"}}>*/}
                               {/*        <img alt={"Arrow"} src={rightarrow} className={"part-image"} style={{height: 15}} onClick={() => this.props.changeCone(true)} />*/}
                               {/*    </Col>*/}
                               {/*</Row>*/}

                               <Row style={{margin: "auto", marginTop: 5}}>
                                   {this.props.coneIndex === 0 ?
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, border: "2px solid #3BD186", padding: 5}}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={cone_1} style={{height: "100%"}} />
                                       </Col>
                                    :
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, padding: 5}}
                                            onClick={() => this.props.changeCone(0)}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={cone_1} style={{height: "100%"}} />
                                       </Col>
                                   }

                                   {this.props.coneIndex === 1 ?
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, border: "2px solid #3BD186", padding: 5}}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={cone_2} style={{height: "100%"}} />
                                       </Col>
                                       :
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, padding: 5}}
                                            onClick={() => this.props.changeCone(1)}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={cone_2} style={{height: "100%"}} />
                                       </Col>
                                   }

                                   {this.props.coneIndex === 2 ?
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, border: "2px solid #3BD186", padding: 5}}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={cone_3} style={{height: "100%"}} />
                                       </Col>
                                       :
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, padding: 5}}
                                            onClick={() => this.props.changeCone(2)}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={cone_3} style={{height: "100%"}} />
                                       </Col>
                                   }

                                   {this.props.coneIndex === 3 ?
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, border: "2px solid #3BD186", padding: 5}}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={cone_4} style={{height: "100%"}} />
                                       </Col>
                                       :
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, padding: 5}}
                                            onClick={() => this.props.changeCone(3)}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={cone_4} style={{height: "100%"}} />
                                       </Col>
                                   }
                               </Row>

                               <Row style={{textAlign: "left", padding: 5}}>
                                   <Col>
                                       <Row style={{marginBottom: 3}} className={"align-items-center"}>
                                           <Col className={"col-4"} style={{paddingRight: 0, paddingLeft: 5}}>
                                               <p style={{marginBottom: 0, fontSize: 12}}>Air Resistance</p>
                                           </Col>
                                           <div style={{minWidth: 60, backgroundColor: "#162F4C"}}>
                                               <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{this.props.cone.airResistance} N</p>
                                           </div>
                                           <Col className={"col-5"} style={{paddingLeft: 5}}>
                                               <PartPropertySlider max={maxConeAirResistance} value={(this.props.cone.airResistance / maxConeAirResistance) * 100} />
                                           </Col>
                                       </Row>

                                       <Row style={{marginBottom: 3}} className={"align-items-center"}>
                                           <Col className={"col-4"} style={{paddingRight: 0, paddingLeft: 5}}>
                                               <p style={{marginBottom: 0, fontSize: 12}}>Total Mass</p>
                                           </Col>
                                           <div style={{minWidth: 60, backgroundColor: "#162F4C"}}>
                                               <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{this.props.cone.mass} kg</p>
                                           </div>
                                           <Col className={"col-5"} style={{paddingLeft: 5}}>
                                               <PartPropertySlider value={(this.props.cone.mass / maxConeTotalMass) * 100} />
                                           </Col>
                                       </Row>
                                   </Col>
                               </Row>
                           </Container>
                       </Col>
                   </Row>

                   <Row className={"justify-content-center"}>
                       <Col className={"col-11"} style={{backgroundColor: "#29405B", padding: 0}}>
                           <Container fluid style={{padding: 0}}>
                               <Row style={{backgroundColor: "#162F4C", padding: 5}}>
                                   <Col className="col-12" style={{margin: 0, textAlign: "left"}}>
                                       <p style={{marginBottom: 0, fontSize: 16, fontWeight: "bold"}}>Body</p>
                                   </Col>
                               </Row>

                               {/*<Row className={"justify-content-center"} style={{backgroundColor: "#42949F", textAlign: "left", padding: 2}}>*/}
                               {/*    <Col className={"col-1"}>*/}
                               {/*        <img alt={"Arrow"} src={leftarrow} className={"part-image"} style={{height: 15}} onClick={() => this.props.changeBody(false)} />*/}
                               {/*    </Col>*/}

                               {/*    <Col className={"col-5 align-self-center"}>*/}
                               {/*        <p style={{marginBottom: 0, fontSize: 12, textAlign: "center", fontWeight: "bold"}}>{this.props.body.title}</p>*/}
                               {/*    </Col>*/}

                               {/*    <Col className={"col-1"} style={{float: "left"}}>*/}
                               {/*        <img alt={"Arrow"}src={rightarrow} className={"part-image"} style={{height: 15}} onClick={() => this.props.changeBody(true)} />*/}
                               {/*    </Col>*/}
                               {/*</Row>*/}

                               <Row style={{margin: "auto", marginTop: 5}}>
                                   {this.props.bodyIndex === 0 ?
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, border: "2px solid #3BD186", padding: 5}}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={body_1} style={{height: "100%"}} />
                                       </Col>
                                       :
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, padding: 5}}
                                            onClick={() => this.props.changeBody(0)}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={body_1} style={{height: "100%"}} />
                                       </Col>
                                   }

                                   {this.props.bodyIndex === 1 ?
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, border: "2px solid #3BD186", padding: 5}}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={body_2} style={{height: "100%"}} />
                                       </Col>
                                       :
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, padding: 5}}
                                            onClick={() => this.props.changeBody(1)}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={body_2} style={{height: "100%"}} />
                                       </Col>
                                   }

                                   {this.props.bodyIndex === 2 ?
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, border: "2px solid #3BD186", padding: 5}}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={body_3} style={{height: "100%"}} />
                                       </Col>
                                       :
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, padding: 5}}
                                            onClick={() => this.props.changeBody(2)}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={body_3} style={{height: "100%"}} />
                                       </Col>
                                   }

                                   {this.props.bodyIndex === 3 ?
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, border: "2px solid #3BD186", padding: 5}}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={body_4} style={{height: "100%"}} />
                                       </Col>
                                       :
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, padding: 5}}
                                            onClick={() => this.props.changeBody(3)}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={body_4} style={{height: "100%"}} />
                                       </Col>
                                   }
                               </Row>

                               <Row style={{textAlign: "left", padding: 5}}>
                                   <Col>
                                       <Row style={{marginBottom: 3}} className={"align-items-center"}>
                                           <Col className={"col-4"} style={{paddingRight: 0, paddingLeft: 5}}>
                                               <p style={{marginBottom: 0, fontSize: 12}}>Fuel Capacity</p>
                                           </Col>
                                           <div style={{minWidth: 60, backgroundColor: "#162F4C"}}>
                                               <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{this.props.body.fuelCapacity} kg</p>
                                           </div>
                                           <Col className={"col-5"} style={{paddingLeft: 5}}>
                                               <PartPropertySlider value={(this.props.body.fuelCapacity / maxBodyFuelCapacity) * 100} />
                                           </Col>
                                       </Row>

                                       <Row style={{marginBottom: 3}} className={"align-items-center"}>
                                           <Col className={"col-4"} style={{paddingRight: 0, paddingLeft: 5}}>
                                               <p style={{marginBottom: 0, fontSize: 12}}>Total Mass</p>
                                           </Col>
                                           <div style={{minWidth: 60, backgroundColor: "#162F4C"}}>
                                               <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{this.props.body.mass} kg</p>
                                           </div>
                                           <Col className={"col-5"} style={{paddingLeft: 5}}>
                                               <PartPropertySlider value={(this.props.body.mass / maxBodyTotalMass) * 100} />
                                           </Col>
                                       </Row>
                                   </Col>
                               </Row>
                           </Container>
                       </Col>
                   </Row>

                   <Row className={"justify-content-center"}>
                       <Col className={"col-11"} style={{backgroundColor: "#29405B", padding: 0}}>
                           <Container fluid style={{padding: 0}}>
                               <Row style={{backgroundColor: "#162F4C", padding: 5}}>
                                   <Col className="col-12" style={{margin: 0, textAlign: "left"}}>
                                       <p style={{marginBottom: 0, fontSize: 16, fontWeight: "bold"}}>Boosters</p>
                                   </Col>
                               </Row>

                               {/*<Row className={"justify-content-center"} style={{backgroundColor: "#42949F", textAlign: "left", padding: 2}}>*/}
                               {/*    <Col className={"col-1"}>*/}
                               {/*        <img alt={"Arrow"} src={leftarrow} className={"part-image"} style={{height: 15}} onClick={() => this.props.changeBooster(false)} />*/}
                               {/*    </Col>*/}

                               {/*    <Col className={"col-5  align-self-center"}>*/}
                               {/*        <p style={{marginBottom: 0, fontSize: 12, textAlign: "center", fontWeight: "bold"}}>{this.props.booster.title}</p>*/}
                               {/*    </Col>*/}

                               {/*    <Col className={"col-1"} style={{float: "left"}}>*/}
                               {/*        <img alt={"Arrow"} src={rightarrow} className={"part-image"} style={{height: 15}} onClick={() => this.props.changeBooster(true)} />*/}
                               {/*    </Col>*/}
                               {/*</Row>*/}

                               <Row style={{margin: "auto", marginTop: 5}}>
                                   {this.props.boosterIndex === 0 ?
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, border: "2px solid #3BD186", padding: 5}}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={booster_1_left} style={{height: "100%"}} />
                                       </Col>
                                       :
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, padding: 5}}
                                            onClick={() => this.props.changeBooster(0)}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={booster_1_left} style={{height: "100%"}} />
                                       </Col>
                                   }

                                   {this.props.boosterIndex === 1 ?
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, border: "2px solid #3BD186", padding: 5}}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={booster_2_left} style={{height: "100%"}} />
                                       </Col>
                                       :
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, padding: 5}}
                                            onClick={() => this.props.changeBooster(1)}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={booster_2_left} style={{height: "100%"}} />
                                       </Col>
                                   }

                                   {this.props.boosterIndex === 2 ?
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, border: "2px solid #3BD186", padding: 5}}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={booster_3_left} style={{height: "100%"}} />
                                       </Col>
                                       :
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, padding: 5}}
                                            onClick={() => this.props.changeBooster(2)}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={booster_3_left} style={{height: "100%"}} />
                                       </Col>
                                   }

                                   {this.props.boosterIndex === 3 ?
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, border: "2px solid #3BD186", padding: 5}}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={booster_4_left} style={{height: "100%"}} />
                                       </Col>
                                       :
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, padding: 5}}
                                            onClick={() => this.props.changeBooster(3)}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={booster_4_left} style={{height: "100%"}} />
                                       </Col>
                                   }
                               </Row>

                               <Row style={{textAlign: "left", padding: 5}}>
                                   <Col>
                                       <Row style={{marginBottom: 3}} className={"align-items-center"}>
                                           <Col className={"col-4"} style={{paddingRight: 0, paddingLeft: 5}}>
                                               <p style={{marginBottom: 0, fontSize: 12}}>Fuel Capacity</p>
                                           </Col>
                                           <div style={{minWidth: 60, backgroundColor: "#162F4C"}}>
                                               <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{this.props.booster.fuelCapacity} kg</p>
                                           </div>
                                           <Col className={"col-5"} style={{paddingLeft: 5}}>
                                               <PartPropertySlider value={(this.props.booster.fuelCapacity / maxBoosterFuelCapacity) * 100} />
                                           </Col>
                                       </Row>

                                       <Row style={{marginBottom: 3}} className={"align-items-center"}>
                                           <Col className={"col-4"} style={{paddingRight: 0, paddingLeft: 5}}>
                                               <p style={{marginBottom: 0, fontSize: 12}}>Air Resistance</p>
                                           </Col>
                                           <div style={{minWidth: 60, backgroundColor: "#162F4C"}}>
                                               <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{this.props.booster.airResistance} N</p>
                                           </div>
                                           <Col className={"col-5"} style={{paddingLeft: 5}}>
                                               <PartPropertySlider value={(this.props.booster.airResistance / maxBoosterAirResistance) * 100} />
                                           </Col>
                                       </Row>

                                       <Row style={{marginBottom: 3}} className={"align-items-center"}>
                                           <Col className={"col-4"} style={{paddingRight: 0, paddingLeft: 5}}>
                                               <p style={{marginBottom: 0, fontSize: 12}}>Total Mass</p>
                                           </Col>
                                           <div style={{minWidth: 60, backgroundColor: "#162F4C"}}>
                                               <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{this.props.booster.mass} kg</p>
                                           </div>
                                           <Col className={"col-5"} style={{paddingLeft: 5}}>
                                               <PartPropertySlider value={(this.props.booster.mass / maxBoosterTotalMass) * 100} />
                                           </Col>
                                       </Row>

                                       <Row style={{marginBottom: 3}} className={"align-items-center"}>
                                           <Col className={"col-4"} style={{paddingRight: 0, paddingLeft: 5}}>
                                               <p style={{marginBottom: 0, fontSize: 12}}>Thrust</p>
                                           </Col>
                                           <div style={{minWidth: 60, backgroundColor: "#162F4C"}}>
                                               <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{this.props.booster.thrust} kN</p>
                                           </div>
                                           <Col className={"col-5"} style={{paddingLeft: 5}}>
                                               <PartPropertySlider value={(this.props.booster.thrust / maxBoosterThrust) * 100} />
                                           </Col>
                                       </Row>
                                   </Col>
                               </Row>
                           </Container>
                       </Col>
                   </Row>

                   <Row className={"justify-content-center"}>
                       <Col className={"col-11"} style={{backgroundColor: "#29405B", padding: 0}}>
                           <Container fluid style={{padding: 0}}>
                               <Row style={{backgroundColor: "#162F4C", padding: 5}}>
                                   <Col className="col-12" style={{margin: 0, textAlign: "left"}}>
                                       <p style={{marginBottom: 0, fontSize: 16, fontWeight: "bold"}}>Engine</p>
                                   </Col>
                               </Row>

                               {/*<Row className={"justify-content-center"} style={{backgroundColor: "#42949F", textAlign: "left", padding: 2}}>*/}
                               {/*    <Col className={"col-1"}>*/}
                               {/*        <img alt={"Arrow"} src={leftarrow} className={"part-image"} style={{height: 15}} onClick={() => this.props.changeEngine(false)} />*/}
                               {/*    </Col>*/}

                               {/*    <Col className={"col-5  align-self-center"}>*/}
                               {/*        <p style={{marginBottom: 0, fontSize: 12, textAlign: "center", fontWeight: "bold"}}>{this.props.engine.title}</p>*/}
                               {/*    </Col>*/}

                               {/*    <Col className={"col-1"} style={{float: "left"}}>*/}
                               {/*        <img alt={"Arrow"} src={rightarrow} className={"part-image"} style={{height: 15}} onClick={() => this.props.changeEngine(true)} />*/}
                               {/*    </Col>*/}
                               {/*</Row>*/}

                               <Row style={{margin: "auto", marginTop: 5}}>
                                   {this.props.engineIndex === 0 ?
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, border: "2px solid #3BD186", padding: 5}}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={engine_1} style={{height: "100%"}} />
                                       </Col>
                                       :
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, padding: 5}}
                                            onClick={() => this.props.changeEngine(0)}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={engine_1} style={{height: "100%"}} />
                                       </Col>
                                   }

                                   {this.props.engineIndex === 1 ?
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, border: "2px solid #3BD186", padding: 5}}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={engine_2} style={{height: "100%"}} />
                                       </Col>
                                       :
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, padding: 5}}
                                            onClick={() => this.props.changeEngine(1)}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={engine_2} style={{height: "100%"}} />
                                       </Col>
                                   }

                                   {this.props.engineIndex === 2 ?
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, border: "2px solid #3BD186", padding: 5}}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={engine_3} style={{height: "100%"}} />
                                       </Col>
                                       :
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, padding: 5}}
                                            onClick={() => this.props.changeEngine(2)}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={engine_3} style={{height: "100%"}} />
                                       </Col>
                                   }

                                   {this.props.engineIndex === 3 ?
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, border: "2px solid #3BD186", padding: 5}}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={engine_4} style={{height: "100%"}} />
                                       </Col>
                                       :
                                       <Col className={"col-sm-5 col-md-4 col-lg-2"} style={{margin: 3, flex: "0 0 60px", maxWidth: "60px",
                                           backgroundColor: "#42949F", height: 60, borderRadius: 3, padding: 5}}
                                            onClick={() => this.props.changeEngine(3)}>
                                           <img className={"part-image"} alt={"Rocket Piece"} src={engine_4} style={{height: "100%"}} />
                                       </Col>
                                   }
                               </Row>

                               <Row style={{textAlign: "left", padding: 5}}>
                                   <Col>
                                       <Row style={{marginBottom: 3}} className={"align-items-center"}>
                                           <Col className={"col-4"} style={{paddingRight: 0, paddingLeft: 5}}>
                                               <p style={{marginBottom: 0, fontSize: 12}}>Total Mass</p>
                                           </Col>
                                           <div style={{minWidth: 60, backgroundColor: "#162F4C"}}>
                                               <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{this.props.engine.mass} kg</p>
                                           </div>
                                           <Col className={"col-5"} style={{paddingLeft: 5}}>
                                               <PartPropertySlider value={(this.props.engine.mass / maxEngineTotalMass) * 100} />
                                           </Col>
                                       </Row>

                                       <Row style={{marginBottom: 3}} className={"align-items-center"}>
                                           <Col className={"col-4"} style={{paddingRight: 0, paddingLeft: 5}}>
                                               <p style={{marginBottom: 0, fontSize: 12}}>Thrust</p>
                                           </Col>
                                           <div style={{minWidth: 60, backgroundColor: "#162F4C"}}>
                                               <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{this.props.engine.thrust} kN</p>
                                           </div>
                                           <Col className={"col-5"} style={{paddingLeft: 5}}>
                                               <PartPropertySlider value={(this.props.engine.thrust / maxEngineThrust) * 100} />
                                           </Col>
                                       </Row>
                                   </Col>
                               </Row>
                           </Container>
                       </Col>
                   </Row>
               </Container>

            </>
        )
    }
}
export default Sidebar;
import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import leftarrow from "../stellar-cycle/leftarrow.png";
import rightarrow from "../stellar-cycle/rightarrow.png";
import PartPropertySlider from "./PartPropertySlider";

class Sidebar extends React.Component<any, any> {
    render() {
        return (
            <>
               <Container style={{backgroundColor: "#29405B", margin: 0, height: "100%", textAlign: "left",
                   clipPath: "polygon(0 0, 90% 0, 100% 100%, 0 100%)"}}>

                   <h4 style={{paddingLeft: 10}}>PARTS</h4>

                   <Row className={"justify-content-center"}>
                       <Col className={"col-11"} style={{backgroundColor: "#29405B", padding: 0}}>
                           <Container fluid style={{padding: 0}}>
                               <Row style={{backgroundColor: "#162F4C", padding: 5}}>
                                   <Col className="col-12" style={{margin: 0, textAlign: "left"}}>
                                       <p style={{marginBottom: 0, fontSize: 16, fontWeight: "bold"}}>Cone</p>
                                   </Col>
                               </Row>

                               <Row className={"justify-content-center"} style={{backgroundColor: "#42949F", textAlign: "left", padding: 2}}>
                                   <Col className={"col-1"}>
                                       <img src={leftarrow} className={"arrow"} style={{height: 15}} onClick={() => this.props.changeCone(false)} />
                                   </Col>

                                   <Col className={"col-5"}>
                                       <p style={{marginBottom: 0, fontSize: 12, textAlign: "center", fontWeight: "bold"}}>{this.props.cone.title}</p>
                                   </Col>

                                   <Col className={"col-1"} style={{float: "left"}}>
                                       <img src={rightarrow} className={"arrow"} style={{height: 15}} onClick={() => this.props.changeCone(true)} />
                                   </Col>
                               </Row>

                               <Row style={{textAlign: "left", padding: 5}}>
                                   <Col>
                                      <Row style={{marginBottom: 3}} className={"align-items-center"}>
                                           <Col className={"col-5"}>
                                               <p style={{marginBottom: 0, fontSize: 12}}>Fuel Capacity</p>
                                           </Col>
                                           <div style={{minWidth: 20, backgroundColor: "#162F4C"}}>
                                               <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{this.props.cone.fuelCapacity}</p>
                                           </div>
                                           <Col  className={"col-5"}>
                                               <PartPropertySlider value={this.props.cone.fuelCapacity} />
                                           </Col>
                                       </Row>

                                       <Row style={{marginBottom: 3}} className={"align-items-center"}>
                                           <Col className={"col-5"}>
                                               <p style={{marginBottom: 0, fontSize: 12}}>Air Resistance</p>
                                           </Col>
                                           <div style={{minWidth: 20, backgroundColor: "#162F4C"}}>
                                               <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{this.props.cone.airResistance}</p>
                                           </div>
                                           <Col className={"col-5"}>
                                               <PartPropertySlider value={this.props.cone.airResistance} />
                                           </Col>
                                       </Row>

                                       <Row style={{marginBottom: 3}} className={"align-items-center"}>
                                           <Col className={"col-5"}>
                                               <p style={{marginBottom: 0, fontSize: 12}}>Total Mass</p>
                                           </Col>
                                           <div style={{minWidth: 20, backgroundColor: "#162F4C"}}>
                                               <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{this.props.cone.mass}</p>
                                           </div>
                                           <Col  className={"col-5"}>
                                               <PartPropertySlider value={this.props.cone.mass} />
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

                               <Row className={"justify-content-center"} style={{backgroundColor: "#42949F", textAlign: "left", padding: 2}}>
                                   <Col className={"col-1"}>
                                       <img src={leftarrow} className={"arrow"} style={{height: 15}} onClick={() => this.props.changeBody(false)} />
                                   </Col>

                                   <Col className={"col-5"}>
                                       <p style={{marginBottom: 0, fontSize: 12, textAlign: "center", fontWeight: "bold"}}>{this.props.body.title}</p>
                                   </Col>

                                   <Col className={"col-1"} style={{float: "left"}}>
                                       <img src={rightarrow} className={"arrow"} style={{height: 15}} onClick={() => this.props.changeBody(true)} />
                                   </Col>
                               </Row>

                               <Row style={{textAlign: "left", padding: 5}}>
                                   <Col>
                                       <Row style={{marginBottom: 3}} className={"align-items-center"}>
                                           <Col className={"col-5"}>
                                               <p style={{marginBottom: 0, fontSize: 12}}>Fuel Capacity</p>
                                           </Col>
                                           <div style={{minWidth: 20, backgroundColor: "#162F4C"}}>
                                               <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{this.props.body.fuelCapacity}</p>
                                           </div>
                                           <Col  className={"col-5"}>
                                               <PartPropertySlider value={this.props.body.fuelCapacity} />
                                           </Col>
                                       </Row>

                                       <Row style={{marginBottom: 3}} className={"align-items-center"}>
                                           <Col className={"col-5"}>
                                               <p style={{marginBottom: 0, fontSize: 12}}>Air Resistance</p>
                                           </Col>
                                           <div style={{minWidth: 20, backgroundColor: "#162F4C"}}>
                                               <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{this.props.body.airResistance}</p>
                                           </div>
                                           <Col className={"col-5"}>
                                               <PartPropertySlider value={this.props.body.airResistance} />
                                           </Col>
                                       </Row>

                                       <Row style={{marginBottom: 3}} className={"align-items-center"}>
                                           <Col className={"col-5"}>
                                               <p style={{marginBottom: 0, fontSize: 12}}>Total Mass</p>
                                           </Col>
                                           <div style={{minWidth: 20, backgroundColor: "#162F4C"}}>
                                               <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{this.props.body.mass}</p>
                                           </div>
                                           <Col  className={"col-5"}>
                                               <PartPropertySlider value={this.props.body.mass} />
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

                               <Row className={"justify-content-center"} style={{backgroundColor: "#42949F", textAlign: "left", padding: 2}}>
                                   <Col className={"col-1"}>
                                       <img src={leftarrow} className={"arrow"} style={{height: 15}} onClick={() => this.props.changeBooster(false)} />
                                   </Col>

                                   <Col className={"col-5"}>
                                       <p style={{marginBottom: 0, fontSize: 12, textAlign: "center", fontWeight: "bold"}}>{this.props.booster.title}</p>
                                   </Col>

                                   <Col className={"col-1"} style={{float: "left"}}>
                                       <img src={rightarrow} className={"arrow"} style={{height: 15}} onClick={() => this.props.changeBooster(true)} />
                                   </Col>
                               </Row>

                               <Row style={{textAlign: "left", padding: 5}}>
                                   <Col>
                                       <Row style={{marginBottom: 3}} className={"align-items-center"}>
                                           <Col className={"col-5"}>
                                               <p style={{marginBottom: 0, fontSize: 12}}>Fuel Capacity</p>
                                           </Col>
                                           <div style={{minWidth: 20, backgroundColor: "#162F4C"}}>
                                               <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{this.props.booster.fuelCapacity}</p>
                                           </div>
                                           <Col  className={"col-5"}>
                                               <PartPropertySlider value={this.props.booster.fuelCapacity} />
                                           </Col>
                                       </Row>

                                       <Row style={{marginBottom: 3}} className={"align-items-center"}>
                                           <Col className={"col-5"}>
                                               <p style={{marginBottom: 0, fontSize: 12}}>Air Resistance</p>
                                           </Col>
                                           <div style={{minWidth: 20, backgroundColor: "#162F4C"}}>
                                               <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{this.props.booster.airResistance}</p>
                                           </div>
                                           <Col className={"col-5"}>
                                               <PartPropertySlider value={this.props.booster.airResistance} />
                                           </Col>
                                       </Row>

                                       <Row style={{marginBottom: 3}} className={"align-items-center"}>
                                           <Col className={"col-5"}>
                                               <p style={{marginBottom: 0, fontSize: 12}}>Total Mass</p>
                                           </Col>
                                           <div style={{minWidth: 20, backgroundColor: "#162F4C"}}>
                                               <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{this.props.booster.mass}</p>
                                           </div>
                                           <Col  className={"col-5"}>
                                               <PartPropertySlider value={this.props.booster.mass} />
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

                               <Row className={"justify-content-center"} style={{backgroundColor: "#42949F", textAlign: "left", padding: 2}}>
                                   <Col className={"col-1"}>
                                       <img src={leftarrow} className={"arrow"} style={{height: 15}} onClick={() => this.props.changeEngine(false)} />
                                   </Col>

                                   <Col className={"col-5"}>
                                       <p style={{marginBottom: 0, fontSize: 12, textAlign: "center", fontWeight: "bold"}}>{this.props.engine.title}</p>
                                   </Col>

                                   <Col className={"col-1"} style={{float: "left"}}>
                                       <img src={rightarrow} className={"arrow"} style={{height: 15}} onClick={() => this.props.changeEngine(true)} />
                                   </Col>
                               </Row>

                               <Row style={{textAlign: "left", padding: 5}}>
                                   <Col>
                                       <Row style={{marginBottom: 3}} className={"align-items-center"}>
                                           <Col className={"col-5"}>
                                               <p style={{marginBottom: 0, fontSize: 12}}>Fuel Capacity</p>
                                           </Col>
                                           <div style={{minWidth: 20, backgroundColor: "#162F4C"}}>
                                               <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{this.props.engine.fuelCapacity}</p>
                                           </div>
                                           <Col  className={"col-5"}>
                                               <PartPropertySlider value={this.props.engine.fuelCapacity} />
                                           </Col>
                                       </Row>

                                       <Row style={{marginBottom: 3}} className={"align-items-center"}>
                                           <Col className={"col-5"}>
                                               <p style={{marginBottom: 0, fontSize: 12}}>Air Resistance</p>
                                           </Col>
                                           <div style={{minWidth: 20, backgroundColor: "#162F4C"}}>
                                               <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{this.props.engine.airResistance}</p>
                                           </div>
                                           <Col className={"col-5"}>
                                               <PartPropertySlider value={this.props.engine.airResistance} />
                                           </Col>
                                       </Row>

                                       <Row style={{marginBottom: 3}} className={"align-items-center"}>
                                           <Col className={"col-5"}>
                                               <p style={{marginBottom: 0, fontSize: 12}}>Total Mass</p>
                                           </Col>
                                           <div style={{minWidth: 20, backgroundColor: "#162F4C"}}>
                                               <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{this.props.engine.mass}</p>
                                           </div>
                                           <Col  className={"col-5"}>
                                               <PartPropertySlider value={this.props.engine.mass} />
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
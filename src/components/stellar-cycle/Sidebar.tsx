import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import {
    Typography,
} from "@material-ui/core";
import "./StellarCycle.scss";
import PropertiesSlider from "./PropertiesSlider";
import MassClassRadio from "./MassClassRadio";

class Sidebar extends React.Component<any, any> {
    render() {
        let massClassString = "Average"
        let max = 100
        if(this.props.massClass === 1) {
            // max = 120
            massClassString = "Massive"
        }

        return (
            <>
               <Container style={{backgroundColor: "#29405B", margin: 0, padding: 0, height: "100%",
                   clipPath: "polygon(0 0, 90% 0, 100% 100%, 0 100%)", paddingRight: 25}}>
                   <h3 style={{paddingTop: "15px", paddingBottom: "30px"}}>Attributes</h3>

                   <Row style={{margin: "5px"}}>
                       <Col>
                           <MassClassRadio value={massClassString}
                                                 changeValue={this.props.handleMassChange} />
                       </Col>
                   </Row>

                   {this.props.currentObject.title !== "Nebula" ?
                       <>
                           {this.props.showSliders &&
                            <>
                               <Row style={{marginLeft: 15, marginRight: 15, marginTop: "10%", marginBottom: 15}}>
                                   <Col>
                                       <Typography id="temperature-slider" gutterBottom style={{float: "left", fontWeight: "bold", fontSize: "20px"}}>
                                           Temperature
                                       </Typography>
                                       <PropertiesSlider value={this.props.temperature} changeValue={this.props.changeTemperature}
                                                         aria-labelledby="temperature-slider" max={max} />
                                   </Col>
                               </Row>

                               <Row style={{margin: 15, marginBottom: 5}}>
                                   <Col>
                                       <Typography id="size-slider" gutterBottom style={{float: "left", fontWeight: "bold", fontSize: "20px"}}>
                                           Size
                                       </Typography>
                                       <PropertiesSlider value={this.props.size} changeValue={this.props.changeSize}
                                                         aria-labelledby="size-slider" max={max} />
                                   </Col>
                               </Row>

                                {/*<Row className={"justify-content-center"}>*/}
                                {/*    <Col className={"col-10"}>*/}
                                {/*        <p style={{textAlign: "left", fontWeight: "bold", fontSize: 10}}>*/}
                                {/*            */}
                                {/*        </p>*/}
                                {/*    </Col>*/}
                                {/*</Row>*/}
                             </>
                           }

                           <Row style={{margin: 15}}>
                               <Col onMouseUp={this.props.showPropertySliders}>
                                   <Typography id="mass-slider" gutterBottom style={{float: "left", fontWeight: "bold", fontSize: "20px"}}>
                                       Mass
                                   </Typography>
                                   <PropertiesSlider value={this.props.mass}
                                                     changeValue={this.props.changeMass}
                                                     aria-labelledby="mass-slider" max={max} />
                               </Col>
                           </Row>
                       </>
                       :
                       <div />
                       }

                   {/*<hr style={{backgroundColor: "white", height: "4px", margin: "30px 10px 30px 10px", borderRadius: "30px"}}/>*/}

                   {/*<h3>Description</h3>*/}
                   {/*<Row style={{margin: "5px"}}>*/}
                   {/*    <Col>*/}
                   {/*        <p>{this.props.description}</p>*/}
                   {/*    </Col>*/}
                   {/*</Row>*/}
               </Container>

            </>
        )
    }
}
export default Sidebar;
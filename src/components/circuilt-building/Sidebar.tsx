import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import {OneGridContainer} from "./grid/OneGridContainer";
import Button from "react-bootstrap/Button";
import {setComponentsList} from "./grid/Functionality";
import inductor from './grid/components/images/inductor.png'
import capacitor from './grid/components/images/capacitor.png'

class Sidebar extends React.Component<any, any> {
    render() {
        return (
            <>
               <Container style={{margin: "0", padding: "0", height: "100%"}}>
                   <div style={{position: "absolute", width: "100%", height: "100%", backgroundColor: "#29405B",
                       clipPath: "polygon(0 0,80% 0, 100% 100%, 0 100%)"}} />

                   <h3 style={{paddingTop: "15px"}}>Modules</h3>
                   <Row>
                       <Col>
                           <OneGridContainer componentType={"wire"} paddingRight={"15%"} extraRightVal={5} />
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           <OneGridContainer componentType={"battery"} paddingRight={"12%"} extraRightVal={7} />
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           <OneGridContainer componentType={"resistor"} paddingRight={"9%"} extraRightVal={9} />
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           <OneGridContainer componentType={"switch"} paddingRight={"6%"} extraRightVal={11} />
                       </Col>
                   </Row>


                   {this.props.currentLevel > 1 ?
                       <Row>
                            <Col>
                                <OneGridContainer componentType={"inductor"} paddingRight={"3%"} extraRightVal={13} />
                            </Col>
                       </Row>
                   :
                       <Row className={"justify-content-center"} style={{margin: 5}}>
                           <Col className="col-6" style={{backgroundColor: "white", filter: "brightness(50%)"}}>
                                <img src={inductor} style={{pointerEvents: "none", filter: "blur(5px)"}} />
                           </Col>
                       </Row>
                   }

                   {this.props.currentLevel > 2 ?
                       <Row>
                           <Col>
                               <OneGridContainer componentType={"capacitor"} paddingRight={"0%"} extraRightVal={15} />
                           </Col>
                        </Row>
                   :
                       <Row className={"justify-content-center"} style={{margin: 5, marginTop: 10}}>
                           <Col className="col-6" style={{backgroundColor: "white", filter: "brightness(50%)"}}>
                               <img src={capacitor} style={{pointerEvents: "none", filter: "blur(5px)"}} />
                           </Col>
                       </Row>
                   }

                    <Row className={"justify-content-center"} style={{margin: 0}}>
                        <Col className={"col-7"}>
                            <Button style={{backgroundColor: "#F8EDDD", width: "150px", color: "black",
                                fontSize: "18px", clipPath: "polygon(0 0, 90% 0, 100% 100%, 0 100%)", float: "left"}}
                                    onClick={() => setComponentsList([])}>Reset</Button>
                        </Col>
                    </Row>
               </Container>

            </>
        )
    }
}
export default Sidebar;
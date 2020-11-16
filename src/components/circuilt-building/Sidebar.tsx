import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import {OneGridContainer} from "./grid/OneGridContainer";
import Button from "react-bootstrap/Button";
import {setComponentsList} from "./grid/Functionality";
import inductor from './grid/components/images/inductor.png'
import capacitor from './grid/components/images/capacitor.png'
import {SidebarModule} from "../metal-engraving/SidebarModule";

class Sidebar extends React.Component<any, any> {
    render() {
        return (
            <>
               <Container style={{margin: "0", padding: "0", height: "100%"}}>
                   <div style={{position: "absolute", width: "100%", height: "100%", backgroundColor: "#29405B",
                       clipPath: "polygon(0 0,75% 0, 100% 100%, 0 100%)"}} />

                   <Row>
                       <Col className={"col-10"}>
                           <h3 style={{paddingTop: "15px"}}>Modules</h3>
                       </Col>
                   </Row>

                   <Row className={"justify-content-start"} style={{margin: 10}}>
                       <OneGridContainer flex={"0 0 75%"} maxWidth={"75%"} componentType={"wire"}/>
                   </Row>

                   <Row className={"justify-content-start"} style={{margin: 10}}>
                       <OneGridContainer flex={"0 0 78%"} maxWidth={"78%"} componentType={"battery"}/>
                   </Row>

                   <Row className={"justify-content-start"} style={{margin: 10}}>
                       <OneGridContainer flex={"0 0 81%"} maxWidth={"81%"} componentType={"resistor"}/>
                   </Row>

                   <Row className={"justify-content-start"} style={{margin: 10}}>
                       <OneGridContainer flex={"0 0 84%"} maxWidth={"84%"} componentType={"switch"} />
                   </Row>


                   {/*{this.props.currentLevel > 1 ?*/}
                   {/*    <Row>*/}
                   {/*         <Col>*/}
                   {/*             <OneGridContainer componentType={"inductor"} paddingRight={"3%"} extraRightVal={13} />*/}
                   {/*         </Col>*/}
                   {/*    </Row>*/}
                   {/*:*/}
                   {/*    <Row className={"justify-content-center"} style={{margin: 5}}>*/}
                   {/*        <div style={{width: 200, backgroundColor: "white", filter: "brightness(50%)",*/}
                   {/*            clipPath: "polygon(0 0, 95% 0, 100% 100%, 0 100%)"}}>*/}
                   {/*             <img alt={"Inductor"} src={inductor} style={{pointerEvents: "none", filter: "blur(5px)"}} />*/}
                   {/*        </div>*/}
                   {/*    </Row>*/}
                   {/*}*/}

                   {/*{this.props.currentLevel > 2 ?*/}
                   {/*    <Row>*/}
                   {/*        <Col>*/}
                   {/*            <OneGridContainer componentType={"capacitor"} paddingRight={"0%"} extraRightVal={15} />*/}
                   {/*        </Col>*/}
                   {/*     </Row>*/}
                   {/*:*/}
                   {/*    <Row className={"justify-content-center"} style={{margin: 5, marginTop: 10}}>*/}
                   {/*        <div style={{width: 200, backgroundColor: "white", filter: "brightness(50%)",*/}
                   {/*            clipPath: "polygon(0 0, 95% 0, 100% 100%, 0 100%)"}}>*/}
                   {/*            <img alt={"Capacitor"} src={capacitor} style={{pointerEvents: "none", filter: "blur(5px)"}} />*/}
                   {/*        </div>*/}
                   {/*    </Row>*/}
                   {/*}*/}

                   <Row className={"justify-content-start"} style={{margin: 10, marginTop: "15%"}}>
                       <Col className="col-11" style={{flex: "0 0 87%", maxWidth: "87%"}}>
                           <Button style={{width: "100%", clipPath: "polygon(0 0, 98% 0, 100% 100%, 0 100%)"}}
                                   className={"white-button"}
                                   onClick={() => setComponentsList([])}>Reset</Button>
                       </Col>
                   </Row>
               </Container>

            </>
        )
    }
}
export default Sidebar;
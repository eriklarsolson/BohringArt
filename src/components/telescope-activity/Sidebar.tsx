import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import {OneGridContainer} from "./grid/OneGridContainer";
import Button from "react-bootstrap/Button";
import {setComponentsList} from "./grid/Functionality";

class Sidebar extends React.Component {
    render() {
        return (
            <>
                <Container style={{backgroundColor: "#29405B", margin: 0, height: "100%",
                    clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%)"}}>
                   <h3 style={{paddingTop: "15px"}}>Modules</h3>

                   <Row>
                       <Col>
                           <OneGridContainer componentType={"viewpoint"}  paddingRight={"15%"} extraRightVal={5} />
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           <OneGridContainer componentType={"convex"} paddingRight={"12%"} extraRightVal={7} />
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           <OneGridContainer componentType={"concave"} paddingRight={"9%"} extraRightVal={9} />
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           <OneGridContainer componentType={"flatmirror"} paddingRight={"6%"} extraRightVal={11} />
                       </Col>
                   </Row>

                   <Row className={"justify-content-center"}>
                       <Col className={"col-9"}>
                           <Button style={{width: "100%", marginTop: 25}}
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
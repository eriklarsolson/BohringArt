import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import {OneGridContainer} from "./grid/OneGridContainer";
import Button from "react-bootstrap/Button";
import {setComponentsList} from "./grid/Functionality";

class Sidebar extends React.Component {
    render() {
        return (
            <>
               <Container style={{backgroundColor: "#29405B", margin: "0", padding: "0", height: "100%"}}>
                   <h3 style={{paddingTop: "15px"}}>Modules</h3>

                   <Row>
                       <Col>
                           <OneGridContainer componentType={"viewpoint"} />
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           <OneGridContainer componentType={"convex"} />
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           <OneGridContainer componentType={"concave"} />
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           <OneGridContainer componentType={"flatmirror"} />
                       </Col>
                   </Row>

                   <Row className={"justify-content-center"}>
                       <Col className={"col-6"}>
                           <Button style={{backgroundColor: "#F8EDDD", width: "150px", color: "black",
                               fontSize: "18px", clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                   onClick={() => setComponentsList([])}>Reset</Button>
                       </Col>
                   </Row>
               </Container>

            </>
        )
    }
}
export default Sidebar;
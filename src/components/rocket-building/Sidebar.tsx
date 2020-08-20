import React from "react";
import { Container, Row, Col } from 'react-bootstrap'

class Sidebar extends React.Component {
    render() {
        return (
            <>
               <Container style={{backgroundColor: "#29405B", margin: 0, height: "100%", textAlign: "left",
                   clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%)", padding: 25}}>
                   <h3 style={{paddingTop: "15px"}}>STATS</h3>
                   <Row>
                       <Col>
                           <h5>Total Mass</h5>
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           <h5>Air Resistance</h5>
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           <h5>Fuel Capacity</h5>
                       </Col>
                   </Row>
               </Container>

            </>
        )
    }
}
export default Sidebar;
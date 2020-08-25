import React from "react";
import { Container, Row, Col } from 'react-bootstrap'

class Sidebar extends React.Component<any, any> {
    render() {
        return (
            <>
               <Container style={{backgroundColor: "#29405B", margin: 0, height: "100%", textAlign: "left",
                   clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%)", padding: 25}}>
                   <h3 style={{paddingTop: "15px"}}>STATS</h3>

                   <Row style={{marginTop: 25}}>
                       <Col>
                           <p>Piece - {this.props.title}</p>
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           <h5>Total Mass</h5>
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           {this.props.mass}
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           <h5>Air Resistance</h5>
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           {this.props.airResistance}
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           <h5>Fuel Capacity</h5>
                       </Col>
                   </Row>

                   <Row>
                       <Col>
                           {this.props.fuelCapacity}
                       </Col>
                   </Row>
               </Container>

            </>
        )
    }
}
export default Sidebar;
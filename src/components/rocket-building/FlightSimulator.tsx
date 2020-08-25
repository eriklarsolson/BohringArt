import React from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import 'font-awesome/css/font-awesome.min.css';
import stellarBackground from "../stellar-cycle/stellarBackground.png";
import "./Rocket.scss"
import {Animation} from "./Animation";
import sideBooster_2 from "./images/sideBoosters/sideBooster_2.png"

class FlightSimulator extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            payload: this.props.location.state.payload,
            interstage: this.props.location.state.interstage,
            sideBooster: this.props.location.state.sideBooster,
            engine: this.props.location.state.engine,
        };
    }

    render() {
    console.log(this.state.payload)

        return (
            <>
                <Container className={"vh-100"} fluid style={{margin: 0, padding: 0, backgroundRepeat: "repeat", backgroundPosition: "center",
                    backgroundImage:`url(${stellarBackground})`, backgroundSize: "cover"}}>
                    <Row style={{paddingTop: 25}}>
                        <Col>
                            <p style={{color: "white", fontSize: "28px", fontWeight: "bold"}}>Flight Simulator</p>
                        </Col>
                    </Row>

                    <Row>
                        <div className={"ship"}>
                            <Animation images={[this.state.sideBooster.image, this.state.engine.image,
                                this.state.interstage.image, this.state.payload.image]} />
                        </div>
                    </Row>


                    <Row style={{margin: "3%"}}>
                        <Col>
                            <Button className={"green-button"} style={{float: "left", width: 100,
                                clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                    onClick={() => this.props.history.push('/activity/rocket-building')}>
                                <i className="fa fa-arrow-left" />
                            </Button>
                        </Col>

                        <Col>
                            <Button className={"green-button"} style={{float: "right", width: 200,
                                clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                    onClick={() => this.props.history.push({
                                        pathname: '/activity/object-page',
                                        state: { title: "Nebula" }
                                    })}>Complete</Button>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default FlightSimulator;
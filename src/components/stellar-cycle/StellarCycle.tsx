import React from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import Popup from "../shared/modals/Popup";
import './StellarCycle.scss'
import stellarBackground from './stellarBackground.png';
import avgstar from './images/avgstar.png';
import blackhole from './images/blackhole.png';
import massivestar from './images/massivestar.png';
import nebula from './images/nebula.png';
import neutronstar from './images/neutronstar.png';
import planetarynebula from './images/planetarynebula.png';
import redgiant from './images/redgiant.png';
import redsupergiant from './images/redsupergiant.png';
import supernova from './images/supernova.png';
import whitedwarf from './images/whitedwarf.png';
import 'font-awesome/css/font-awesome.min.css';
import {Animation} from "./Animation";
import {getIndex} from "../circuilt-building/grid/Functionality";

class StellarCycle extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            title: undefined,
            paths: [
                {
                    title: "Nebula",
                    path: "M143.79,232.78,150.79,250.78,500.79,200.78,1349.79"
                },
                {
                    title: "Average Star",
                    path: "M143.79,232.78,150.79,250.78,500.79,200.78,1349.79"
                },
                {
                    title: "Red Giant",
                    path: "M143.79,232.78,150.79,250.78,800.79,200.78,1349.79"
                },
                {
                    title: "Planetary Nebula",
                    path: "M143.79,232.78,150.79,250.78,1000.79,200.78,1349.79"
                },
                {
                    title: "White Dwarf",
                    path: "M143.79,232.78,150.79,250.78,1200.79,200.78,1349.79,200.78"
                },
                {
                    title: "Massive Star",
                    path: "M143.79,232.78,339.79,431.78,500.79,444.78,1349.79"
                },
                {
                    title: "Red Supergiant",
                    path: "M143.79,232.78,339.79,431.78,800.79,444.78,1349.79"
                },
                {
                    title: "Supernova",
                    path: "M143.79,232.78,339.79,431.78,1000.79,444.78,1349.79"
                },
                {
                    title: "Neutron Star",
                    path: "M143.79,232.78,339.79,431.78,1200.79,444.78,1349.79,400.78"
                },
                {
                    title: "Black Hole",
                    path: "M143.79,232.78,339.79,431.78,1195.79,444.78,1349.79,551.78"
                }
            ],
            pathIndex: 0
        }
    }

    componentDidMount() {
        //TODO - This is not working fully, check below print statement to understand
        if(this.props.location.state !== undefined) {
            const loadedTitle = this.props.location.state.title;

            let samePaths = this.state.paths.filter((object: { title: any; path: any; }) => object.title === loadedTitle);

            if (samePaths.length > 0) {
                const index = getIndex(samePaths[0], this.state.paths);
                this.setState({pathIndex: index, title: loadedTitle})
            }
        } else {
            this.setState({pathIndex: 0, title: "Nebula"})
        }

        console.log(this.state.paths[this.state.pathIndex])
    }

    render() {
        const goToObjectPage = (title: string) => {
            this.props.history.push({
                pathname: '/activity/object-page',
                state: { title: title }
            })
        }

        return (
            <>
                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0", backgroundImage:`url(${stellarBackground})`}}>
                    <Row style={{margin: "3% 3% 0 3%"}}>
                        <Col>
                            <p style={{color: "white", fontSize: "28px", fontWeight: "bold"}}>Stellar Life Cycle</p>
                        </Col>
                    </Row>
                    <Row style={{margin: "0 0 50px 0"}}>
                        <Col>
                            <p style={{color: "white", fontSize: "18px", fontWeight: "bold"}}>{this.state.title}</p>
                        </Col>
                    </Row>

                    <Row style={{margin: 0}}>
                        <div style={{position: "absolute", top: "10%", left: "5%", margin: 0, width: "100%", height: "1000px"}}>
                            <Animation path={this.state.paths[this.state.pathIndex].path} />
                        </div>

                        <Col className={"col-3 justify-content-center align-content-center stellar-circle"} style={{padding: "0"}}>
                            <Container fluid  onClick={() => goToObjectPage("Nebula")}>
                                <Row>
                                    <Col>
                                       <img src={nebula} width={"50%"}/>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <p style={{fontSize: "24px", color: "white"}}>Nebula</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>

                        <Col style={{padding: "0"}}>
                            <Row className={"justify-content-center align-content-center"} style={{margin: 0}}>
                                <Col className={"col-3 justify-content-center align-content-center  stellar-circle"} style={{padding: "0"}}>
                                    <Container fluid  onClick={() => goToObjectPage("Average Star")}>
                                        <Row>
                                            <Col>
                                                <img src={avgstar} width={"50%"}/>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <p style={{fontSize: "24px", color: "white"}}>Average Star</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>

                                <Col className={"col-3 justify-content-center align-content-center stellar-circle"} style={{padding: "0"}}>
                                    <Container fluid  onClick={() => goToObjectPage("Red Giant")}>
                                        <Row>
                                            <Col>
                                                <img src={redgiant} width={"50%"}/>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <p style={{fontSize: "24px", color: "white"}}>Red Giant</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>

                                <Col className={"col-3 justify-content-center align-content-center stellar-circle"} style={{padding: "0"}}>
                                    <Container fluid  onClick={() => goToObjectPage("Planetary Nebula")}>
                                        <Row>
                                            <Col>
                                                <img src={planetarynebula} width={"50%"}/>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <p style={{fontSize: "24px", color: "white"}}>Planetary Nebula</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>

                                <Col className={"col-3 justify-content-center align-content-center stellar-circle"} style={{padding: "0"}}>
                                    <Container fluid  onClick={() => goToObjectPage("White Dwarf")}>
                                        <Row>
                                            <Col>
                                                <img src={whitedwarf} width={"50%"}/>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <p style={{fontSize: "24px", color: "white"}}>White Dwarf</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>

                            <Row className={"justify-content-center align-content-center"} style={{margin: 0}}>
                                <Col className={"col-3 justify-content-center align-content-center stellar-circle"} style={{padding: "0"}}>
                                    <Container fluid  onClick={() => goToObjectPage("Massive Star")}>
                                        <Row>
                                            <Col>
                                                <img src={massivestar} width={"50%"}/>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <p style={{fontSize: "24px", color: "white"}}>Massive Star</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>

                                <Col className={"col-3 justify-content-center align-content-center stellar-circle"} style={{padding: "0"}}>
                                    <Container fluid  onClick={() => goToObjectPage("Red Supergiant")}>
                                        <Row>
                                            <Col>
                                                <img src={redsupergiant} width={"50%"}/>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <p style={{fontSize: "24px", color: "white"}}>Red Supergiant</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>

                                <Col className={"col-3 justify-content-center align-content-center stellar-circle"} style={{padding: "0"}}>
                                    <Container fluid  onClick={() => goToObjectPage("Supernova")}>
                                        <Row>
                                            <Col>
                                                <img src={supernova} width={"50%"}/>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <p style={{fontSize: "24px", color: "white"}}>Supernova</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>

                                <Col className={"col-3 justify-content-center align-content-center stellar-circle"} style={{padding: "0"}}>
                                    <Container fluid  onClick={() => goToObjectPage("Neutron Star")}>
                                        <Row>
                                            <Col>
                                                <img src={neutronstar} width={"50%"}/>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <p style={{fontSize: "24px", color: "white"}}>Neutron Star</p>
                                            </Col>
                                        </Row>
                                    </Container>

                                    <Container fluid  onClick={() => goToObjectPage("Black Hole")}>
                                        <Row>
                                            <Col>
                                                <img src={blackhole} width={"50%"}/>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <p style={{fontSize: "24px", color: "white"}}>Black Hole</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row style={{margin: "20px"}}>
                        <Col>
                            <Button className={"green-button"} style={{float: "left", width: 100,
                                clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)"}}
                                    onClick={() => this.props.history.push({
                                        pathname: '/activity/object-page',
                                        state: { title: "Nebula" }
                                    })}>
                                <i className="fa fa-arrow-left" />
                            </Button>
                        </Col>

                        <Col>
                            <Button className={"green-button"} style={{float: "right", width: 200,
                                clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)"}}
                                    onClick={() => this.props.history.push({
                                        pathname: '/',
                                        state: { popupOpened: true }
                                    })}>
                                Complete
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default StellarCycle;
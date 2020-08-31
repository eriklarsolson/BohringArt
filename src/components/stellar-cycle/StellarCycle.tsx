import React from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import ObjectivePopup from "../shared/modals/ObjectivePopup";
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
import white_dwarf_path from './images/white_dwarf_path.png';
import 'font-awesome/css/font-awesome.min.css';
import {StellarPathAnimation} from "./StellarPathAnimation";
import {getIndex} from "../circuilt-building/grid/Functionality";

class StellarCycle extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            title: undefined,
            paths: [
                {
                    title: "Nebula",
                    path: "M143.79,232.78,0,0,0,0,0" //TODO - Big confusion here - if I delete any number, it breaks animation for rest of objects
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
                    path: "M262.77734375,247.77734375c30.5,23.3,56.1,54.9,91.4,69.9c47.4,20.1,101.3,19.6,152.6,22.9c165.5,2.8,241.5,-9.4,406.6,-9.0c36.9,1.1,74.7,0.2,110.5,9.3c38.7,9.7,76.6,25.4,109.8,47.6c30.2,20.2,66.7,64.8,78.1,75.9"
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
                state: { title: title, popupOpened: false }
            })
        }

        return (
            <>
                <Container fluid style={{margin: 0, padding: 0, backgroundRepeat: "repeat", backgroundPosition: "center",
                    backgroundImage:`url(${stellarBackground})`, backgroundSize: "cover"}}>
                    <Row style={{paddingTop: 25}}>
                        <Col>
                            <p style={{color: "white", fontSize: "28px", fontWeight: "bold"}}>Stellar Life Cycle</p>
                        </Col>
                    </Row>
                    <Row style={{margin: "0 0 50px 0"}}>
                        <Col>
                            <p style={{color: "white", fontSize: "18px", fontWeight: "bold"}}>{this.state.title}</p>
                        </Col>
                    </Row>

                    <Row style={{margin: 0}} className={"justify-content-center"}>
                        <Col className={"col-10"}>
                            <Row>
                                <div style={{position: "absolute", top: "10%", left: "5%", margin: 0, width: "100%", height: "100%"}}>
                                    <StellarPathAnimation path={this.state.paths[this.state.pathIndex].path} />
                                </div>

                                <div style={{position: "absolute", top: "5%", left: "7%", margin: 0, width: "65%"}}>
                                    <img src={white_dwarf_path} width={"100%"} />
                                </div>

                                <Col className={"col-2 justify-content-center align-content-center stellar-circle"}
                                     onClick={() => goToObjectPage("Nebula")} style={{marginTop: 100, padding: "0"}}>
                                    <Row>
                                        <Col>
                                            <img src={nebula} width={"50%"} />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <p style={{fontSize: "24px", color: "white"}}>Nebula</p>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col className={"col-9"} style={{padding: "0"}}>
                                    <Row className={"justify-content-center align-content-center"} style={{margin: 0, marginBottom: 50}}>
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
                        </Col>
                    </Row>

                    <Row style={{padding: 20}}>
                        <Col>
                            <Button className={"green-button"} style={{float: "left", width: 100,
                                clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                    onClick={() => this.props.history.push({
                                        pathname: '/activity/object-page',
                                        state: { title: "Nebula" }
                                    })}>
                                <i className="fa fa-arrow-left" />
                            </Button>
                        </Col>

                        <Col>
                            <Button className={"green-button"} style={{float: "right", width: 200,
                                clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
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
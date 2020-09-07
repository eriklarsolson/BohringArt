import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Button from "react-bootstrap/Button";
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
                    path: "M25 125 L200 10 L350 10"
                },
                {
                    title: "Average Star",
                    path: "M25 125 L200 10 L350 10"
                },
                {
                    title: "Red Giant",
                    path: "M25 125 L200 10 L600 10"
                },
                {
                    title: "Planetary Nebula",
                    path: "M25 125 L200 10 L950 10"
                },
                {
                    title: "White Dwarf",
                    path: "M25 125 L200 10 L1200 10"
                },
                {
                    title: "Massive Star",
                    path: "M25 125 L200 250 L350 250"
                },
                {
                    title: "Red Supergiant",
                    path: "M25 125 L200 250 L600 250"
                },
                {
                    title: "Supernova",
                    path: "M25 125 L200 250 L950 250"
                },
                {
                    title: "Neutron Star",
                    path: "M25 125 L200 250 L950 250 L1250 250"
                },
                {
                    title: "Black Hole",
                    path: "M25 125 L200 250 L950 250 L1250 450"
                }
            ],
            pathIndex: 0
        }
    }

    componentDidMount() {
        //TODO - This is not working fully, check below print statement to understand
        if(this.props.location.state !== undefined) {
            let samePaths = this.state.paths.filter((object: { title: any }) => object.title === this.props.location.state.title);

            console.log(samePaths)
            if (samePaths.length > 0) {
                const index = getIndex(samePaths[0], this.state.paths);
                this.setState({pathIndex: index, title: this.props.location.state.title})
            }

        } else {
            this.setState({pathIndex: 0, title: "Nebula"})
        }

    }

    render() {
        const goToObjectPage = (title: string) => {
            let disableSliders = true;
            if(title === "Average Star" || title === "Massive Star") {
                disableSliders = false;
            }

            this.props.history.push({
                pathname: '/activity/object-page',
                state: { title: title, popupOpened: false, disableSliders: disableSliders }
            })
        }

        return (
            <>
                <Container fluid style={{margin: 0, padding: 0, backgroundRepeat: "repeat", backgroundPosition: "center",
                    backgroundImage:`url(${stellarBackground})`, backgroundSize: "cover"}}>
                    <Row style={{paddingTop: 25}}>
                        <Col>
                            <Button className={"green-button"} style={{float: "left", width: 120}}
                                    onClick={() => this.props.history.push({
                                        pathname: '/activity/object-page',
                                        state: { title: "Nebula" }
                                    })}>
                                <i className="fa fa-arrow-left" />
                            </Button>
                        </Col>

                        <Col>
                            <p style={{color: "white", fontSize: "28px", fontWeight: "bold"}}>Stellar Life Cycle</p>
                        </Col>

                        <Col />
                    </Row>
                    <Row style={{margin: "0 0 50px 0"}}>
                        <Col>
                            <p style={{color: "white", fontSize: "18px", fontWeight: "bold"}}>{this.state.title}</p>
                        </Col>
                    </Row>

                    <Row style={{margin: 0}} className={"justify-content-center"}>
                        <Col className={"col-10"}>
                            <Row>
                                <div style={{position: "absolute", top: 85, left: "5%", margin: 0, width: "100%", height: "100%"}}>
                                    <StellarPathAnimation path={this.state.paths[this.state.pathIndex].path} />
                                </div>

                                {/*<div style={{position: "absolute", top: "5%", left: "7%", margin: 0, width: "65%"}}>*/}
                                {/*    <img alt={"White Dwarf Star Path"} src={white_dwarf_path} width={"100%"} />*/}
                                {/*</div>*/}

                                <Col className={"col-2 justify-content-center align-content-center stellar-circle"}
                                     onClick={() => goToObjectPage("Nebula")} style={{marginTop: 100, padding: "0"}}>
                                    <Row>
                                        <Col>
                                            {this.state.title === "Nebula" ?
                                                <img alt={"Nebula"} src={nebula} width={"50%"}
                                                     style={{borderRadius: "50%", border: "8px solid #3BD186"}}/>
                                                :
                                                <img alt={"Nebula"} src={nebula} width={"50%"} />
                                            }
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
                                                        {this.state.title === "Average Star" ?
                                                            <img alt={"Average Star"} src={avgstar} width={"50%"}
                                                                 style={{borderRadius: "50%", border: "8px solid #3BD186"}}/>
                                                            :
                                                            <img alt={"Average Star"} src={avgstar} width={"50%"} />
                                                        }
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
                                                        {this.state.title === "Red Giant" ?
                                                            <img alt={"Red Giant"} src={redgiant} width={"50%"}
                                                                 style={{borderRadius: "50%", border: "8px solid #3BD186"}}/>
                                                            :
                                                            <img alt={"Red Giant"} src={redgiant} width={"50%"} />
                                                        }
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
                                                        {this.state.title === "Planetary Nebula" ?
                                                            <img alt={"Planetary Nebula"} src={planetarynebula} width={"50%"}
                                                                 style={{borderRadius: "50%", border: "8px solid #3BD186"}}/>
                                                            :
                                                            <img alt={"Planetary Nebula"} src={planetarynebula} width={"50%"} />
                                                        }
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
                                                        {this.state.title === "White Dwarf" ?
                                                            <img alt={"White Dwarf"} src={whitedwarf} width={"50%"}
                                                                 style={{borderRadius: "50%", border: "8px solid #3BD186"}}/>
                                                            :
                                                            <img alt={"White Dwarf"} src={whitedwarf} width={"50%"} />
                                                        }
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
                                                        {this.state.title === "Massive Star" ?
                                                            <img alt={"Massive Star"} src={massivestar} width={"50%"}
                                                                 style={{borderRadius: "50%", border: "8px solid #3BD186"}}/>
                                                            :
                                                            <img alt={"Massive Star"} src={massivestar} width={"50%"} />
                                                        }
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
                                                        {this.state.title === "Red Supergiant" ?
                                                            <img alt={"Red Supergiant"} src={redsupergiant} width={"50%"}
                                                                 style={{borderRadius: "50%", border: "8px solid #3BD186"}}/>
                                                            :
                                                            <img alt={"Red Supergiant"} src={redsupergiant} width={"50%"} />
                                                        }
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
                                                        {this.state.title === "Supernova" ?
                                                            <img alt={"supernova"} src={supernova} width={"50%"}
                                                                 style={{borderRadius: "50%", border: "8px solid #3BD186"}}/>
                                                            :
                                                            <img alt={"supernova"} src={supernova} width={"50%"} />
                                                        }
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col>
                                                        <p style={{fontSize: "24px", color: "white"}}>Supernova</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>

                                        <Col className={"col-3 justify-content-center align-content-center"} style={{padding: "0"}}>
                                            <Container fluid onClick={() => goToObjectPage("Neutron Star")} className={"stellar-circle"}>
                                                <Row>
                                                    <Col>
                                                        {this.state.title === "Neutron Star" ?
                                                            <img alt={"neutron star"} src={neutronstar} width={"50%"}
                                                                 style={{borderRadius: "50%", border: "8px solid #3BD186"}}/>
                                                            :
                                                            <img alt={"neutron star"} src={neutronstar} width={"50%"} />
                                                        }
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col>
                                                        <p style={{fontSize: "24px", color: "white"}}>Neutron Star</p>
                                                    </Col>
                                                </Row>
                                            </Container>

                                            <Container fluid onClick={() => goToObjectPage("Black Hole")} className={"stellar-circle"}>
                                                <Row>
                                                    <Col>
                                                        {this.state.title === "Black Hole" ?
                                                                <img alt={"Black Hole"} src={blackhole} width={"50%"}
                                                                     style={{borderRadius: "50%", border: "8px solid #3BD186"}}/>
                                                            :
                                                                <img alt={"Black Hole"} src={blackhole} width={"50%"} />
                                                        }
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
                            <Button className={"green-button"} style={{float: "right", width: 200,
                                clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                    onClick={() => this.props.history.push({
                                        pathname: '/home',
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
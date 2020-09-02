import React, {useState} from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import stellarBackground from './stellarBackground.png';
import rightarrow from './rightarrow.png';
import leftarrow from './leftarrow.png';
import Sidebar from "./Sidebar";
import avgstar from "./images/avgstar.png"
import blackhole from "./images/blackhole.png"
import massivestar from "./images/massivestar.png"
import massive_star_1 from "./images/massive_star_1.png"
import massive_star_2 from "./images/massive_star_2.png"
import massive_star_3 from "./images/massive_star_3.png"
import massive_star_4 from "./images/massive_star_4.png"
import massive_star_5 from "./images/massive_star_5.png"
import nebula from "./images/nebula.png"
import neutronstar from "./images/neutronstar.png"
import planetarynebula from "./images/planetarynebula.png"
import redgiant from "./images/redgiant.png"
import redsupergiant from "./images/redsupergiant.png"
import supernova from "./images/supernova.png"
import whitedwarf from "./images/whitedwarf.png"
import './StellarCycle.scss'
import {getIndex} from "../circuilt-building/grid/Functionality";
import {Slider, withStyles} from "@material-ui/core";
import ObjectivePopup from "../shared/modals/ObjectivePopup";
import TimelineSlider from "./TimelineSlider";
import StellarPropertiesPopup from "../shared/modals/StellarPropertiesPopup";

class ObjectPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            disableSliders: false,
            popupOpened: true,
            propertiesPopupOpened: false,
            showSliders: false,
            index: 0,
            massClass: 0, //0 for average, 1 for massive
            averageIndex: 0,
            averageStars: [
                {
                    title: "Average star 1",
                    image: massive_star_1,
                    temperatureValue: 20,
                    sizeValue: 60,
                    massValue: 20,
                },
                {
                    title: "Average star 2",
                    image: massive_star_2,
                    temperatureValue: 40,
                    sizeValue: 40,
                    massValue: 40,
                },
                {
                    title: "Average star 3",
                    image: massive_star_3,
                    temperatureValue: 60,
                    sizeValue: 20,
                    massValue: 80,
                },
                {
                    title: "Average star 4",
                    image: massive_star_4,
                    temperatureValue: 80,
                    sizeValue: 100,
                    massValue: 60,
                },
                {
                    title: "Average star 5",
                    image: massive_star_5,
                    temperatureValue: 100,
                    sizeValue: 80,
                    massValue: 100,
                }
            ],
            massiveIndex: 0,
            massiveStars: [
                {
                    title: "Massive star 1",
                    image: massive_star_1,
                    temperatureValue: 20,
                    sizeValue: 60,
                    massValue: 20,
                },
                {
                    title: "Massive star 2",
                    image: massive_star_2,
                    temperatureValue: 40,
                    sizeValue: 40,
                    massValue: 40,
                },
                {
                    title: "Massive star 3",
                    image: massive_star_3,
                    temperatureValue: 60,
                    sizeValue: 20,
                    massValue: 80,
                },
                {
                    title: "Massive star 4",
                    image: massive_star_4,
                    temperatureValue: 80,
                    sizeValue: 100,
                    massValue: 60,
                },
                {
                    title: "Massive star 5",
                    image: massive_star_5,
                    temperatureValue: 100,
                    sizeValue: 80,
                    massValue: 100,
                }
            ],
            stellarObjects: [
                [
                    {
                        title: "Nebula",
                        image: nebula,
                        temperatureValue: 40,
                        sizeValue: 60,
                        massValue: 80,
                        timeValue: 20,
                        timeString: "1 Year"
                    },
                    {
                        title: "Average Star",
                        image: avgstar,
                        temperatureValue: 20,
                        sizeValue: 40,
                        massValue: 40,
                        timeValue: 40,
                        timeString: "2 Year"
                    },
                    {
                        title: "Red Giant",
                        image: redgiant,
                        temperatureValue: 60,
                        sizeValue: 20,
                        massValue: 60,
                        timeValue: 60,
                        timeString: "3 Year"
                    },
                    {
                        title: "Planetary Nebula",
                        image: planetarynebula,
                        temperatureValue: 80,
                        sizeValue: 80,
                        massValue: 20,
                        timeValue: 80,
                        timeString: "4 Year"
                    },
                    {
                        title: "White Dwarf",
                        image: whitedwarf,
                        temperatureValue: 100,
                        sizeValue: 100,
                        massValue: 100,
                        timeValue: 100,
                        timeString: "5 Year"
                    }
                ],
                [
                    {
                        title: "Nebula",
                        image: nebula,
                        temperatureValue: 20,
                        sizeValue: 20,
                        massValue: 20,
                        timeValue: 20,
                        timeString: "1 Year"
                    },
                    {
                        title: "Massive Star",
                        image: massivestar,
                        temperatureValue: 40,
                        sizeValue: 40,
                        massValue: 40,
                        timeValue: 40,
                        timeString: "2 Year"
                    },
                    {
                        title: "Red Supergiant",
                        image: redsupergiant,
                        temperatureValue: 60,
                        sizeValue: 60,
                        massValue: 60,
                        timeValue: 60,
                        timeString: "3 Year"
                    },
                    {
                        title: "Supernova",
                        image: supernova,
                        temperatureValue: 80,
                        sizeValue: 80,
                        massValue: 80,
                        timeValue: 80,
                        timeString: "4 Year"
                    },
                    {
                        title: "Neutron Star",
                        image: neutronstar,
                        temperatureValue: 100,
                        sizeValue: 100,
                        massValue: 100,
                        timeValue: 100,
                        timeString: "5 Year"
                    },
                    {
                        title: "Black Hole",
                        image: blackhole,
                        temperatureValue: 120,
                        sizeValue: 120,
                        massValue: 120,
                        timeValue: 120,
                        timeString: "6 Year"
                    }
                ]
            ]
        };
    }

    componentDidMount() {
        if(this.props.location.state !== undefined) {
            const loadedTitle = this.props.location.state.title;

            //Check massive objects for same name (check here first since finds nebula
            let samePlaceComponents = this.state.stellarObjects[1].filter((object: { title: any; }) => object.title === loadedTitle);
            if (samePlaceComponents.length > 0) {
                const index = getIndex(samePlaceComponents[0], this.state.stellarObjects[1]);
                this.setState({index: index, massClass: 1})
            }

            //Check average objects for same name
            samePlaceComponents = this.state.stellarObjects[0].filter((object: { title: any; }) => object.title === loadedTitle);
            if (samePlaceComponents.length > 0) {
                const index = getIndex(samePlaceComponents[0], this.state.stellarObjects[0]);
                this.setState({index: index, massClass: 0})
            }

            if(this.props.location.state.popupOpened !== undefined) {
                this.setState({popupOpened: this.props.location.state.popupOpened})
            }

            //TODO: Not working; if coming from all stages page (clicking massive or average star) sliders should be enabled
            if(this.props.location.state.disableSliders !== undefined) {
                this.setState({disableSliders: this.props.location.state.disableSliders})
            }
        } else {
            this.setState({index: 0, massClass: 0})
        }
    }

    render() {
        const cyclePopup = () => {
            this.setState({popupOpened: !this.state.popupOpened})
        }

        const cyclePropertiesPopup = () => {
            this.setState({propertiesPopupOpened: !this.state.propertiesPopupOpened})
        }

        const showPropertySliders = () => {
            if(!this.state.showSliders) {
                this.setState({showSliders: true})
                cyclePropertiesPopup()
            }
        }

        const handleMassChange = (event: { target: { value: any; }; }) => {
            console.log(event.target.value)
            if(event.target.value === "Average") {
                this.setState({massClass: 0});
            } else {
                this.setState({massClass: 1});
            }
            this.setState({index: 0});
        };

        const changeTemperature = (event: any, newValue: any) => {
            if(this.state.stellarObjects[this.state.massClass][this.state.index].title === "Average Star") {
                //Load different average or massive star (different colour)
                const samePlaceComponents = this.state.averageStars.filter((object: { temperatureValue: any; }) => object.temperatureValue === newValue);
                if (samePlaceComponents.length > 0) {
                    const index = getIndex(samePlaceComponents[0], this.state.averageStars);
                    this.setState({averageIndex: index})
                }
            } else if(this.state.stellarObjects[this.state.massClass][this.state.index].title === "Massive Star") {
                //Load different average or massive star (different colour)
                const samePlaceComponents = this.state.massiveStars.filter((object: { temperatureValue: any; }) => object.temperatureValue === newValue);
                if (samePlaceComponents.length > 0) {
                    const index = getIndex(samePlaceComponents[0], this.state.massiveStars);
                    this.setState({averageIndex: index})
                }
            }
            // const samePlaceComponents = this.state.stellarObjects[this.state.massClass].filter((object: { temperatureValue: any; }) => object.temperatureValue === newValue);
            // if (samePlaceComponents.length > 0) {
            //     const index = getIndex(samePlaceComponents[0], this.state.stellarObjects[this.state.massClass]);
            //     this.setState({index: index})
            // }
        }

        const changeSize = (event: any, newValue: any) => {
            if(this.state.stellarObjects[this.state.massClass][this.state.index].title === "Average Star") {
                //Load different average or massive star (different colour)
                const samePlaceComponents = this.state.averageStars.filter((object: { sizeValue: any; }) => object.sizeValue === newValue);
                if (samePlaceComponents.length > 0) {
                    const index = getIndex(samePlaceComponents[0], this.state.averageStars);
                    this.setState({averageIndex: index})
                }
            } else if(this.state.stellarObjects[this.state.massClass][this.state.index].title === "Massive Star") {
                //Load different average or massive star (different colour)
                const samePlaceComponents = this.state.massiveStars.filter((object: { sizeValue: any; }) => object.sizeValue === newValue);
                if (samePlaceComponents.length > 0) {
                    const index = getIndex(samePlaceComponents[0], this.state.massiveStars);
                    this.setState({averageIndex: index})
                }
            }
            // const samePlaceComponents = this.state.stellarObjects[this.state.massClass].filter((object: { sizeValue: any; }) => object.sizeValue === newValue);
            // if (samePlaceComponents.length > 0) {
            //     const index = getIndex(samePlaceComponents[0], this.state.stellarObjects[this.state.massClass]);
            //     this.setState({index: index})
            // }
        }

        const changeMass = (event: any, newValue: any) => {
            if(this.state.stellarObjects[this.state.massClass][this.state.index].title === "Average Star") {
                //Load different average or massive star (different colour)
                const samePlaceComponents = this.state.averageStars.filter((object: { massValue: any; }) => object.massValue === newValue);
                if (samePlaceComponents.length > 0) {
                    const index = getIndex(samePlaceComponents[0], this.state.averageStars);
                    this.setState({averageIndex: index})
                }
            } else if(this.state.stellarObjects[this.state.massClass][this.state.index].title === "Massive Star") {
                //Load different average or massive star (different colour)
                const samePlaceComponents = this.state.massiveStars.filter((object: { massValue: any; }) => object.massValue === newValue);
                if (samePlaceComponents.length > 0) {
                    const index = getIndex(samePlaceComponents[0], this.state.massiveStars);
                    this.setState({averageIndex: index})
                }
            }
            // Don't delete this after changing. Useful code to change property of one object within array (for state)
            // let objects = [...this.state.stellarObjects];
            // let object = {...objects[this.state.massClass][this.state.index]};
            // object.massValue = newValue;
            // objects[this.state.massClass][this.state.index] = object;
            // this.setState({stellarObjects: objects});

            // const samePlaceComponents = this.state.stellarObjects[this.state.massClass].filter((object: { massValue: any; }) => object.massValue === newValue);
            // if (samePlaceComponents.length > 0) {
            //     const index = getIndex(samePlaceComponents[0], this.state.stellarObjects[this.state.massClass]);
            //     this.setState({index: index})
            // }
        }

        const changeTime = (event: any, newValue: any) => {
            const samePlaceComponents = this.state.stellarObjects[this.state.massClass].filter((object: { timeValue: any; }) => object.timeValue === newValue);
            if (samePlaceComponents.length > 0) {
                const index = getIndex(samePlaceComponents[0], this.state.stellarObjects[this.state.massClass]);
                this.setState({index: index})
            }

            if(this.state.stellarObjects[this.state.massClass][this.state.index].title === "Red Giant" ||
                this.state.stellarObjects[this.state.massClass][this.state.index].title === "Red Supergiant") {
                showPropertySliders()
            }
        }

        const leftArrow = () => {
            if(this.state.index - 1 === -1) {
                this.setState({index: this.state.stellarObjects[this.state.massClass].length - 1})
            } else {
                this.setState({index: this.state.index - 1})
            }
        }

        const rightArrow = () => {
            if (this.state.index + 1 === this.state.stellarObjects[this.state.massClass].length) {
                this.setState({index: 0})
            } else {
                this.setState({index: this.state.index + 1})
            }
        }

        let max = 100
        if(this.state.massClass === 1) {
            max = 120;
        }

        return (
            <>
                <StellarPropertiesPopup open={this.state.propertiesPopupOpened} closePopup={cyclePropertiesPopup} />

                <ObjectivePopup title={"04 Stellar Life Cycle"}
                                open={this.state.popupOpened}
                                description={"In this final activity, use the sliders to see how mass, temperature, and size are " +
                       "related as you move through the stages of the stellar life cycle. You may choose between using a " +
                       "star of average mass (like the sun) or a supermassive star, mass is the main variable used to " +
                       "determine which stages the star will go through and how long its lifespan will be. When viewing " +
                       "a stage, click the MORE INFO button to see an in depth description. You can also click on the " +
                       "ALL STAGES button to go back to the stellar life cycle diagram. Once you are finished exploring, " +
                       "click on the COMPLETE button to close out the activity."}
                                closePopup={cyclePopup} />

                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: 0, padding: 0, backgroundImage:`url(${stellarBackground})`}}>
                    <Row className={"flex-grow-1"} style={{margin: 0}}>
                        <Col className={"col-2 vh-100"} style={{color: "white", padding: 0}}>

                            {(this.state.stellarObjects[this.state.massClass][this.state.index].title === "Average Star" ||
                                this.state.stellarObjects[this.state.massClass][this.state.index].title === "Massive Star") ?
                                <>
                                    {this.state.stellarObjects[this.state.massClass][this.state.index].title === "Massive Star" ?
                                        <Sidebar currentObject={this.state.massiveStars[this.state.massiveIndex]}
                                                 temperature={this.state.massiveStars[this.state.massiveIndex].temperatureValue}
                                                 changeTemperature={changeTemperature}
                                                 size={this.state.massiveStars[this.state.massiveIndex].sizeValue}
                                                 changeSize={changeSize}
                                                 mass={this.state.massiveStars[this.state.massiveIndex].massValue}
                                                 changeMass={changeMass}
                                                 description={this.state.massiveStars[this.state.massiveIndex].description}
                                                 massClass={this.state.massClass}
                                                 showPropertySliders={showPropertySliders}
                                                 showSliders={this.state.showSliders}
                                                 handleMassChange={handleMassChange} />
                                        :
                                        <Sidebar currentObject={this.state.averageStars[this.state.averageIndex]}
                                                 temperature={this.state.averageStars[this.state.averageIndex].temperatureValue}
                                                 changeTemperature={changeTemperature}
                                                 size={this.state.averageStars[this.state.averageIndex].sizeValue}
                                                 changeSize={changeSize}
                                                 mass={this.state.averageStars[this.state.averageIndex].massValue}
                                                 changeMass={changeMass}
                                                 description={this.state.averageStars[this.state.averageIndex].description}
                                                 massClass={this.state.massClass}
                                                 showPropertySliders={showPropertySliders}
                                                 showSliders={this.state.showSliders}
                                                 handleMassChange={handleMassChange} />
                                    }
                                </>
                                :
                                <Sidebar currentObject={this.state.stellarObjects[this.state.massClass][this.state.index]}
                                         temperature={this.state.stellarObjects[this.state.massClass][this.state.index].temperatureValue}
                                         changeTemperature={changeTemperature}
                                         size={this.state.stellarObjects[this.state.massClass][this.state.index].sizeValue}
                                         changeSize={changeSize}
                                         mass={this.state.stellarObjects[this.state.massClass][this.state.index].massValue}
                                         changeMass={changeMass}
                                         description={this.state.stellarObjects[this.state.massClass][this.state.index].description}
                                         massClass={this.state.massClass}
                                         showPropertySliders={showPropertySliders}
                                         showSliders={this.state.showSliders}
                                         handleMassChange={handleMassChange} />
                            }
                        </Col>

                        <Col className={"col-10"} style={{margin: "0", padding: "0"}}>
                            <Container fluid style={{margin: "0", padding: "0"}}>
                                <Row style={{margin: 0}}>
                                    <Col className="col-2" style={{margin: "3%"}}>
                                        <Button className={"green-button"} style={{float: "left", width: 100,
                                            clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                onClick={() => this.props.history.push('/activity/rocket-building')}>
                                            <i className="fa fa-arrow-left" />
                                        </Button>
                                    </Col>

                                    <Col style={{margin: "3%"}}>
                                        <p style={{color: "white", fontSize: "28px", fontWeight: "bold"}}>Stellar Life Cycle</p>
                                    </Col>

                                    <Col className={"col-2 ml-auto"} style={{padding: 0, marginTop: "3%"}}>
                                        <Row style={{margin: 0}} className={"justify-content-end"}>
                                            <Button className={"blue-button"} style={{marginBottom: 15, width: 200,
                                                }}
                                                onClick={() => this.props.history.push({
                                                    pathname: '/activity/info-page',
                                                    state: { title: this.state.stellarObjects[this.state.massClass][this.state.index].title }
                                                })}>
                                                More Info
                                            </Button>
                                        </Row>

                                        <Row style={{margin: 0}} className={"justify-content-end"}>
                                            <Row style={{margin: 0}} className={"justify-content-end"}>
                                                <Button className={"blue-button"} style={{marginBottom: 15, width: 200,
                                                    }}  onClick={cyclePopup}>Objective</Button>
                                            </Row>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"} style={{margin: 0,}}>
                                    {/*<Col style={{display: "flex"}} className={"col-2 align-items-center justify-content-end"}>*/}
                                    {/*    <img className={"arrow"} src={leftarrow} height="100px" alt={"left arrow"}*/}
                                    {/*        onClick={leftArrow} />*/}
                                    {/*</Col>*/}

                                    <Col className={"col-6"}>
                                        {(this.state.stellarObjects[this.state.massClass][this.state.index].title === "Average Star" ||
                                            this.state.stellarObjects[this.state.massClass][this.state.index].title === "Massive Star") ?
                                            <>
                                                {this.state.stellarObjects[this.state.massClass][this.state.index].title === "Massive Star" ?
                                                    <img src={this.state.massiveStars[this.state.massiveIndex].image} style={{height: "450px"}} />
                                                    :
                                                    <img src={this.state.averageStars[this.state.averageIndex].image} style={{height: "450px"}} />
                                                }
                                            </>
                                            :
                                            <img src={this.state.stellarObjects[this.state.massClass][this.state.index].image} style={{height: "450px"}} />
                                        }
                                    </Col>

                                    {/*<Col style={{display: "flex"}} className={"col-2 align-items-center justify-content-start"}>*/}
                                    {/*    <img className={"arrow"} src={rightarrow} height="100px" alt={"right arrow"}*/}
                                    {/*         onClick={rightArrow} />*/}
                                    {/*</Col>*/}
                                </Row>

                                <Row>
                                    <Col>
                                        {(this.state.stellarObjects[this.state.massClass][this.state.index].title === "Average Star" ||
                                        this.state.stellarObjects[this.state.massClass][this.state.index].title === "Massive Star") ?
                                            <>
                                                {this.state.stellarObjects[this.state.massClass][this.state.index].title === "Massive Star" ?
                                                    <h2 style={{color: "white", fontWeight: "bold", marginTop: 5}}>
                                                        {this.state.massiveStars[this.state.massiveIndex].title}
                                                    </h2>
                                                    :
                                                    <h2 style={{color: "white", fontWeight: "bold", marginTop: 5}}>
                                                        {this.state.averageStars[this.state.averageIndex].title}
                                                    </h2>
                                                }
                                            </>
                                            :
                                            <h2 style={{color: "white", fontWeight: "bold", marginTop: 5}}>
                                                {this.state.stellarObjects[this.state.massClass][this.state.index].title}
                                            </h2>
                                        }
                                    </Col>
                                </Row>

                                <Row style={{margin: "3%"}}>
                                    <Col className={"ml-auto col-4 justify-content-center align-content-center"}>
                                        <TimelineSlider value={this.state.stellarObjects[this.state.massClass]
                                            [this.state.index].timeValue} changeTime={changeTime}
                                                        children={null} max={max} />
                                        <h5 style={{color: "white"}}>{this.state.stellarObjects[this.state.massClass][this.state.index].timeString}</h5>
                                    </Col>

                                    <Col className={"col-4 justify-content-center align-content-center"}>
                                        {this.state.stellarObjects[this.state.massClass][this.state.index].title !== "Nebula" &&
                                        <Button className={"green-button"} style={{float: "right", width: 200,
                                            clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                onClick={() => this.props.history.push({
                                                    pathname: '/activity/stellar-cycle',
                                                    state: {title: this.state.stellarObjects[this.state.massClass][this.state.index].title}})}>
                                            All Stages
                                        </Button>
                                        }
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default ObjectPage;
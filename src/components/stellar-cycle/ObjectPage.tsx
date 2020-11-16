import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import stellarBackground from './stellarBackground.png';
import Sidebar from "./Sidebar";
import avgstar from "./images/average_star_G.png"
import blackhole from "./images/blackhole.png"
import massivestar from "./images/massivestar.png"
import average_star_A from "./images/average_star_A.png"
import average_star_F from "./images/average_star_F.png"
import average_star_K from "./images/average_star_K.png"
import average_star_RedDwarf from "./images/average_star_RedDwarf.png"
// import massive_star_5 from "./images/massive_star_5.png"
import massive_star_btype from "./images/massive_star_btype.png"
import massive_star_otype from "./images/massive_star_otype.png"
import nebula from "./images/nebula.png"
import neutronstar from "./images/neutronstar.png"
import planetarynebula from "./images/planetarynebula.png"
import redgiant from "./images/redgiant.png"
import redsupergiant from "./images/redsupergiant.png"
import supernova from "./images/supernova.png"
import whitedwarf from "./images/whitedwarf.png"
import './StellarCycle.scss'
import {getIndex} from "../circuilt-building/grid/Functionality";
import StellarPropertiesPopup from "../shared/modals/StellarPropertiesPopup";
import {ObjectiveSlideOut} from "../shared/animations/ObjectiveSlideOut";
import PropertiesSlider from "./PropertiesSlider";
import {motion, useAnimation} from "framer-motion";

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
                    title: "Average Star",
                    image: avgstar,
                    imageSize: 370,
                    temperatureValue: 20,
                    sizeValue: 20,
                    massValue: 20,
                },
                {
                    title: "Average Star (Red Dwarf)",
                    image: average_star_RedDwarf,
                    imageSize: 390,
                    temperatureValue: 40,
                    sizeValue: 40,
                    massValue: 40,
                },
                {
                    title: "Average Star (K-Type)",
                    image: average_star_K,
                    imageSize: 410,
                    temperatureValue: 60,
                    sizeValue: 60,
                    massValue: 60,
                },
                {
                    title: "Average Star (F-Type)",
                    image: average_star_F,
                    imageSize: 430,
                    temperatureValue: 80,
                    sizeValue: 80,
                    massValue: 80,
                },
                {
                    title: "Average Star (A-Type)",
                    image: average_star_A,
                    imageSize: 450,
                    temperatureValue: 100,
                    sizeValue: 100,
                    massValue: 100,
                }
            ],
            massiveIndex: 0,
            massiveStars: [
                {
                    title: "Massive star (B-Type)",
                    image: massive_star_btype,
                    imageSize: 400,
                    temperatureValue: 20,
                    sizeValue: 20,
                    massValue: 20,
                },
                {
                    title: "Massive star (O-Type)",
                    image: massive_star_otype,
                    imageSize: 450,
                    temperatureValue: 100,
                    sizeValue: 100,
                    massValue: 100,
                }
            ],
            stellarObjects: [
                [
                    {
                        title: "Nebula",
                        image: nebula,
                        temperatureValue: 20,
                        sizeValue: 20,
                        massValue: 20,
                        timeValue: 20,
                        timeString: ""
                    },
                    {
                        title: "Average Star",
                        image: avgstar,
                        temperatureValue: 40,
                        sizeValue: 40,
                        massValue: 40,
                        timeValue: 40,
                        timeString: "600 million years"
                    },
                    {
                        title: "Red Giant",
                        image: redgiant,
                        temperatureValue: 60,
                        sizeValue: 60,
                        massValue: 60,
                        timeValue: 60,
                        timeString: "1 billion years"
                    },
                    {
                        title: "Planetary Nebula",
                        image: planetarynebula,
                        temperatureValue: 80,
                        sizeValue: 80,
                        massValue: 80,
                        timeValue: 80,
                        timeString: "10,000 years"
                    },
                    {
                        title: "White Dwarf",
                        image: whitedwarf,
                        temperatureValue: 100,
                        sizeValue: 100,
                        massValue: 100,
                        timeValue: 100,
                        timeString: "50 million years"
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
                        timeString: ""
                    },
                    {
                        title: "Massive Star",
                        image: massivestar,
                        temperatureValue: 40,
                        sizeValue: 40,
                        massValue: 40,
                        timeValue: 40,
                        timeString: "tens of millions of years"
                    },
                    {
                        title: "Red Supergiant",
                        image: redsupergiant,
                        temperatureValue: 60,
                        sizeValue: 60,
                        massValue: 60,
                        timeValue: 60,
                        timeString: "Hundreds of thousands of years"
                    },
                    {
                        title: "Supernova",
                        image: supernova,
                        temperatureValue: 80,
                        sizeValue: 80,
                        massValue: 80,
                        timeValue: 80,
                        timeString: "Hundreds of thousands of years"
                    },
                    {
                        title: "Neutron Star",
                        image: neutronstar,
                        temperatureValue: 100,
                        sizeValue: 100,
                        massValue: 100,
                        timeValue: 100,
                        timeString: ""
                    },
                    {
                        title: "Black Hole",
                        image: blackhole,
                        temperatureValue: 100,
                        sizeValue: 100,
                        massValue: 100,
                        timeValue: 100,
                        timeString: "10^67 years"
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
                    this.setState({massiveIndex: index})
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
                    this.setState({massiveIndex: index})
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
                    this.setState({massiveIndex: index})
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
            if(newValue !== 100) {
                const samePlaceComponents = this.state.stellarObjects[this.state.massClass].filter((object: { timeValue: any; }) => object.timeValue === newValue);
                if (samePlaceComponents.length > 0) {
                    const index = getIndex(samePlaceComponents[0], this.state.stellarObjects[this.state.massClass]);
                    this.setState({index: index})
                }
            } else {
                if(this.state.massClass === 1) {
                    if (this.state.massiveIndex === 0) {
                        const samePlaceComponents = this.state.stellarObjects[this.state.massClass].filter((object: { title: any; }) => object.title === "Neutron Star");
                        const index = getIndex(samePlaceComponents[0], this.state.stellarObjects[this.state.massClass]);
                        this.setState({index: index})
                    } else {
                        const samePlaceComponents = this.state.stellarObjects[this.state.massClass].filter((object: { title: any; }) => object.title === "Black Hole");
                        const index = getIndex(samePlaceComponents[0], this.state.stellarObjects[this.state.massClass]);
                        this.setState({index: index})
                    }
                } else {
                    const samePlaceComponents = this.state.stellarObjects[this.state.massClass].filter((object: { timeValue: any; }) => object.timeValue === newValue);
                    if (samePlaceComponents.length > 0) {
                        const index = getIndex(samePlaceComponents[0], this.state.stellarObjects[this.state.massClass]);
                        this.setState({index: index})
                    }
                }
            }

            console.log(this.state.stellarObjects[this.state.massClass][this.state.index].title)

            if(this.state.stellarObjects[this.state.massClass][this.state.index].title === "Average Star" ||
                this.state.stellarObjects[this.state.massClass][this.state.index].title === "Massive Star") {
                this.setState({disableSliders: false})
            }

            if(this.state.stellarObjects[this.state.massClass][this.state.index].title === "Red Giant" ||
                this.state.stellarObjects[this.state.massClass][this.state.index].title === "Red Supergiant") {
                showPropertySliders()
            }
        }

        // const leftArrow = () => {
        //     if(this.state.index - 1 === -1) {
        //         this.setState({index: this.state.stellarObjects[this.state.massClass].length - 1})
        //     } else {
        //         this.setState({index: this.state.index - 1})
        //     }
        // }
        //
        // const rightArrow = () => {
        //     if (this.state.index + 1 === this.state.stellarObjects[this.state.massClass].length) {
        //         this.setState({index: 0})
        //     } else {
        //         this.setState({index: this.state.index + 1})
        //     }
        // }

        let max = 100
        // if(this.state.massClass === 1) {
        //     max = 120;
        // }
        //
        // const controls = useAnimation()
        // const hideBox = () => {
        //
        //     controls.start({
        //         x: [0, -2000],
        //         opacity: [1, 0],
        //         transition: {
        //             duration: 1.5,
        //             ease: "easeOut",
        //         },
        //     })
        //
        //     setTimeout(() => {  setClosed() }, 1200);
        // }

        return (
            <>
                <div style={{position: "relative", height: "100%", width: "100%"}}>
                    <StellarPropertiesPopup open={this.state.propertiesPopupOpened} closePopup={cyclePropertiesPopup} />

                    {this.state.popupOpened &&
                        <div style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 4, overflow: "hidden"}}>
                            <ObjectiveSlideOut title={"04 Stellar Life Cycle"}
                                               description={"1. In this final activity, use the sliders to see how mass, temperature, and size are " +
                                               "related as you move through the stages of the stellar life cycle. \n\n 2. You may choose between using a " +
                                               "star of average mass (like the sun) or a supermassive star, mass is the main variable used to " +
                                               "determine which stages the star will go through and how long its lifespan will be. \n\n 3. When viewing " +
                                               "a stage, click the MORE INFO button to see an in depth description. You can also click on the " +
                                               "ALL STAGES button to go back to the stellar life cycle diagram. \n\n 4. Once you are finished exploring, " +
                                               "click on the COMPLETE button to close out the activity."}
                                               setParentState={() => cyclePopup()} />
                        </div>
                    }


                    <Container fluid className={"d-flex h-100 flex-column"} style={{margin: 0, padding: 0, backgroundImage:`url(${stellarBackground})`}}>
                        <Row className={"flex-grow-1"} style={{margin: 0}}>
                            <Col className={"col-2"} style={{color: "white", padding: 0}}>

                                {(this.state.stellarObjects[this.state.massClass][this.state.index].title === "Average Star" ||
                                    this.state.stellarObjects[this.state.massClass][this.state.index].title === "Massive Star") ?
                                    <>
                                        {this.state.stellarObjects[this.state.massClass][this.state.index].title === "Massive Star" ?
                                            // <motion.div
                                            //     animate={controls}
                                            //     style={{height: "100%"}}>
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

                                        <Col className={"align-self-center"} style={{marginTop: 25, backgroundColor: "#212A51"}}>
                                            <p style={{color: "white", fontSize: "28px", fontWeight: "bold"}}>Stellar Life Cycle</p>
                                        </Col>

                                        <Col className={"col-2 ml-auto"} style={{padding: 0, marginTop: "3%"}}>
                                            <Row style={{margin: 0}} className={"justify-content-end"}>
                                                <Button className={"blue-button"} style={{width: 166, textAlign: "left",
                                                    marginBottom: 15}} onClick={() => this.props.history.push({
                                                        pathname: '/activity/info-page',
                                                        state: { title: this.state.stellarObjects[this.state.massClass][this.state.index].title }
                                                    })}>
                                                    More Info
                                                </Button>
                                            </Row>

                                            <Row style={{margin: 0}} className={"justify-content-end"}>
                                                <Row style={{margin: 0}} className={"justify-content-end"}>
                                                    <Button className={"blue-button"} style={{width: 166, textAlign: "left"}}
                                                            onClick={cyclePopup}>Objective</Button>
                                                </Row>
                                            </Row>
                                        </Col>
                                    </Row>

                                    <Row className={"justify-content-center"} style={{margin: 0, minHeight: 450}}>
                                        {/*<Col style={{display: "flex"}} className={"col-2 align-items-center justify-content-end"}>*/}
                                        {/*    <img className={"arrow"} src={leftarrow} height="100px" alt={"left arrow"}*/}
                                        {/*        onClick={leftArrow} />*/}
                                        {/*</Col>*/}

                                        <Col className={"col-6"}>
                                            {(this.state.stellarObjects[this.state.massClass][this.state.index].title === "Average Star" ||
                                                this.state.stellarObjects[this.state.massClass][this.state.index].title === "Massive Star") ?
                                                <>
                                                    {this.state.stellarObjects[this.state.massClass][this.state.index].title === "Massive Star" ?
                                                        <img alt={"Massive Star"} src={this.state.massiveStars[this.state.massiveIndex].image}
                                                             style={{height: this.state.massiveStars[this.state.massiveIndex].imageSize}} />
                                                        :
                                                        <img alt={"Average Star"} src={this.state.averageStars[this.state.averageIndex].image}
                                                             style={{height: this.state.averageStars[this.state.averageIndex].imageSize}} />
                                                    }
                                                </>
                                                :
                                                <img alt={"Stellar Object"} src={this.state.stellarObjects[this.state.massClass][this.state.index].image}
                                                     style={{height: 450}} />
                                            }
                                        </Col>

                                        {/*<Col style={{display: "flex"}} className={"col-2 align-items-center justify-content-start"}>*/}
                                        {/*    <img className={"arrow"} src={rightarrow} height="100px" alt={"right arrow"}*/}
                                        {/*         onClick={rightArrow} />*/}
                                        {/*</Col>*/}
                                    </Row>

                                    <Row style={{margin: 0}}>
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
                                            {/*<TimelineSlider value={this.state.stellarObjects[this.state.massClass]*/}
                                            {/*    [this.state.index].timeValue} changeTime={changeTime}*/}
                                            {/*                children={null} max={max} />*/}
                                            <PropertiesSlider value={this.state.stellarObjects[this.state.massClass]
                                                [this.state.index].timeValue}
                                                              changeValue={changeTime} max={max} />
                                            {(this.state.stellarObjects[this.state.massClass][this.state.index].title !== "Nebula" &&
                                                this.state.stellarObjects[this.state.massClass][this.state.index].title !== "Neutron Star") &&
                                                <h6 style={{color: "white"}}>Life Span:</h6>
                                            }
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
                </div>
            </>
        )
    }
}
export default ObjectPage;
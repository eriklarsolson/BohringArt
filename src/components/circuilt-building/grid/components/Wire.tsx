import React, {useState} from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import { ComponentTypes } from '../../../shared/models/ComponentTypes'
import wire from './images/wire.png'
import cornerwire from './images/corner-wire.png'
import triwire from './images/tri-wire.png'
import crosswire from './images/cross-wire.png'
import rotate from './images/rotate.png'
import { Container, Row, Col } from 'react-bootstrap'
import leftarrow from "../../../stellar-cycle/leftarrow.png"
import rightarrow from "../../../stellar-cycle/rightarrow.png";
import {getComponentAtPos, getComponentType, setComponentType, setCurrentComponentsRotation} from "../Functionality";

let style: React.CSSProperties = {
    cursor: 'move',
}
export interface ComponentProps {
    oneGridStyling: boolean,
    x: number,
    y: number,
    currentComponent: any
}

export const Wire: React.FC<ComponentProps> = ({x, y, oneGridStyling, currentComponent}) => {
    //Set rotation degree of the image below if there is a component here (could be any component or currently selected one)
    let startingRotateDeg = 0
    const componentAtThisPosition = getComponentAtPos(x, y)

    if(componentAtThisPosition !== currentComponent) {
        if(componentAtThisPosition !== undefined) {
            startingRotateDeg = componentAtThisPosition.rotateDeg;
        }
    } else {
        if(currentComponent !== undefined) {
            startingRotateDeg = currentComponent.rotateDeg;
        }
    }

    const [rotateDeg, setRotateDeg] = useState<number>(startingRotateDeg)
    const clickRotate = () => {
        console.log(rotateDeg)
        if (rotateDeg + 90 === 360) {
            setRotateDeg(0)
            setCurrentComponentsRotation(0)
        } else {
            setRotateDeg(rotateDeg + 90)
            setCurrentComponentsRotation(rotateDeg + 90)
        }
    }

    let clicked = false;
    if(currentComponent !== undefined && currentComponent.x === x && currentComponent.y === y) {
        clicked = true;
    }

    let gridStyling: React.CSSProperties  = {height: "100%"};
    if(!oneGridStyling) {
        gridStyling = {
            padding: 0,
        }
    }

    const setMonitor = (monitor: any) => {
        return monitor.isDragging()
    }

    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: ComponentTypes.WIRE },
        collect: (monitor) => ({
            isDragging: setMonitor(monitor),
        }),

    })

    const [images, setImages] = useState<any>([wire, cornerwire, triwire, crosswire])
    const [index, setIndex] = useState<number>(getComponentType)

    //TODO - set component type when cycling here (maybe could be variable in functionality class that is updated what type of wire object we are viewing?)
    const cycleImages = () => {
        if(index + 1 === images.length) {
            setIndex(0)
            setComponentType(0)
        } else {
            setIndex(index + 1)
            setComponentType(index + 1)
        }
    }

    let wireStyling: React.CSSProperties = {}
    if(index === 0 || index === 3) {
        wireStyling = {
            width: "100%"
        }
    } else  if(index === 1) {
        wireStyling = {
            width: "57%",
            float: "right",
            marginTop: 35
        }
    } else  if(index === 2) {
        wireStyling = {
            width: "100%",
            marginTop: 35
        }
    }

    //TODO - Add rotate functionality (look at battery and grid square as examples)

    return (
        <>
            <DragPreviewImage connect={preview} src={wire} />
            <Container fluid style={{...gridStyling}}>
                {clicked && index !== 3 &&
                <div style={{position: "absolute", top: -35, right: -10, marginTop: 1, marginRight: 1}}>
                    <img src={rotate} onClick={clickRotate} />
                </div>
                }

                <div style={{transform: "rotate(" + rotateDeg + "deg)"}}>
                <Row className={"justify-content-center align-items-center"} style={{height: "100%"}}>
                    {oneGridStyling &&
                        <Col className={"col-1"} style={{padding: 0}}>
                            <img src={leftarrow} style={{width: 25, filter: "contrast(0%)"}} onClick={cycleImages}/>
                        </Col>
                    }

                    <Col ref={drag} className={oneGridStyling ? "col-8 align-self-center" : "col-12"}
                         style={{
                             ...style,
                             opacity: isDragging ? 0.5 : 1,
                             height: "100%"
                         }}>
                            {oneGridStyling &&
                                <img src={images[index]} width={100}/>
                            }

                            {!oneGridStyling  &&
                                <img src={images[index]} style={wireStyling} />
                            }
                    </Col>

                    {oneGridStyling &&
                        <Col className={"col-1"} style={{padding: 0}}>
                            <img src={rightarrow} style={{width: 25, filter: "contrast(0%)"}} onClick={cycleImages}/>
                        </Col>
                    }
                </Row>
                </div>
            </Container>
        </>
    )
}

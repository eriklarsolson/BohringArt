import React, {useState} from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import { ComponentTypes } from '../../../shared/models/ComponentTypes'
import switchOn from './images/switch.png'
import switchOff from './images/switch_off.png'
import rotate from './images/rotate.png'
import { Container, Row, Col } from 'react-bootstrap'
import {
    getComponentAtPos,
    setAllSwitchesOn,
    setComponentType,
    setCurrentComponentsRotation
} from "../Functionality";
import resistor from "./images/resistor.png";

let style: React.CSSProperties = {
    cursor: 'move',
}
export interface ComponentProps {
    oneGridStyling: boolean,
    x: number,
    y: number,
    currentComponent: any
}

export const Switch: React.FC<ComponentProps> = ({x, y, oneGridStyling, currentComponent}) => {
    //Set rotation degree of the image below if there is a component here (could be any component or currently selected one)
    let startingRotateDeg = 0
    let isComponentTurnedOn = true;
    let defaultSwitchImage = switchOn;
    const componentAtThisPosition = getComponentAtPos(x, y)

    if(componentAtThisPosition !== currentComponent) {
        if(componentAtThisPosition !== undefined) {
            startingRotateDeg = componentAtThisPosition.rotateDeg;

            if(componentAtThisPosition.componentType === 1) {
                isComponentTurnedOn = false;
                defaultSwitchImage = switchOff
            }
        }
    } else {
        if(currentComponent !== undefined) {
            startingRotateDeg = currentComponent.rotateDeg;

            if(currentComponent.componentType === 1) {
                isComponentTurnedOn = false;
                defaultSwitchImage = switchOff
            }
        }
    }

    const [rotateDeg, setRotateDeg] = useState<number>(startingRotateDeg)
    const [turnedOn, setTurnedOn] = useState<boolean>(isComponentTurnedOn)
    const [switchImage, setSwitchImage] = useState<any>(defaultSwitchImage)

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
        item: { type: ComponentTypes.SWITCH },
        collect: (monitor) => ({
            isDragging: setMonitor(monitor),
        }),

    })

    //Need to be able to click this and toggle it on/off (componentType property of component, 0 is on, 1 is off)
    //TODO - this is the big broken
    const toggleSwitch = () => {
        if(turnedOn) {
            //TODO - if I turn it off and then move it, it crashes. If I turn it off and on and move it, it does not
            setSwitchImage(switchOff)
            setTurnedOn(false)
            setComponentType(1)
            setAllSwitchesOn(false, x, y)
        } else {
            setSwitchImage(switchOn)
            setTurnedOn(true)
            setComponentType(0)
            setAllSwitchesOn(true, x, y)
        }
    }

    return (
        <>
            <DragPreviewImage connect={preview} src={switchImage} />
            <Container fluid style={{...gridStyling}}>
                {clicked &&
                <div style={{position: "absolute", top: -35, right: -10, marginTop: 1, marginRight: 1}}>
                    <img alt={"Rotate"} src={rotate} onClick={clickRotate} />
                </div>
                }

                <Row className={"justify-content-center align-content-center"}>
                    <Col ref={drag}
                         style={{
                             ...style,
                             opacity: isDragging ? 0.5 : 1,
                         }}>
                        <div style={{transform: "rotate(" + rotateDeg + "deg)"}}>
                            {oneGridStyling &&
                            <img alt={"switch"} src={switchImage} onMouseOver={() => setComponentType(0)}
                                 style={{height: "100%", margin: "auto", padding: 5}} />
                            }

                            {!oneGridStyling  &&
                            <img alt={"switch"} src={switchImage} width={"100%"} onClick={toggleSwitch} />
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

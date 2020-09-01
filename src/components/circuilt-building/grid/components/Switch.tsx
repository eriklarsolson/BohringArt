import React, {useState} from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import { ComponentTypes } from '../../../shared/models/ComponentTypes'
import switchOn from './images/switch.png'
import switchOff from './images/switch_off.png'
import rotate from './images/rotate.png'
import { Container, Row, Col } from 'react-bootstrap'
import {
    getComponentAtPos,
    hasCircuit,
    setAllSwitchesOn,
    setComponentType,
    setComponentTypeOnClick
} from "../Functionality";
import {Button} from "@material-ui/core";

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
    const [turnedOn, setTurnedOn] = useState<boolean>(true)
    const [switchImage, setSwitchImage] = useState<any>(switchOn)

    //Set rotation degree of the image below if there is a component here (could be any component or currently selected one)
    let startingRotateDeg = 0
    const componentAtThisPosition = getComponentAtPos(x, y)

    if(componentAtThisPosition !== currentComponent) {
        if(componentAtThisPosition !== undefined) {
            startingRotateDeg = componentAtThisPosition.rotateDeg;

            if(componentAtThisPosition.componentType === 1) {
                setTurnedOn(false)
            }
        }
    } else {
        if(componentAtThisPosition !== undefined) {
            startingRotateDeg = currentComponent.rotateDeg;

            if(currentComponent.componentType === 1) {
                setTurnedOn(false)
            }
        }
    }

    const [rotateDeg, setRotateDeg] = useState<number>(startingRotateDeg)

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
            setAllSwitchesOn(false)
        } else {
            setSwitchImage(switchOn)
            setTurnedOn(true)
            setComponentType(0)
            setAllSwitchesOn(true)
        }
    }

    //TODO - Add rotate functionality (look at battery and grid square as examples)

    return (
        <>
            <DragPreviewImage connect={preview} src={switchImage} />
            <Container fluid style={{...gridStyling}}>
                <Row className={"justify-content-center align-content-center"}>
                    <Col ref={drag}
                         style={{
                             ...style,
                             opacity: isDragging ? 0.5 : 1,
                         }}
                         onClick={toggleSwitch}>
                        {/*<Button onClick={toggleSwitch} style={{backgroundColor: "transparent", width: "100%", height: "100%"}}>*/}
                            <img src={switchImage} width={"100%"} />
                        {/*</Button>*/}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

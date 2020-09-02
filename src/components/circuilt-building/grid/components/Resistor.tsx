import React, {useState} from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import { ComponentTypes } from '../../../shared/models/ComponentTypes'
import resistor from './images/resistor.png'
import rotate from './images/rotate.png'
import { Container, Row, Col } from 'react-bootstrap'
import {getComponentAtPos, setCurrentComponentsRotation} from "../Functionality";

let style: React.CSSProperties = {
    cursor: 'move',
}
export interface ComponentProps {
    oneGridStyling: boolean,
    x: number,
    y: number,
    currentComponent: any
}

export const Resistor: React.FC<ComponentProps> = ({x, y, oneGridStyling, currentComponent}) => {
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
        item: { type: ComponentTypes.RESISTOR },
        collect: (monitor) => ({
            isDragging: setMonitor(monitor),
        }),

    })

    //TODO - Add rotate functionality (look at battery and grid square as examples)

    return (
        <>
            <DragPreviewImage connect={preview} src={resistor} />
            <Container fluid style={{...gridStyling}}>
                {clicked &&
                <div style={{position: "absolute", top: -35, right: -10, marginTop: 1, marginRight: 1}}>
                    <img src={rotate} onClick={clickRotate} />
                </div>
                }

                <Row className={"justify-content-center align-content-center"}>
                    <Col ref={drag}
                         style={{
                             ...style,
                             opacity: isDragging ? 0.5 : 1,
                         }}>
                        <div style={{transform: "rotate(" + rotateDeg + "deg)"}}>
                            <img src={resistor} width={"100%"} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

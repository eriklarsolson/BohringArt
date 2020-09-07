import React, {useState} from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import concave from './images/concave.png'
import { Container, Row, Col } from 'react-bootstrap'
import {TelescopeTypes} from "../../../shared/models/TelescopeTypes";
import {getComponentAtPos} from "../Functionality";
import {setCurrentComponentsRotation} from "../Functionality";
import rotate from "../../../circuilt-building/grid/components/images/rotate.png";
import convex from "./images/convex.png";

let style: React.CSSProperties = {
    cursor: 'move',
}
export interface ComponentProps {
    oneGridStyling: boolean,
    x: number,
    y: number,
    currentComponent: any
}

export const Concave: React.FC<ComponentProps> = ({oneGridStyling, x, y, currentComponent}) => {
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
        if (rotateDeg + 45 === 360) {
            setRotateDeg(0)
            setCurrentComponentsRotation(0)
        } else {
            setRotateDeg(rotateDeg + 45)
            setCurrentComponentsRotation(rotateDeg + 45)
        }
    }

    let clicked = false;
    if(currentComponent !== undefined && currentComponent.x === x && currentComponent.y === y) {
        clicked = true;
    }

    const setMonitor = (monitor: any) => {
        return monitor.isDragging()
    }

    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: TelescopeTypes.CONCAVE },
        collect: (monitor) => ({
            isDragging: setMonitor(monitor),
        }),

    })

    let gridStyling: React.CSSProperties  = {height: "100%"};
    const setGridStyling = () => {
        if(!oneGridStyling) {
            gridStyling = {
                padding: 0,
                height: "100%"
            }
        }
    }
    setGridStyling();

    return (
        <>
            <DragPreviewImage connect={preview} src={concave} />
            <Container fluid style={{...gridStyling}}>
                {clicked &&
                <div style={{position: "absolute", top: -35, right: -10, marginTop: 1, marginRight: 1}}>
                    <img alt={"Rotate"} src={rotate} onClick={clickRotate} />
                </div>
                }

                <Row className={"justify-content-center align-items-center"} style={{height: "100%"}}>
                    <Col ref={drag}
                         style={{
                             ...style,
                             opacity: isDragging ? 0.5 : 1,
                             height: "100%"
                         }}>
                        <img alt={"Concave"} src={concave} style={{height: "100%", padding: 5, transform: "rotate(" + rotateDeg + "deg)"}} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

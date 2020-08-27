import React, {useState} from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import { ComponentTypes } from '../../../shared/models/ComponentTypes'
import wire from './images/wire.png'
import cornerwire from './images/corner-wire.png'
import triwire from './images/tri-wire.png'
import rotate from './images/rotate.png'
import { Container, Row, Col } from 'react-bootstrap'
import leftarrow from "../../../stellar-cycle/leftarrow.png"
import rightarrow from "../../../stellar-cycle/rightarrow.png";
import {getComponentType, setComponentType} from "../Functionality";

let style: React.CSSProperties = {
    cursor: 'move',
}
export interface ComponentProps {
    oneGridStyling: boolean,
    x: number,
    y: number
}

export const Wire: React.FC<ComponentProps> = ({x, y, oneGridStyling}) => {
    //TODO - How did I just figure out I can pass in the x and y values? I WANNA DIEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
    console.log(x)
    console.log(y)
    let gridStyling: React.CSSProperties  = {height: "100%"};
    if(!oneGridStyling) {
        gridStyling = {
            padding: 0,
        }

        //TODO
    } else {
        //TODO
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

    const [images, setImages] = useState<any>([wire, cornerwire, triwire])
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

    return (
        <>
            <DragPreviewImage connect={preview} src={wire} />
            <Container fluid style={{...gridStyling}}>
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

                        {!oneGridStyling && index === 0 &&
                            <img src={images[index]} width={"90%"}/>
                        }

                        {!oneGridStyling && index === 1 &&
                        <img src={images[index]} width={"70%"} style={{marginTop: 25}} />
                        }

                        {!oneGridStyling && index === 2 &&
                        <img src={images[index]} width={"90%"} style={{marginTop: 25}} />
                        }

                    </Col>

                    {oneGridStyling &&
                        <Col className={"col-1"} style={{padding: 0}}>
                            <img src={rightarrow} style={{width: 25, filter: "contrast(0%)"}} onClick={cycleImages}/>
                        </Col>
                    }
                </Row>
            </Container>
        </>
    )
}

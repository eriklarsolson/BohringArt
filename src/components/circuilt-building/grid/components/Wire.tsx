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

let style: React.CSSProperties = {
    cursor: 'move',
}
export interface ComponentProps {
    oneGridStyling: boolean,
}

export const Wire: React.FC<ComponentProps> = ({oneGridStyling}) => {

    const setMonitor = (monitor: any) => {
        return monitor.isDragging()
    }

    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: ComponentTypes.WIRE },
        collect: (monitor) => ({
            isDragging: setMonitor(monitor),
        }),

    })

    let gridStyling: React.CSSProperties  = {};
    const setGridStyling = () => {
        if(!oneGridStyling) {
            gridStyling = {
                padding: 0,
                marginTop: 5
            }
        }
    }
    setGridStyling();

    const [images, setImages] = useState<any>([wire, cornerwire, triwire])
    const [index, setIndex] = useState<number>(0)

    const cycleImages = () => {
        if(index + 1 === images.length) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    return (
        <>
            <DragPreviewImage connect={preview} src={wire} />
            <Container fluid style={{...gridStyling}}>
                <Row className={"justify-content-center align-content-center"} style={{margin: "0 -15 0 -15"}}>
                    <Col ref={drag}
                         style={{
                             ...style,
                             opacity: isDragging ? 0.5 : 1,
                         }}>
                        {/*TODO - add rotate to button style={{transform: "rotate(90deg)"}} */}
                        <img src={images[index]} width={"90%"} />
                    </Col>
                </Row>

                {!oneGridStyling &&
                    <div style={{position: "absolute", bottom: "12%"}}>
                        <Container fluid>
                            <Row>
                                <Col>
                                    <img src={leftarrow} style={{width: 25, filter: "contrast(0%)"}} onClick={cycleImages} />
                                </Col>

                                <Col>
                                    <img src={rightarrow} style={{width: 25, filter: "contrast(0%)"}} onClick={cycleImages} />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                }
            </Container>
        </>
    )
}

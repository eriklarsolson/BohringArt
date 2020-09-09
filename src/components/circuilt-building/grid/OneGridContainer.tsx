import React, {useState} from 'react'
import {OneGrid} from './OneGrid'
import {Col, Container, Row} from 'react-bootstrap'

export interface GridContainerProps {
    componentType: string
    flex: string
    maxWidth: string
}

export const OneGridContainer: React.FC<GridContainerProps> = ({componentType, flex, maxWidth}) => {
    const [components, setComponents] = useState<[{ x: number, y: number, type: string }]>([{ x: 0, y: 0, type: componentType }])

    const [rightValue, setRightValue] = useState<string>("0%")
    const [zIndex, setZIndex] = useState<number>(-1)
    const [tooltipShowing, setTooltipShowing] = useState<boolean>(false)

    const containerStyle: React.CSSProperties = {
        height: 100,
        clipPath: "polygon(0 0, 95% 0, 100% 100%, 0 100%)",
        backgroundColor: 'white',
    }

    let tooltipStyle: React.CSSProperties = {
        position: "absolute",
        left: rightValue,
        top: 0,
        width: 400,
        height: "auto",
        minHeight: 100,
        backgroundColor: "rgba(82, 82, 82, 0.9)",
        transition: ".3s ease-in-out",
        zIndex: zIndex,
        textAlign: "left",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 4% 100%)"
    }

    const showTooltip = () => {
        if(tooltipShowing) {
            setRightValue("0%")
            setZIndex(-1)
            setTooltipShowing(false)
        } else {
            setRightValue("90%")
            setZIndex(1)
            setTooltipShowing(true)
        }
    }

    const hideTooltip = () => {
        setRightValue("0%")
        setZIndex(-1)
        setTooltipShowing(false)
    }

    const getTooltipDescription = () => {
        switch (components[0].type) {
            case 'wire':
                return "Used to direct flow of current, has zero resistance";
            case 'battery':
                return "Device used to provide energy to the circuit. Contains positive and negative sides. From chemical potential differences.Measured in units of volts (V)";
            case 'resistor':
                return "”Resists” the flow of electrons, reduces energy of the current flowing through the circuit. Units: Ohms (Ω)";
            case 'switch':
                return "Object designed to continue or completely stop the flow of current by opening or closing the loop.";
            case 'inductor':
                return "Much like a battery, but it stores electrical energy using an electrical field. Measured in units of farads (F)";
            case 'capacitor':
                return "Stores electrical energy in a magnetic field. Units: Henry (H)U";
            default:
                return "default description";
        }
    }

    // the observe function will return an unsubscribe callback
    return (
        <>
            <Col className={"col-10"} style={{backgroundColor: "transparent", flex: flex, maxWidth: maxWidth, minWidth: 150}}
                 onMouseOver={showTooltip} onMouseOut={hideTooltip}>
                <div className={"clickable-image"} style={containerStyle}>
                    <OneGrid components={components} />
                </div>

                <div style={tooltipStyle}>
                    <Container fluid style={{margin: 10}}>
                        <Row style={{padding: 0}}>
                            <p style={{fontWeight: "bold", margin: 0}}>{components[0].type}</p>
                        </Row>
                        <Row style={{padding: 5}}>
                            <p>{getTooltipDescription()}</p>
                        </Row>
                    </Container>
                </div>
            </Col>
        </>
    )
}

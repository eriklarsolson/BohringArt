import React, {useState} from 'react'
import {OneGrid} from './OneGrid'
import {Container, Row} from 'react-bootstrap'

export interface GridContainerProps {
    componentType: string
    paddingRight: string
    extraRightVal: number
}

export const OneGridContainer: React.FC<GridContainerProps> = ({componentType, paddingRight, extraRightVal}) => {
    const [components, setComponents] = useState<[{ x: number, y: number, type: string }]>([{ x: 0, y: 0, type: componentType }])

    const [rightValue, setRightValue] = useState<string>("0%")
    const [zIndex, setZIndex] = useState<number>(-1)
    const [tooltipShowing, setTooltipShowing] = useState<boolean>(false)

    const containerStyle: React.CSSProperties = {
        width: 200,
        height: 100,
        paddingRight: paddingRight
    }

    // useEffect(() => observe((components: any) => setComponentsList(components)))
    let tooltipStyle: React.CSSProperties = {
        position: "absolute",
        right: rightValue,
        top: 10,
        width: 400,
        height: "auto",
        minHeight: 100,
        backgroundColor: "rgba(82, 82, 82, 0.9)",
        transition: ".3s ease-in-out",
        zIndex: zIndex,
        textAlign: "left",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 2% 100%)"
    }

    const showTooltip = () => {
        if(tooltipShowing) {
            setRightValue("0")
            setZIndex(-1)
            setTooltipShowing(false)
        } else {
            setRightValue(newRightValue + "%")
            setZIndex(1)
            setTooltipShowing(true)
        }
    }

    //Each component has a unique padding right, so gotta combine -75% above for tooltip with the custom padding so they line up when hovering
    const getRightValWithPadding = () => {
        const rightVal = -75
        // const paddingRightVal = paddingRight.substring(0, paddingRight.length - 1)
        //
        // const newVal = rightVal - (parseInt(paddingRightVal) * 2)
        // console.log(paddingRightVal)
        // console.log(newVal)

        return rightVal - extraRightVal
    }
    const newRightValue = getRightValWithPadding()

    const hideTooltip = () => {
        setRightValue("0")
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
            <div className={"d-flex justify-content-center align-content-center"} style={{padding: "10px"}}
                 onMouseOver={showTooltip} onMouseOut={hideTooltip}>
                <div style={containerStyle}>
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
            </div>
        </>
    )
}

import React, {useState} from 'react'
import {OneGrid} from './OneGrid'

export interface GridContainerProps {
    componentType: string,
    paddingRight: string,
    extraRightVal: number
}

export const OneGridContainer: React.FC<GridContainerProps> = ({componentType, paddingRight, extraRightVal}) => {
    const [components, setComponents] = useState<[{ x: number, y: number, type: string }]>([{ x: 0, y: 0, type: componentType }])

    const containerStyle: React.CSSProperties = {
        width: 200,
        height: 100,
        paddingRight: paddingRight
    }

    return (
        <div className={"d-flex justify-content-center align-content-center"} style={{padding: "10px"}}>
            <div style={containerStyle}>
                <OneGrid components={components} />
            </div>
        </div>
    )
}

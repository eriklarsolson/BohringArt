import React from 'react'

export interface SquareProps {
    children: JSX.Element
    showGrid: boolean
    clicked: boolean
    rotateDeg: number,
}

export const Square: React.FC<SquareProps> = ({ children, showGrid, clicked, rotateDeg }) => {

    let squareStyle = {
        width: '100%',
        height: '100%',
        color: 'black',
        backgroundColor: 'transparent',
        border: '1px solid grey',
        transform: "rotate(" + rotateDeg + "deg)",
    }

    if(!showGrid) {
        squareStyle = {
            width: '100%',
            height: '100%',
            color: 'black',
            backgroundColor: 'transparent',
            border: '0',
            transform: "rotate(" + rotateDeg + "deg)",
        }
    }

    if(clicked) {
        squareStyle = {
            width: '100%',
            height: '100%',
            color: 'black',
            backgroundColor: 'transparent',
            border: '3px solid black',
            transform: "rotate(" + rotateDeg + "deg)",
        }
    }

    return (
        <div
            style={{
                ...squareStyle
            }}
        >
            {children}
        </div>
    )
}

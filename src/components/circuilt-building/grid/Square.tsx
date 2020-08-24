import React from 'react'

export interface SquareProps {
    children: JSX.Element
    showGrid: boolean
    clicked: boolean
}

export const Square: React.FC<SquareProps> = ({ children, showGrid, clicked }) => {

    let squareStyle = {
        width: '100%',
        height: '100%',
        color: 'black',
        backgroundColor: '#F8EDDD',
        border: '1px solid grey',
    }

    if(!showGrid) {
        squareStyle = {
            width: '100%',
            height: '100%',
            color: 'black',
            backgroundColor: '#F8EDDD',
            border: '0',
        }
    }

    if(clicked) {
        squareStyle = {
            width: '100%',
            height: '100%',
            color: 'black',
            backgroundColor: '#F8EDDD',
            border: '3px solid black',
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

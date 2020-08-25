import React from 'react'
import {GridSquare} from "./GridSquare";
import {Concave} from "./components/Concave";
import {Viewpoint} from "./components/Viewpoint";
import {FlatMirror} from "./components/FlatMirror";
import {Convex} from "./components/Convex";
import {TelescopeTypes} from "../../shared/models/TelescopeTypes";

export interface GridProps {
    components: any,
    currentComponent: any
    showGrid: boolean,
}

/** Styling properties applied to the board element */
const boardStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
}
/** Styling properties applied to each square element */
const squareStyle: React.CSSProperties = { width: '20%', height: '100%' }

/**
 * The chessboard component
 * @param props The react props
 */
export const TelescopeGrid: React.FC<GridProps> = ({components, currentComponent, showGrid}) => {

    function renderSquare(i: number) {
        const x = i % 5
        const y = Math.floor(i)

        return (
            <div key={i} style={squareStyle}>
                <GridSquare x={x} y={y} components={components} currentComponent={currentComponent} showGrid={showGrid}>
                    {Object.keys(components).map((key, index) =>
                        renderPiece(x, y, components[key].x, components[key].y, components[key].type,))}
                </GridSquare>
            </div>
        )
    }

    function renderPiece(x: number, y: number, compX: number, compY: number, type: string) {
        const isCompHere = x === compX && y === compY

        switch (type) {
            case TelescopeTypes.CONCAVE:
                return isCompHere ? <Concave oneGridStyling={false} /> : null
            case TelescopeTypes.VIEWPOINT:
                return isCompHere ? <Viewpoint oneGridStyling={false} /> : null
            case TelescopeTypes.CONVEX:
                return isCompHere ? <Convex oneGridStyling={false} /> : null
            case TelescopeTypes.FLATMIRROR:
                return isCompHere ? <FlatMirror oneGridStyling={false} /> : null
            default:
                return isCompHere ? <Concave oneGridStyling={false} /> : null
        }
    }

    const squares = []
    for (let i = 0; i < 5; i += 1) {
        squares.push(renderSquare(i))
    }

    return <div style={boardStyle}>{squares}</div>
}

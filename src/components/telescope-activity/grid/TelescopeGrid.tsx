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
const squareStyle: React.CSSProperties = { width: '25%', height: '33%' }

export const TelescopeGrid: React.FC<GridProps> = ({components, currentComponent, showGrid}) => {

    function renderSquare(i: number) {
        const x = i % 4
        const y = Math.floor(i)
        // let y = 0;
        // if(i < 3 && i > 8) {
        //     y = 1
        // } else if(i <= 8) {
        //     y = 2
        // }

        console.log("----")
        console.log(x)
        console.log(y)
        console.log(i)
        console.log("----")
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
                return isCompHere ? <Concave x={x} y={y} currentComponent={currentComponent} oneGridStyling={false} /> : null
            case TelescopeTypes.VIEWPOINT:
                return isCompHere ? <Viewpoint x={x} y={y} currentComponent={currentComponent}  oneGridStyling={false} /> : null
            case TelescopeTypes.CONVEX:
                return isCompHere ? <Convex x={x} y={y} currentComponent={currentComponent}  oneGridStyling={false} /> : null
            case TelescopeTypes.FLATMIRROR:
                return isCompHere ? <FlatMirror x={x} y={y} currentComponent={currentComponent}  oneGridStyling={false} /> : null
            default:
                return isCompHere ? <Concave x={x} y={y} currentComponent={currentComponent}  oneGridStyling={false} /> : null
        }
    }

    const squares = []
    for (let i = 0; i < 12; i += 1) {
        squares.push(renderSquare(i))
    }

    return (
        <>
            <div style={boardStyle}>
                {squares}
            </div>
        </>
    )
}

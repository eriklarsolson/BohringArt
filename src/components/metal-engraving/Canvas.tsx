import React, {useCallback, useEffect, useState} from 'react';
import canvasBackground from './metal_background.png'
import {
    TOOL_ELLIPSE,
    TOOL_ERASER,
    TOOL_LASER,
    TOOL_OPTICS,
    TOOL_PRISM,
    TOOL_RECTANGLE,
    TOOL_STAR,
    TOOL_TRIANGLE
} from "./MetalEngraving";

interface CanvasProps {
    width: number;
    height: number;
    canvasRef: any;
    tool: any;
    color: string;
    size: number;
    toolActive: boolean;
}

type Coordinate = {
    x: number;
    y: number;
};

//TODO
// https://www.dummies.com/web-design-development/site-development/how-to-use-a-pattern-as-a-fill-or-stroke-with-the-html5-canvas-tag/
// Add metal engrave pattern to line

const Canvas = ({ width, height, canvasRef, tool, color, size, toolActive }: CanvasProps) => {
    const [isPainting, setIsPainting] = useState(false);
    const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(undefined);
    const [newMousePosition, setNewMousePosition] = useState<Coordinate | undefined>(undefined);

    const startPaint = useCallback((event: MouseEvent) => {
        const coordinates = getCoordinates(event);
        if (coordinates) {
            setMousePosition(coordinates);
            setIsPainting(true);
        }
    }, [mousePosition]);

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const canvas: HTMLCanvasElement = canvasRef.current;
        canvas.addEventListener('mousedown', startPaint);
        return () => {
            canvas.removeEventListener('mousedown', startPaint);
        };
    }, [startPaint]);

    //TODO - Need to change mousemove to mouse up and down for paint and exit paint functions. Set mouse positions on down and up and then draw
    const paint = useCallback(
        (event: MouseEvent) => {
            if (isPainting) {
                const newMousePosition = getCoordinates(event);

                if(tool === TOOL_ERASER || tool === TOOL_LASER || tool === TOOL_OPTICS) {
                    if (mousePosition && newMousePosition) {
                        draw(mousePosition, newMousePosition);
                        setMousePosition(newMousePosition);
                    }
                } else {
                    setNewMousePosition(newMousePosition);
                }
            }
        },
        [isPainting, mousePosition, newMousePosition]
    );

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const canvas: HTMLCanvasElement = canvasRef.current;
        canvas.addEventListener('mousemove', paint);
        return () => {
            canvas.removeEventListener('mousemove', paint);
        };
    }, [paint]);

    const exitPaint = useCallback(() => {
        if (mousePosition && newMousePosition) {
            if(tool !== TOOL_ERASER && tool !== TOOL_LASER && tool !== TOOL_OPTICS) {
                draw(mousePosition, newMousePosition);
            }
        }
        setIsPainting(false);
        setMousePosition(undefined);
    }, [mousePosition, newMousePosition]);

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const canvas: HTMLCanvasElement = canvasRef.current;
        canvas.addEventListener('mouseup', exitPaint);
        canvas.addEventListener('mouseleave', exitPaint);
        return () => {
            canvas.removeEventListener('mouseup', exitPaint);
            canvas.removeEventListener('mouseleave', exitPaint);
        };
    }, [exitPaint]);

    const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
        if (!canvasRef.current) {
            return;
        }


        const canvas: HTMLCanvasElement = canvasRef.current;
        const rect = canvas.getBoundingClientRect()

        return { x: (event.x - rect.left) , y: (event.y  - rect.top)};
    };

    const drawEllipsePolifyll = (centerX: number, centerY: number, radiusX: number, radiusY: number) => {
        let xPos;
        let yPos;
        let i = 0;
        for (i; i < 2 * Math.PI; i += 0.01) {
            xPos = centerX - (radiusY * Math.sin(i)) * Math.sin(0) + (radiusX * Math.cos(i)) * Math.cos(0);
            yPos = centerY + (radiusX * Math.cos(i)) * Math.sin(0) + (radiusY * Math.sin(i)) * Math.cos(0);
            const canvas: HTMLCanvasElement = canvasRef.current;
            const context = canvas.getContext('2d');
            if (i === 0) {
                context?.moveTo(xPos, yPos);
            } else {
                context?.lineTo(xPos, yPos);
            }
        }
    };

    //https://rlvandaveer.wordpress.com/2014/01/05/how-to-calculate-a-lighter-or-darker-shade-of-a-color-using-javascript/
    function lighten(color: string, luminosity: number) {

        // validate hex string
        color = String(color).replace(/[^0-9a-f]/gi, '');
        if (color.length < 6) {
            color = color[0]+ color[0]+ color[1]+ color[1]+ color[2]+ color[2];
        }
        luminosity = luminosity || 0;

        // convert to decimal and change luminosity
        var newColor = "#", c, i, black = 0, white = 255;
        for (i = 0; i < 3; i++) {
            c = parseInt(color.substr(i*2,2), 16);
            c = Math.round(Math.min(Math.max(black, c + (luminosity * white)), white)).toString(16);
            newColor += ("00"+c).substr(c.length);
        }
        return newColor;
    }



    const getBurnColor = (color: string) => {
        switch(color) {
            case "#FFFFFF":
                return lighten("#000000", 0.6);
            case "#EB3324":
                return lighten("#000000", 0.5);
            case "#F2F551":
                return lighten("#000000", 0.4);
            case "#76FA68":
                return lighten("#000000", 0.3);
            case "#3686F7":
                return lighten("#000000", 0.2);
            case "#EA3690":
                return lighten("#000000", 0.1);
            default:
                return "white"
        }
    }

    const getLensColor = (color: string) => {
        return lighten(color, -0.3)
    }

    function GetPixel(x: any, y: any) {
        const canvas: HTMLCanvasElement = canvasRef.current;
        const context = canvas.getContext('2d');
        var p = context?.getImageData(x, y, 1, 1).data;
        if (p) {
            return "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
        }

        return null;
    }

    function rgbToHex(r: number, g: number, b: number) {
        if (r > 255 || g > 255 || b > 255)
            throw "Invalid color component";
        return ((r << 16) | (g << 8) | b).toString(16);
    }

    const draw = (originalMousePosition: Coordinate, newMousePosition: Coordinate) => {

        if (!canvasRef.current) {
            return;
        }

        if(toolActive) {
            const canvas: HTMLCanvasElement = canvasRef.current;
            const context = canvas.getContext('2d');
            if (context) {
                context.globalCompositeOperation = "source-over"
                if (tool === TOOL_ERASER || tool === TOOL_LASER || tool === TOOL_OPTICS) {

                    if (tool === TOOL_LASER) {
                        context.strokeStyle = getBurnColor(color);
                    } else if (tool === TOOL_OPTICS) {
                        context.strokeStyle = getLensColor(getBurnColor(color));
                    } else if (tool === TOOL_ERASER) {
                        context.globalCompositeOperation = "destination-out";
                        context.strokeStyle = "rgba(0,0,0,1)";
                    }
                    context.lineJoin = 'round';
                    context.lineWidth = size;

                    context.beginPath();

                    // //TODO - Make it so that its only for darker colors than what your current choice is (also doesn't really fully work right now)
                    // //Don't allow laser to draw over other lasers of dark engraving
                    // const oldPixelColor = GetPixel(originalMousePosition.x+2, originalMousePosition.y+2);
                    // let otherColorFound = false;
                    // if(oldPixelColor !== "#000000" && oldPixelColor !== getBurnColor(color)) {
                    //     otherColorFound = true;
                    // }

                    context.moveTo(originalMousePosition.x, originalMousePosition.y);

                    // //Don't allow laser to draw over other lasers of dark engraving
                    // const newPixelColor = GetPixel(newMousePosition.x, newMousePosition.y);
                    // if(!otherColorFound) {
                    //     if (newPixelColor !== "#000000" && newPixelColor !== getBurnColor(color)) {
                    //         otherColorFound = true;
                    //     }
                    // }
                    //
                    // if(tool !== TOOL_ERASER && otherColorFound) {
                    //     context.strokeStyle = "transparent";
                    // }

                    context.lineTo(newMousePosition.x, newMousePosition.y);
                    context.closePath();
                    context.stroke();
                } else if (tool === TOOL_PRISM) {

                    //TODO - Needs some work

                    const startX = newMousePosition.x < originalMousePosition.x ? newMousePosition.x : originalMousePosition.x;
                    const startY = newMousePosition.y < originalMousePosition.y ? newMousePosition.y : originalMousePosition.y;
                    const widthX = Math.abs(originalMousePosition.x - newMousePosition.x);
                    const widthY = Math.abs(originalMousePosition.y - newMousePosition.y);
                    // context.fillStyle = item.fill;

                    for(let i = 1; i < 6; i++) {
                        context.beginPath();
                        context.lineWidth = size;
                        context.strokeStyle = lighten("#000000", (i / 10));
                        context.fillStyle = lighten("#000000", (i / 10));
                        context.rect(startX, (startY / 5) * i, widthX, widthY);
                        context.stroke();
                        context.fill();
                        context.closePath();
                    }
                    // const image = new Image();
                    // image.src = optics
                    //
                    // context?.drawImage(image, startX, startY, widthX, widthY);
                } else if (tool === TOOL_ELLIPSE) {
                    const startX = originalMousePosition.x;
                    const startY = originalMousePosition.y;
                    const endX = newMousePosition.x
                    const endY = newMousePosition.y;
                    const radiusX = (endX - startX) * 0.5;
                    const radiusY = (endY - startY) * 0.5;
                    const centerX = startX + radiusX;
                    const centerY = startY + radiusY;

                    context.save();
                    context.beginPath();
                    context.lineWidth = size;
                    context.strokeStyle = getBurnColor(color);
                    // context.fillStyle = item.fill;
                    drawEllipsePolifyll(centerX, centerY, radiusX, radiusY);
                    context.stroke();
                    // if (item.fill) context.fill();
                    context.closePath();
                    context.restore();
                } else if (tool === TOOL_RECTANGLE) {
                    const startX = newMousePosition.x < originalMousePosition.x ? newMousePosition.x : originalMousePosition.x;
                    const startY = newMousePosition.y < originalMousePosition.y ? newMousePosition.y : originalMousePosition.y;
                    const widthX = Math.abs(originalMousePosition.x - newMousePosition.x);
                    const widthY = Math.abs(originalMousePosition.y - newMousePosition.y);

                    context.beginPath();
                    context.lineWidth = size;
                    context.strokeStyle = getBurnColor(color);
                    // context.fillStyle = item.fill;
                    context.rect(startX, startY, widthX, widthY);
                    context.stroke();
                    // if (item.fill) context.fill();
                } else if (tool === TOOL_TRIANGLE) {
                    const startX = newMousePosition.x < originalMousePosition.x ? newMousePosition.x : originalMousePosition.x;
                    const startY = newMousePosition.y < originalMousePosition.y ? newMousePosition.y : originalMousePosition.y;
                    const widthX = Math.abs(originalMousePosition.x - newMousePosition.x);
                    const widthY = Math.abs(originalMousePosition.y - newMousePosition.y);
                    context.beginPath();
                    context.lineWidth = size;
                    context.strokeStyle = getBurnColor(color);
                    context.moveTo(startX, startY);

                    //TODO - To create smaller triangle, divide the widthX / 2

                    context.lineTo(startX + widthX, startY + widthY);
                    context.lineTo(startX - widthX, startY + widthY);
                    context.closePath()
                    context.stroke();
                } else if (tool === TOOL_STAR) {
                    //TODO - Currently broken (Also breaks everything else after using)
                    const startX = newMousePosition.x < originalMousePosition.x ? newMousePosition.x : originalMousePosition.x;
                    const startY = newMousePosition.y < originalMousePosition.y ? newMousePosition.y : originalMousePosition.y;

                    context.save();
                    context.beginPath();
                    context.lineWidth = size;
                    context.strokeStyle = getBurnColor(color);
                    context.translate(startX, startY); //TODO - Has to do with this line moving the 0,0 position of grid
                    context.moveTo(0,0-9);
                    for (var i = 0; i < 5; i++) {
                        context.rotate(Math.PI / 5);
                        context.lineTo(0, 0 - (9*6));
                        context.rotate(Math.PI / 5);
                        context.lineTo(0, 0 - 9);
                    }
                    context.closePath();
                    context.stroke();
                    // context.restore();
                }
            }
        }
    };

    return <canvas ref={canvasRef} height={height} width={width} style={{ backgroundImage:`url(${canvasBackground})` }} />;
};

Canvas.defaultProps = {
    width: "829px",
    height: "675px",
};

export default Canvas;

import {ComponentTypes} from "../../shared/models/ComponentTypes";

let observers: PositionObserver[] = []
export type PositionObserver = ((component: {x: number, y: number, type: string, voltage: number, rotateDeg: number, }) => void) | null

//TODO - what new fields are needed for activity to work?
// 1. componentType used for wires (straight, corner, 3-4 prong) & switch (toggle on/off)
// 2.

let currentComponent = 0;
let currentLevel = 0;
let passed = false;
let boardCurrentIssue = ""
let boardHasIssues = false;
let currentX = -1;
let currentY = -1;
let components: { x: number; y: number; type: string, voltage: number, rotateDeg: number}[] =  []

export function getComponents(): any {
    return components;
}

export function getCurrentComponent(): any {
    return components[currentComponent];
}

export function boardHasIssue(): boolean {
    return boardHasIssues;
}

export function getCurrentBoardIssue(): string {
    return boardCurrentIssue;
}

export function setBoardHasIssue(issue: boolean) {
    boardHasIssues = issue;
}


export function deleteCurrentComponent() {
    components.splice(currentComponent, 1);
    currentComponent = currentComponent - 1
    emitChange();
}

export function getCurrentX(): any {
    return currentX;
}

export function getCurrentY(): any {
    return currentY;
}

export function getPassed() {
    return passed;
}

export function setCurrentComponentsVoltage(voltage: number) {
    if (components.length > 0) {
        components[currentComponent].voltage = voltage;
        emitChange();
    }
}

export function setCurrentComponentsRotation(rotateDeg: number) {
    if (components.length > 0) {
        components[currentComponent].rotateDeg = rotateDeg;
        console.log(components[currentComponent])
        emitChange();
    }
}

export function getTotalVoltage(): number {
    let total = 0;

    for(var i = 0; i < components.length; i++) {
        total += components[i].voltage
    }

    return total;
}

export function setCurrentLevel(newLevel: number) {
    currentLevel = newLevel
}

export function setCurrentComponent(x: number, y: number) {
    currentX = x;
    currentY = y;

    const samePlaceComponents = components.filter(component => component.x === x && component.y === y)
    if(samePlaceComponents.length > 0) {
        const index = getIndex(samePlaceComponents[0], components);
        currentComponent = index;
        emitChange();
    }
}

export function resetPositions() {
    currentX = -1;
    currentY = -1;
}

export function setComponentsList(newComponents: any): void {
    components = newComponents
    emitChange()
}

function emitChange() {
    observers.forEach((o) => o && o(components[currentComponent]))
}

export function observe(o: PositionObserver): () => void {
    observers.push(o)
    emitChange()

    return (): void => {
        observers = observers.filter((t) => t !== o)
    }
}

//TODO - Occasionally can't put in position 0,0 if other object is there. Tried different logic with return statement
// before but breaks app (can't move existing comps), so coming back later
export function canMoveComponent(toX: number, toY: number): boolean {
    if(components.length ===  0) {
        const x = 0
        const y = 0
        const dx = toX - x
        const dy = toY - y

        //Can move anywhere on grid
        return (Math.abs(dx) >= 0 || Math.abs(dy) >= 0)
    } else {
        const x = components[currentComponent].x
        const y = components[currentComponent].y
        const dx = toX - x
        const dy = toY - y


        //Can move anywhere on grid
        return (Math.abs(dx) > 0 || Math.abs(dy) > 0)
    }
}

export function getIndex(value: any, arr: string | any[]) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }
    }
    return -1; //to handle the case where the value doesn't exist
}

export function moveComponent(toX: number, toY: number, type: string): void {
    const samePlaceComponents = components.filter(component => component.x === toX && component.y === toY);

    if(samePlaceComponents.length > 0) {
        const index = getIndex(samePlaceComponents[0], components);
        components[index] = {x: toX, y: toY, type: type, voltage: components[currentComponent].voltage, rotateDeg: components[currentComponent].rotateDeg}

        components.splice(currentComponent, 1);
    } else {
        if(components[currentComponent] !== undefined) {
            components.push({
                x: toX,
                y: toY,
                type: type,
                voltage: components[currentComponent].voltage,
                rotateDeg: components[currentComponent].rotateDeg
            });
        } else {
            components.push({
                x: toX,
                y: toY,
                type: type,
                voltage: 0,
                rotateDeg: 0
            });
        }

        if(currentX !== -1 && currentY !== -1) {
            components.splice(currentComponent, 1);
        }
    }

    currentComponent = components.length - 1;

    checkForErrors();
    checkIfPassed();

    emitChange();
}

//TODO - Properties of objects
// NOTE: Can resistance just be negative voltage?
// Battery
//  1. Can change voltage here
//  2. If batteries place directly next to each other in same direction, voltages add up
//  3. If batteries placed in parallel, voltage stays same but currents add up
// Resistor -> NEED EXPLANATION ON THIS!
//  1. Slows down electrons (decrease voltage) Set voltage to -1 on these
//  2. When put in series, resistances are just added normally
//  3. When put in parallel, resistances are added inversely. Take the inverse of each resistance, add it up,
//      and then take the inverse of the sum. The total resistance will be less than each individual one.
//  4. CAN CHANGE RESISTANCE HERE SO NEED NEW SLIDER
// Capacitor
//  1. Stores electricity (for a certain time, so time component needed - great)
//  2. In series, capacitance is added using inverse rule
//  3. Put in parallel, capacitances are added normally, but the voltage would add together to produce the total voltage from the battery
//  4. Can change voltage here I believe
// Inductor
//  1. Useful in resisting additional flow of current initially (Requires another time component, yay)
//  2. CAN CHANGE RESISTANCE HERE SO NEED NEW SLIDER
// Switch
//  1. Can toggle on and off to disable/enable circuit

//Check if you short circuited the board
//TODO
// Current list of things to check for:
//  1. Check if circuit is only wires and battery and if so, short-circuit
//  2. If two batteries in parallel not same voltage, short circuit
//  3.
function checkForErrors() {
    //TODO - Eventually going to need a function to check if there is a parallel circuit here

    //TODO - Need to have this only be checked when a full circuit is complete, not every time there is a new piece
    // let boardOnlyContainsWiresAndBatteries = true;

    //This (inefficient) method loops through each component in the list and finds all components around it
    //TODO - Need to get rid of square from +1 x, +1 y. Only check blocks from right next to components
    for(let i = 0; i < components.length; i++) {
        // if(components[i].type !== ComponentTypes.WIRE && components[i].type !== ComponentTypes.BATTERY) {
        //     boardOnlyContainsWiresAndBatteries = false;
        // }

        let componentsAroundCurrent = []
        for(let j = 0; j < components.length; j++) {
            if(components[i] !== components[j]) {
                if ((components[i].x + 1 === components[j].x || components[i].x - 1 === components[j].x || components[i].x === components[j].x) &&
                    (components[i].y + 1 === components[j].y || components[i].y - 1 === components[j].y || components[i].y === components[j].y)) {
                    componentsAroundCurrent.push(components[j])
                }
            }
        }
        console.log("components around: " + componentsAroundCurrent)

        //TODO - Check for all logic here from list above
        for(let k = 0; k < componentsAroundCurrent.length; k++) {
            if(components[i].type === componentsAroundCurrent[k].type) {
                //TODO - Kinda works
                if((components[i].rotateDeg % 180) !== (componentsAroundCurrent[k].rotateDeg % 180)) {
                    boardHasIssues = true;
                    boardCurrentIssue = "Battery directions not correct"
                }
            }
        }
    }
}

function checkIfPassed(): void {
    //TODO - Need to check if there any breaks in the circuit. Don't run this function if there is
    // Also need to check if circuit is all wires and buttons here, or should I do that above

    hasPath()

    if(!boardHasIssues) {


        const passingLevel: { x: number; y: number; type: string, voltage: number, rotateDeg: number}[] = getCurrentLevelPass()

        //TODO - Doesn't work
        if(passingLevel.every(v => components.includes(v))) {
            passed = true;
        }
    }
}

//TODO - Do I need to generate a 3d matrix for the var below or can I just the current components list array that I have?

// Method for finding and printing
// whether the path exists or not
function hasPath() {
    //Build matrix variable here
    let matrix: Array<Array<number>> = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ]

    for(var i = 0; i < components.length; i++) {
        matrix[components[i].y][components[i].x] = 3
    }

    matrix[1][6] = 1
    matrix[4][6] = 2

    console.log(matrix)

    // Defining visited array to keep
    // track of already visited indexes
    let visited: Array<Array<boolean>> = [
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false],
    ]

    // Flag to indicate whether the
    // path exists or not
    let flag = false;

    for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
        // if matrix[i][j] is source
        // and it is not visited
        if (matrix[i][j] === 1 && !visited[i][j])

            // Starting from i, j and
            // then finding the path
            if (isPath(i, j, visited, matrix)) {
                // if path exists
                flag = true;
                break;
            }
    }
}
    if (flag)
        console.log("yes there is a path")
    else
        console.log("no path found brother")
}

// Method for checking boundaries
function isSafe(i: number, j: number, matrix: Array<Array<number>>) {
    return i >= 0 && i < matrix.length && j >= 0 && j < matrix[0].length;

}

// Returns true if there is a
// path from a source (a
// cell with value 1) to a
// destination (a cell with
// value 2)
function isPath(i: number, j: number, visited: Array<Array<boolean>>, matrix: Array<Array<number>>)
{

    // Checking the boundaries, walls and
    // whether the cell is unvisited
    if (isSafe(i, j, matrix) && matrix[i][j] !== 0 && !visited[i][j]) {
        // Make the cell visited
        visited[i][j] = true;

        // if the cell is the required
        // destination then return true
        if (matrix[i][j] === 2) return true;

        // traverse up
        const up = isPath(i - 1, j, visited, matrix);

        // if path is found in up
        // direction return true
        if (up)
            return true;

        // traverse left
        const left = isPath(i, j - 1, visited, matrix);

        // if path is found in left
        // direction return true
        if (left) return true;

        // traverse down
        const down = isPath(i + 1, j, visited, matrix);

        // if path is found in down
        // direction return true
        if (down)
            return true;

        // traverse right
        const right = isPath(i, j + 1, visited, matrix);

        // if path is found in right
        // direction return true
        if (right)
            return true;
    }
    // no path has been found
    return false;
}
function getCurrentLevelPass(): any {
    if(currentLevel === 0) {
        let components: { x: number; y: number; type: string, voltage: number, rotateDeg: number}[] =  []
        components.push({x: 0, y: 0, type: ComponentTypes.BATTERY, voltage: 0, rotateDeg: 0})
        return components
    } else if(currentLevel === 1) {
        let components: { x: number; y: number; type: string, voltage: number, rotateDeg: number}[] =  []
        components.push({x: 0, y: 0, type: ComponentTypes.BATTERY, voltage: 0, rotateDeg: 0})
        return components
    } else if(currentLevel === 2) {
        let components: { x: number; y: number; type: string, voltage: number, rotateDeg: number}[] =  []
        components.push({x: 0, y: 0, type: ComponentTypes.BATTERY, voltage: 0, rotateDeg: 0})
        return components
    }

    return []
}


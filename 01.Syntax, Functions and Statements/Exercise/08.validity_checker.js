function solve(pointsCoordinates) {
    let x1 = pointsCoordinates[0];
    let y1 = pointsCoordinates[1];
    let x2 = pointsCoordinates[2];
    let y2 = pointsCoordinates[3];

    let firstPointToZeroDistance = Math.hypot(x1 - 0, y1 - 0);
    let secondPointToZeroDistance = Math.hypot(x2 - 0, y2 - 0);
    let firstPointToSecondDistance = Math.hypot(x1 - x2, y1 - y2);

    console.log(`{${x1}, ${y1}} to {0, 0} is ${getValidationMessage(firstPointToZeroDistance)}`)
    console.log(`{${x2}, ${y2}} to {0, 0} is ${getValidationMessage(secondPointToZeroDistance)}`)
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${getValidationMessage(firstPointToSecondDistance)}`)

    function getValidationMessage(distance) {
        return Number.isInteger(distance) ? 'valid' : 'invalid'
    }
}

solve([3, 0, 0, 4]);
solve([2, 1, 1, 1]);
function solve(inputArr) {

    let rows = inputArr[0];
    let cols = inputArr[1];
    let matrix = getEmptyMatrix(rows, cols);
    let targetRow = inputArr[2];
    let targetCol = inputArr[3];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max
            (Math.abs(row - targetRow),
                Math.abs(col - targetCol)) + 1;
        }
    }

    matrix.forEach(x => console.log(x.join(" ")));

    function getEmptyMatrix(rows, cols) {
        let matrix = [];
        for (let row = 0; row < rows; row++) {
            matrix[row] = [];
        }
        return matrix;
    }
}

solve([5, 5, 2, 2]);
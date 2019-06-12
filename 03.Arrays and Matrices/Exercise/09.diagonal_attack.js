function solve(input) {

    let matrix = getMatrix();
    let firstDiagonalNums = getFirstDiagonal();
    let secondDiagonalNums = getSecondDiagonal();
    let firstDiagonalSum = getSum(firstDiagonalNums);
    let secondDiagonalSum = getSum(secondDiagonalNums);

    if (firstDiagonalSum === secondDiagonalSum){
        handleMatrix();
    }

    matrix.forEach(x => console.log(x.join(" ")));

    function handleMatrix() {
        let firstIndex = 0;
        let lastIndex = matrix[0].length - 1;

        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (col !== firstIndex && col !== lastIndex){
                    matrix[row][col] = firstDiagonalSum;
                }
            }
            firstIndex++;
            lastIndex--;
        }
    }

    function getSum(diagonal) {
        return diagonal.reduce((a, c) => a + c);
    }

    function getSecondDiagonal() {
        let diagonal = [];
        let col = matrix[0].length - 1;

        for (let row = 0; row < matrix.length; row++) {
            diagonal.push(matrix[row][col]);
            col--;
        }

        return diagonal;
    }

    function getFirstDiagonal() {
        let diagonal = [];
        let col = 0;

        for (let row = 0; row < matrix.length; row++) {
            diagonal.push(matrix[row][col]);
            col++;
        }

        return diagonal;
    }

    function getMatrix() {
        let matrix = [];

        for (let row = 0; row < input.length; row++) {
            let currentRow = input[row].split(' ').map(Number);
            matrix.push(currentRow);
        }

        return matrix;
    }
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);

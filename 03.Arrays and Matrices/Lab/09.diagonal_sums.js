function solve(matrix) {

    let firstDiagonalNums = getFirstDiagonal();
    let secondDiagonalNums = getSecondDiagonal();
    let firstDiagonalSum = getSum(firstDiagonalNums);
    let secondDiagonalSum = getSum(secondDiagonalNums);

    console.log(firstDiagonalSum + ' ' + secondDiagonalSum);
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
}
solve([
    [20, 40],
    [10, 60]]
);

solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);
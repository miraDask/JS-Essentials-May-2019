function solve(matrix) {
    let biggestElement = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < matrix.length; row++) {
        let currentRow = matrix[row];
        let currentBiggestElement = Math.max(...currentRow);

        if (currentBiggestElement > biggestElement){
            biggestElement = currentBiggestElement;
        }
    }

    console.log(biggestElement);
}

solve([
    [20, 50, 10],
    [8, 33, 145]]
);
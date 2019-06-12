function solve(matrix) {
    let sumOfNumsInEveryRowIsEqual = rowsCheck(matrix);
    let magicSum = 0;

    if (sumOfNumsInEveryRowIsEqual === false){
        console.log(false);
    } else  {
        magicSum = matrix[0].reduce((a, c) => a + c);
        let sumOfNumsInEveryColIsEqual = colCheck(matrix, magicSum);
        console.log(sumOfNumsInEveryColIsEqual);
    }

    function colCheck(matrix, magicSum) {
            for (let col = 0; col < matrix[0].length; col++) {
                let currentColNums = [];
                for (let row = 0; row < matrix.length; row++) {
                   currentColNums.push(matrix[row][col]);
                }

                let currentColSum = currentColNums .reduce((a, c) => a + c);
                if (currentColSum !== magicSum){
                    return false;
                }
            }

            return true;
    }

    function rowsCheck(matrix) {
        let sumOfNumsInFirstRow = matrix[0].reduce((a, c) => a + c);
        for (let row = 1; row < matrix.length; row++) {
            let sumOfNumsInCurrentRow = matrix[row].reduce((a, c) => a + c);
            if (sumOfNumsInCurrentRow !== sumOfNumsInFirstRow){
                return false;
            }
        }

        return true;
    }
}

solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
);

solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
);

solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
)
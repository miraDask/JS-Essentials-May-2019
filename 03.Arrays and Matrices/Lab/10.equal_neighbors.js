function solve(matrix) {
    let equalElementsCount = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {

            if (row !== matrix.length - 1 && col !== matrix[row].length - 1) {
                let firstElement = matrix[row][col];
                let secondElement = matrix[row][col + 1];
                let thirdElement = matrix[row + 1][col];

                if (firstElement === secondElement) {
                    equalElementsCount++;
                }

                if (firstElement === thirdElement) {
                    equalElementsCount++;
                }
            } else {

                if (row === matrix.length - 1){
                    let firstElement = matrix[row][col];
                    let secondElement = matrix[row][col + 1];
                    if (firstElement === secondElement) {
                        equalElementsCount++;
                    }
                } else {
                    if (col === matrix[row].length - 1) {
                        let firstElement = matrix[row][col];
                        let secondElement = matrix[row + 1][col];
                        if (firstElement === secondElement) {
                            equalElementsCount++;
                        }
                    }
                }
            }
        }
    }

    console.log(equalElementsCount);
}

solve([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']
]);


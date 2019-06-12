function solve(rows, columns) {
    let currentNum = 1;
    let lastNum = rows * columns;
    let matrix = createEmptyMatrix();
    fillTheMatrix();
    matrix.forEach(x => console.log(x.join(" ")));

    function createEmptyMatrix() {
        let matrix = [];
        for (let row = 0; row < rows; row++) {
            let currentRow = [];
            for (let col = 0; col < columns; col++) {
                currentRow.push(0);
            }

            matrix.push(currentRow);
        }

        return matrix;
    }

    function fillTheMatrix() {
        function fillLeftToRight(currentRow) {
            for (let col = 0; col < matrix[currentRow].length; col++) {
                if (matrix[currentRow][col] === 0) {
                    matrix[currentRow][col] = currentNum;
                    currentNum++;
                }
            }
        }

        function fillUpToDown(currentCol) {
            for (let row = 0; row < matrix.length; row++) {
                if (matrix[row][currentCol] === 0) {
                    matrix[row][currentCol] = currentNum;
                    currentNum++;
                }
            }
        }

        function fillRightToLeft(currentRow) {
            for (let col = matrix[currentRow].length; col >= 0; col--) {
                if (matrix[currentRow][col] === 0) {
                    matrix[currentRow][col] = currentNum;
                    currentNum++;
                }
            }
        }

        function fillDownToUp(currentCol) {
            for (let row = matrix.length - 1; row >= 0; row--) {
                if (matrix[row][currentCol] === 0) {
                    matrix[row][currentCol] = currentNum;
                    currentNum++;
                }
            }
        }

        let currentRow = 0;
        let currentRowFromEnd = matrix.length - 1;
        let currentColFromStart = 0;
        let currentColFromEnd = matrix[0].length - 1;

        while (currentNum <= lastNum) {
            fillLeftToRight(currentRow++);
            fillUpToDown(currentColFromEnd--);
            fillRightToLeft(currentRowFromEnd--);
            fillDownToUp(currentColFromStart++);
        }
    }
}

solve(5, 5);
//solve(3, 3);
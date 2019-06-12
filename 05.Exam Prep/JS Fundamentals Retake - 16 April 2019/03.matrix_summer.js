function solve(firstMatrix, secondMatrix) {

    let resultMatrix = [];

    for (let row = 0; row < firstMatrix.length; row++) {
        let reminder = 0;
        resultMatrix[row] = [];

        for (let col = 0; col < firstMatrix[row].length; col++) {
            let sum = firstMatrix[row][col] + secondMatrix[row][col] + reminder;
            reminder = 0;

            if (sum >= 10) {
                reminder += sum - 9;
                resultMatrix[row].push(9);
            } else {
                resultMatrix[row].push(sum);
            }
        }

        while (reminder > 0) {
            if (reminder >= 10) {
                reminder -= 9;
                resultMatrix[row].push(9);
            } else {
                resultMatrix[row].push(reminder);
                reminder = 0;
            }
        }
    }
    console.log(JSON.stringify(resultMatrix));
}

solve(//
    [[9, 9], [9, 9]],
    [[9, 9], [9, 9]]
);
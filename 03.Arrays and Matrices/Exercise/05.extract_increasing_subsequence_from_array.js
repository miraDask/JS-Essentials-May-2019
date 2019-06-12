function solve(inputArr) {
    let lastBiggestNum = inputArr[0];
    let filteredArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        let currentNum = inputArr[i];
        if (currentNum >= lastBiggestNum) {
            filteredArr.push(currentNum);
            lastBiggestNum = currentNum;
        }
    }

    console.log(filteredArr.join('\n'));
}

solve([20, 3, 2, 15, 6, 1]);

//solve([1, 2, 3, 4]);

//solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
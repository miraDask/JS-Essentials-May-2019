function solve(length, numbersToSumCount) {
    let resultArr = [1];

    for (let i = 1; i < length; i++) {
        let currentNumber = resultArr
            .slice(Math.max(i - numbersToSumCount, 0), i)
            .reduce((t,c)=> t + c);

        resultArr.push(currentNumber);
    }

    console.log(resultArr);
}

solve(8, 2)
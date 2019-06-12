function solve(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNum = +arr[i];

        if (currentNum >= 0) {
            result.push(currentNum)
        } else {
            result.unshift(currentNum);
        }
    }

    console.log(result.join('\n'));
}

solve([3, -2, 0, -1]);
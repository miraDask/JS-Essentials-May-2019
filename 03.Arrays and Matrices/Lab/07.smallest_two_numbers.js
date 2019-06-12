function solve(arr) {
    let resultArr = arr.sort((x, y) => x - y);
    resultArr.splice(2);
    console.log(resultArr.join(' '));
}

solve([3, 0, 10, 4, 7, 3]);
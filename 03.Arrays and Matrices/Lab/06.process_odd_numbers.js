function solve(arr) {
    let resultArr = arr.filter((x, y) => y % 2 !== 0)
        .map(x => x * 2)
        .reverse();
    console.log(resultArr.join(' '));
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);
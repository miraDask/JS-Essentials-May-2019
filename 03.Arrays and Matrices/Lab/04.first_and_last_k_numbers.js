function solve(arr) {
    let offSet = +arr[0];
    let arrCopy = arr.slice(1);
    let numbersFromStart = arrCopy.splice(0, offSet);
    let numbersFromEnd = arr.slice(arr.length - offSet);
    console.log(numbersFromStart.join(' '));
    console.log(numbersFromEnd.join(' '));
}

solve([3,
    6, 7, 8, 9]
);
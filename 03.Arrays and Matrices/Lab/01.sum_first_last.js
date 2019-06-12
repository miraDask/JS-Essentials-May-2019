function solve(arr) {
    let firstElement = +arr[0];
    let lastElement = +arr[arr.length - 1];
    let sumOfArrElements = firstElement + lastElement;
    console.log(sumOfArrElements);
}
solve(['20', '30', '40']);
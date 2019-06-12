function agregate(arrOfNumbers) {
    let sum = arrOfNumbers.reduce((x,y) => x + y);
    let sumOfInverseValues = arrOfNumbers.reduce((x,y) => x + 1/y, 0);
    let concatenation = arrOfNumbers.reduce((x,y) => x + y.toString());
    console.log(sum);
    console.log(sumOfInverseValues);
    console.log(concatenation);
}
agregate([2, 4, 8, 16]);
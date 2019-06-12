function solve(number) {
    let arrayOfDigits = number.toString()
        .split('')
        .map(Number);
    function equalityCheck(arr) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] !== arr[i]){
                return false;
            }
        }

        return true;
    }

    let digitsAreEqual = equalityCheck(arrayOfDigits);
    let sumOfAllDigits = arrayOfDigits.reduce((x, y) => x + y);
    console.log(digitsAreEqual);
    console.log(sumOfAllDigits);
}

solve(1234)
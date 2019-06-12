function solve() {
    function getSum(binaryCode) {
        let sum = binaryCode.split('')
            .map(Number)
            .reduce((r, c) => r + c);

        while (sum > 9) {
            sum = sum.toString()
                .split('')
                .map(Number)
                .reduce((r, c) => r + c);
        }
        return sum;
    }

    function convertFromBinaryToChar(binaryText) {
        let binaryToDecimalNumber = parseInt(binaryText, 2);
        return String.fromCharCode(binaryToDecimalNumber);
    }

    function getResult(input) {
        return input
            .split(/([\d]{8})/g)
            .filter(x => x)
            .map(x => convertFromBinaryToChar(x))
            .filter(x => /[A-Za-z ]+/g.test(x))
            .join('');
    }

    const binaryCode = document.getElementById('input').value;
    let digitsToCut = getSum(binaryCode);
    const lengthOfSubStr = binaryCode.length - 2 * digitsToCut;
    const inputSubStr = binaryCode.substr(digitsToCut, lengthOfSubStr);
    const resultElement = document.getElementById('resultOutput');
    resultElement.textContent = getResult(inputSubStr);
}
function solve(firstNum, secondNum) {
    let biggerNum = Math.max(firstNum, secondNum);
    let smallerNum = Math.min(firstNum, secondNum);

    function getGreatestCommonDivisor(biggerNum, smallerNum) {
        while (biggerNum % smallerNum !== 0){
            let temp = biggerNum % smallerNum;
            biggerNum = smallerNum;
            smallerNum = temp;
        }

        return smallerNum;
    }

    let result = getGreatestCommonDivisor(biggerNum,smallerNum);
    console.log(result);
}

solve(2154, 458);
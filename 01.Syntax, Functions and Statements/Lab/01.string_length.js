function solve(firstArgumen, secondArgumen, thirdArgumen){
    let firstArgumentLength = firstArgumen.length;
    let secondArgumentLength = secondArgumen.length;
    let thirdArgumentLength = thirdArgumen.length;
 
    let totalLengthSum = firstArgumentLength + secondArgumentLength + thirdArgumentLength;

    console.log(totalLengthSum);
    console.log(parseInt(totalLengthSum/3));
}

solve('pasta', '5', '22.3');
function solve(firstArg, secondArg){
    let firstNumber = Number(firstArg);
    let secondNumber = Number(secondArg);

    let sum = 0;

    for (let i = firstNumber; i <= secondNumber; i++){
        sum += i;
    }

    console.log(sum);
}

solve('-8', '20');
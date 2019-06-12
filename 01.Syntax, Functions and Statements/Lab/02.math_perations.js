function solve(firstOperand, secondOperand, operator){
    let result = 0;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
            case '-':
            result = firstOperand - secondOperand;
            break;
            case '*':
            result = firstOperand * secondOperand;
            break;
            case '/':
            result = firstOperand / secondOperand;
            break;
            case '%':
            result = firstOperand % secondOperand;
            break;
            case '**':
            result = firstOperand ** secondOperand;
            break;
    }

    console.log(result);
}

solve(5, 6, '+');
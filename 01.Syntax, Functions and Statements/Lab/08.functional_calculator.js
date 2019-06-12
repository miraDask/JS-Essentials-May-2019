function calculate(firstOperand, secondOperand, operator) {
    let addition = (x, y) => x + y;
    let subtraction = (x, y) => x - y;
    let multiplication = (x, y) => x * y;
    let division = (x, y) => x / y;
    let involution = (x, y) => x ** y;

    let result = 0;

    switch (operator) {
        case '+':
            result = addition(firstOperand, secondOperand);
            break;
        case '-':
            result = subtraction(firstOperand, secondOperand);
            break;
        case '*':
            result = multiplication(firstOperand, secondOperand);
            break;
        case '/':
            result = division(firstOperand, secondOperand);
            break;
        case '**':
            result = involution(firstOperand, secondOperand);
            break;
    }

    console.log(result);
}

calculate(2, 4, '+');
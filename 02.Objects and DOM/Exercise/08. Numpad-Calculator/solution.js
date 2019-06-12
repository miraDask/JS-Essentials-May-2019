function solve() {
    const operators = ['-', '+', 'x', '/'];
    let validExpressionPattern = /(\d+(\.\d+)?)\s([+\-x\/])\s(\d+(\.\d+)?)/;
    let expression = '';
    let resultOfTheExpression = 0;

    let allButtons = Array.from(document.querySelectorAll('button'));
    let expressionCreationButtons = allButtons.filter(x => x.value !== '=' && x.value !== 'Clear');
    let clearButton = allButtons[0];
    let resultButton = allButtons.filter(x => x.value === '=')[0];
    let expressionOutputElement = document.getElementById('expressionOutput');
    let resultOutputElement = document.getElementById('resultOutput');

    expressionCreationButtons.forEach(x => x.addEventListener('click', createExpression));
    resultButton.addEventListener('click', displayResultOfTheExpression);
    clearButton.addEventListener('click', clearResult);

    function createExpression(e) {
        let currentSymbol = e.currentTarget.textContent;

        if (operators.some(x => x === currentSymbol)) {
            expression += ` ${currentSymbol} `;
        } else {
            expression += currentSymbol;
        }

        expressionOutputElement.textContent = expression;
    }

    function displayResultOfTheExpression() {
        let expressionMatch = expression.match(validExpressionPattern);

        if (expressionMatch) {
            let firstOperand = Number(expressionMatch[1]);
            console.log(firstOperand);
            let operator = expressionMatch[3];
            console.log(operator);

            let secondOperand = Number(expressionMatch[4]);
            console.log(secondOperand);
            resultOfTheExpression = makeCalculation(firstOperand, operator, secondOperand);
            resultOutputElement.textContent = resultOfTheExpression + '';
        } else {
            resultOutputElement.textContent = 'NaN';
        }
    }

    function clearResult() {
        expressionOutputElement.textContent = '';
        resultOutputElement.textContent = '';
        expression = '';
    }

    function makeCalculation(firstOperand, operator, secondOperand) {
        switch (operator) {
            case '+' :
                return firstOperand + secondOperand;
            case '-' :
                return firstOperand - secondOperand;
            case 'x' :
                return firstOperand * secondOperand;
            case '/' :
                return firstOperand / secondOperand;
        }
    }
}
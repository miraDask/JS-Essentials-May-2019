function solve() {
    const successMessage = 'You solve it! Congratulations!';
    const successTableBorder = '2px solid green';
    const successTextColor = 'green';
    const failedMessage = 'NOP! You are not done yet...';
    const failedTableBorder = '2px solid red';
    const failedTextColor = 'red';

    let tableElement = document.querySelector('table');
    let allInputElements = Array.from(document.querySelectorAll('input'));
    let resultOutputElement = document.querySelector('#check p');
    let buttons = document.querySelectorAll('button');
    let checkButton = buttons[0];
    let clearButton = buttons[1];
    let isSolved = false;
    let continueCheck = true;

    checkButton.addEventListener('click', checkIfIsSolved);
    clearButton.addEventListener('click', clearInputValues);

    function checkIfIsSolved() {

        for (let i = 0; i < allInputElements.length; i += 3) {
            let firstNum = +allInputElements[i].value;
            let secondNum = +allInputElements[i + 1].value;
            let thirdNum = +allInputElements[i + 2].value;
            let checkFailed = haveCorrectValues(firstNum, secondNum, thirdNum) === false
                || areDifferentNumbersCheck(firstNum, secondNum, thirdNum) === false;

            if (checkFailed) {
                continueCheck = false;
                break;
            }
        }

        if (continueCheck) {
            for (let i = 0; i < 3; i++) {
                let firstNum = +allInputElements[i].value;
                let secondNum = +allInputElements[i + 3].value;
                let thirdNum = +allInputElements[i + 6].value;
                let checkFailed = haveCorrectValues(firstNum, secondNum, thirdNum) === false
                    || areDifferentNumbersCheck(firstNum, secondNum, thirdNum) === false;

                if (checkFailed) {
                    isSolved = false;
                    break;
                } else {
                    isSolved = true;
                }
            }
        }

        handleResultOutput(isSolved);

        function haveCorrectValues(firstNumber, secondNumber, thirdNumber) {
            return firstNumber <= 3 && secondNumber <= 3 && thirdNumber <= 3;
        }

        function areDifferentNumbersCheck(firstNumber, secondNumber, thirdNumber) {
            return firstNumber !== secondNumber
                && firstNumber !== thirdNumber
                && secondNumber !== thirdNumber;
        }
    }

    function clearInputValues() {
        allInputElements.forEach(x => x.value = '');
        tableElement.style.border = 'none';
        resultOutputElement.textContent = '';
    }

    function handleResultOutput(isSolved) {
        if (isSolved) {
            tableElement.style.border = successTableBorder;
            resultOutputElement.textContent = successMessage;
            resultOutputElement.style.color = successTextColor;
        } else {
            tableElement.style.border = failedTableBorder;
            resultOutputElement.textContent = failedMessage;
            resultOutputElement.style.color = failedTextColor;
        }
    }
}
function solve() {
    let inputTextElement = document.getElementById('text');
    let convention = document
        .getElementById('naming-convention')
        .value;
    let textAsArr = inputTextElement
        .value
        .split(' ');
    let resultElement = document.getElementById('result');
    let resultArr = [];
    textAsArr.forEach((s, i) => {
        resultArr[i] = s.toLowerCase();
        resultArr[i] = resultArr[i].replace(resultArr[i][0], resultArr[i][0].toUpperCase());
    });

    if (convention === 'Camel Case') {
        resultArr[0] = resultArr[0].replace(resultArr[0][0], resultArr[0][0].toLowerCase());
        resultElement.textContent = resultArr.join('');
    } else if (convention === 'Pascal Case') {
        resultElement.textContent = resultArr.join('');
    } else {
        resultElement.textContent = 'Error!'
    }
}
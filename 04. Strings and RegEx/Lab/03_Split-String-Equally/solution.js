function solve() {
    let inputText = document.getElementById('text').value;
    const splitNumber = +document.getElementById('number').value;

    if (inputText.length % splitNumber !== 0) {
        const additionalLength = splitNumber - inputText.length % splitNumber;
        inputText += inputText.substr(0, additionalLength);
    }

    let resultArr = [];

    for (let i = 0; i < inputText.length; i += splitNumber) {
        let tempText = '';
        for (let j = 0; j < splitNumber; j++) {
            tempText += inputText[i + j];
        }
        resultArr.push(tempText);
    }
    document.getElementById('result').textContent = resultArr.join(' ');
}
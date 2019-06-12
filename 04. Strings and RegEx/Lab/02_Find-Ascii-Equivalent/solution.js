function solve() {
    const inputToArr = document
        .getElementById('text')
        .value
        .split(' ');

    const outputElement = document.getElementById('result');

    let textFromDigits = '';
    inputToArr.forEach(string => {
        if (Number(string)) {
            textFromDigits += String.fromCharCode(Number(string));
        } else {
            let currentWordToDigits = [];
            string
                .split('')
                .forEach(s => currentWordToDigits.push(s.charCodeAt(0)));
            let paragraph = document.createElement('p');
            paragraph.textContent = currentWordToDigits.join(' ');
            outputElement.appendChild(paragraph);
        }
    });

    let paragraph = document.createElement('p');
    paragraph.textContent = textFromDigits;
    outputElement.appendChild(paragraph);
}
function solve() {
    function encodeText(oldText) {
        let newText = '';
        oldText.split('').forEach(s => {
            if (s === '!') {
                newText += '1';
            } else if (s === '#') {
                newText += '3';
            } else if (s === '%') {
                newText += '2';
            } else if (s === '$') {
                newText += '4';
            } else {
                newText += s.toLowerCase();
            }
        });

        return newText;
    }

    const inputArr = JSON.parse(document.getElementById('array').value);
    const specialKey = inputArr[0];
    let resultElement = document.getElementById('result');
    const regex = new RegExp(`(^|\\s)${specialKey}\\s+([A-Z#$%!]{8,})(\\s|\\.|,|$)`, 'gi');
    let texts = inputArr.slice(1);

    texts.forEach(currentText => {
        let match = regex.exec(currentText);

        while ((match)) {
            let oldText = match[2];
            if (oldText === oldText.toUpperCase()) {
                let newText = encodeText(oldText);
                currentText = currentText.replace(oldText, newText);
            }

            match = regex.exec(currentText);
        }

        let newParagraphElement = document.createElement('p');
        newParagraphElement.textContent = currentText;
        resultElement.appendChild(newParagraphElement);
    });
}

function solve() {
    const outputElement = document.getElementById('result');
    const inputArr = JSON.parse(document.getElementById('text').value);
    const newWord = document.getElementById('word').value;
    const wordForChange = inputArr[0].split(' ')[2];
    const regex = new RegExp(`${wordForChange}`, 'gi');

    inputArr.forEach(s => {
        let paragraph = document.createElement('p');
        paragraph.textContent = s.replace(regex, newWord);
        outputElement.appendChild(paragraph);
    });
}
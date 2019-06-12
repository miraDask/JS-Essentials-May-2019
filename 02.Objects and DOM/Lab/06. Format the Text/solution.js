function solve() {
    let inputTextElement = document.querySelector('div#exercise #input');
    let text = inputTextElement.textContent;
    let sentences = text.split('.');
    let outputElement = document.querySelector("div#output");
    let newParagraphElement = document.createElement('p');

    for (let i = 1; i <= sentences.length; i++) {

        let currentSentence = sentences[i - 1];
        newParagraphElement.textContent += currentSentence + '.';

        if (i % 3 === 0 || i === sentences.length){
            outputElement.appendChild(newParagraphElement);
            console.log(newParagraphElement);
            newParagraphElement = document.createElement('p');
        }
    }
}
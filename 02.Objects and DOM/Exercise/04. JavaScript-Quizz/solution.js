function solve() {
    const rightAnswers = [
        'onclick',
        'JSON.stringify()',
        'A programming API for HTML and XML documents',
    ];

    let questionCounter = 1;
    let rightAnswersCounter = 0;

    let questionElements = document.querySelectorAll('section');
    let firstSectionElement = questionElements[0];
    let secondSectionElement = questionElements[1];
    let lastSectionElement = questionElements[2];
    let currentSectionElement = null;
    let nextSectionElement = null;
    let resultElementParent = document.querySelector('#results');
    let resultElement = document.querySelector('#results h1');
    let buttons = Array.from(document.querySelectorAll('p.answer-text'));

    for (let button of buttons) {
        button.addEventListener('click', () => {

            let answer = button.textContent;
            if (rightAnswers.some(x => x === answer)) {
                rightAnswersCounter++;
            }

            if (questionCounter === 3) {
                currentSectionElement = lastSectionElement;
                nextSectionElement = resultElementParent;
                resultElement.textContent = '';

                if (rightAnswersCounter === 3) {
                    resultElement.textContent = 'You are recognized as top JavaScript fan!';
                } else {
                    resultElement.textContent = `You have ${rightAnswersCounter} right answers`;
                }
            } else {

                if (questionCounter === 1) {
                    currentSectionElement = firstSectionElement;
                    nextSectionElement = secondSectionElement;
                } else if (questionCounter === 2) {
                    currentSectionElement = secondSectionElement;
                    nextSectionElement = lastSectionElement;
                }
            }

            currentSectionElement.style.display = 'none';
            nextSectionElement.style.display = 'block';
            questionCounter++;
        })
    }
}

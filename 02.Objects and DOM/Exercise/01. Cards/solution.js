function solve() {
    let cards = document.getElementsByTagName('img');

    for (let card of cards) {
        card.addEventListener('click', (e) => {
            let currentTarget = e.currentTarget;
            currentTarget.src = "images/whiteCard.jpg";
            let resultElement = document.getElementById('result');
            let leftResultElement = resultElement.children[0];
            let rightResultElement = resultElement.children[2];
            let cardValue = currentTarget.name;

            if (currentTarget.parentNode.id === 'player1Div') {
                leftResultElement.textContent = cardValue;
            } else {
                rightResultElement.textContent = cardValue;
            }

            if (leftResultElement.textContent && rightResultElement.textContent) {
                let firstCardValue = Number(leftResultElement.textContent);
                let secondCardValue = Number(rightResultElement.textContent);
                let firstCard = document
                    .getElementById('player1Div')
                    .querySelector(`img[name="${leftResultElement.textContent}"]`);
                let secondCard = document
                    .getElementById('player2Div')
                    .querySelector(`img[name="${rightResultElement.textContent}"]`);

                if (firstCardValue >= secondCardValue) {
                    firstCard.style.border = '2px solid green';
                    secondCard.style.border = '2px solid red';
                } else if (secondCardValue > firstCardValue) {
                    firstCard.style.border = '2px solid red';
                    secondCard.style.border = '2px solid green';
                }

                let historyElement = document.getElementById('history');
                historyElement.textContent += (`[${firstCardValue} vs ${secondCardValue}] `);

                leftResultElement.textContent = '';
                rightResultElement.textContent = '';
            }
        })
    }
}
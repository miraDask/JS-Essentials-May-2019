function solve() {
    let fans = 0;
    let money = 0;
    let outputElement = document.getElementById('output');
    const summaryButton = document.querySelector('#summary button');
    const seatButtonsCollection = Array.from(document.querySelectorAll('.seat'));

    seatButtonsCollection.forEach(b => b.addEventListener('click', reserveSeat));
    summaryButton.addEventListener('click', summarize);

    function calculateMoney(sector, team) {
        const prices = {
            VIP: {
                A: 25,
                B: 15,
                C: 10,
            },
            Levski: {
                A: 10,
                B: 7,
                C: 5,
            },
            Litex: {
                A: 10,
                B: 7,
                C: 5,
            }
        };

        return prices[team][sector];
    }

    function reserveSeat() {
        const seatNumber = this.textContent;
        const team = this.parentNode.parentNode.parentNode.parentNode.parentNode.className;
        const sector = String.fromCharCode(65 + this.parentNode.cellIndex);
        if (this.className !== 'takenSeat') {
            this.className = 'takenSeat';
            outputElement.value += ` Seat ${seatNumber} in zone ${team} sector ${sector} was taken.\n`;
            fans++;
            money += calculateMoney(sector, team);
        } else {
            outputElement.value += ` Seat ${seatNumber} in zone ${team} sector ${sector} is unavailable.\n`;
        }
    }

    function summarize() {
        const summarizeElement = this.nextElementSibling;
        summarizeElement.textContent = `${money} leva, ${fans} fans.`;
    }
}

function solve(input) {
    let totalCashInATM = 0;
    let banknotes = [];

    function getCommand(lineOfInput) {
        let command = '';
        const length = lineOfInput.length;
        if (length === 1) {
            command = 'report';
        } else if (length === 2) {
            command = 'withdraw';
        } else if (length > 2) {
            command = 'insert';
        }

        return command;
    }

    function handleCommand(command, lineOfInput) {
        let message = '';
        switch (command) {
            case 'insert':
                let insertedCash = 0;
                lineOfInput.forEach(x => insertedCash += x);
                totalCashInATM += insertedCash;
                banknotes.push(...lineOfInput);
                message = `Service Report: ${insertedCash}$ inserted. Current balance: ${totalCashInATM}$.`;
                break;

            case 'report':
                const banknote = +lineOfInput[0];
                let banknotesCount = banknotes.filter(x => x === banknote).length;
                message = `Service Report: Banknotes from ${banknote}$: ${banknotesCount}.`;
                break;

            case 'withdraw':
                let accountBalance = lineOfInput[0];
                let moneyToWithdrow = lineOfInput[1];
               
                if (moneyToWithdrow > accountBalance) {
                    message = `Not enough money in your account. Account balance: ${accountBalance}$.`;
                } else if (totalCashInATM < moneyToWithdrow) {
                    message = `ATM machine is out of order!`;
                } else {
                    banknotes.sort((x, y) => y - x);
                    for (let i = 0; i < banknotes.length; i++) {
                        const currentBanknote = banknotes[i];
                        if (moneyToWithdrow - currentBanknote >= 0) {
                            banknotes[i] = undefined;
                            moneyToWithdrow -= currentBanknote;
                        }

                        if (moneyToWithdrow === 0) {
                            break;
                        }
                    }

                    banknotes = banknotes.filter(x => x !== undefined);
                    accountBalance -= lineOfInput[1];
                    totalCashInATM -= lineOfInput[1];

                    message = `You get ${lineOfInput[1]}$. Account balance: ${accountBalance}$. Thank you!`;
                }
                break;
        }
        return message;
    }

    input.forEach(lineOfInput => {
        const command = getCommand(lineOfInput);
        const message = handleCommand(command, lineOfInput);
        console.log(message);
    })
}

solve([
    [20, 5, 100, 20, 1],
    [457, 25],
    [1],
    [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
    [20, 85],
    [5000, 4500],
]);
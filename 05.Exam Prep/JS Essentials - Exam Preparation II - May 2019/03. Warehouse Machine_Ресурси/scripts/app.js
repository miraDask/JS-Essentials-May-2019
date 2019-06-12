function coffeeStorage() {
    const inputArr = JSON.parse(document.querySelector('textarea').value);
    const outputElements = document.querySelectorAll('div p');
    let storage = {};

    function addCoffeeToStorage(currentData) {
        let brand = currentData[1];
        let name = currentData[2];
        let expireDate = currentData[3];
        let quantityOfCoffee = +currentData[4];

        if (!storage[brand]) {
            storage[brand] = {};
        }

        if (!storage[brand][name]) {
            storage[brand][name] = {
                dateOfExpire: expireDate,
                quantity: quantityOfCoffee
            };
        } else {
            let currentCoffee = storage[brand][name];
            let oldDate = currentCoffee.dateOfExpire;
            let previousDate = Date.parse(oldDate);
            let newDate = Date.parse(expireDate);
            if (newDate > previousDate) {
                currentCoffee.dateOfExpire = expireDate;
                currentCoffee.quantity = quantityOfCoffee;
            } else if (newDate === previousDate) {
                currentCoffee.quantity += quantityOfCoffee;
            }
        }

    }

    function removeExpiredCoffeeFromStorage(currentData) {
        let brand = currentData[1];
        let name = currentData[2];
        let startingDateForCheck = currentData[3];
        let neededQuantityOfCoffee = +currentData[4];

        if (storage[brand] && storage[brand][name]) {
            let currentCoffee = storage[brand][name];
            let coffeeExpireDate = Date.parse(currentCoffee.dateOfExpire);
            let dateToStartFrom = Date.parse(startingDateForCheck);
            let hasCoffeeThatExpiresAfterGivenDate = coffeeExpireDate > dateToStartFrom;

            if (hasCoffeeThatExpiresAfterGivenDate && currentCoffee.quantity >= neededQuantityOfCoffee) {
                currentCoffee.quantity -= neededQuantityOfCoffee;
            }
        }
    }

    function printInspectionOutput() {
        let message = '';

        for (let brand of Object.keys(storage).sort((x, y) => x.localeCompare(y))) {
            message += `${brand}:`;

            for (let storageElement of Object.keys(storage[brand])
                    .sort((x, y) => storage[brand][y].quantity - storage[brand][x].quantity)) {
                let currentCoffee = storage[brand][storageElement];
                message += ` ${storageElement} - ${currentCoffee.dateOfExpire} - ${currentCoffee.quantity}.`;
            }

            message += '<br>';
        }

        const inspectionElement = outputElements[1];
        inspectionElement.innerHTML = message;
    }

    function printReportOutput() {
        let message = '';

        for (let brand in storage) {
            message += `${brand}:`;
            for (let name in storage[brand]) {
                let currentCoffee = storage[brand][name];
                message += ` ${name} - ${currentCoffee.dateOfExpire} - ${currentCoffee.quantity}.`;
            }

            message += '<br>';
        }
        const reportElement = outputElements[0];
        reportElement.innerHTML = message;
    }

    function handleData(currentData) {
        const command = currentData[0];
        switch (command) {
            case 'IN':
                addCoffeeToStorage(currentData);
                break;
            case 'OUT':
                removeExpiredCoffeeFromStorage(currentData);
                break;
            case 'REPORT':
                printReportOutput();
                break;
            case 'INSPECTION':
                printInspectionOutput();
                break;
        }
    }

    inputArr.forEach(x => {
        const currentData = x.split(', ');
        handleData(currentData);
    });
}
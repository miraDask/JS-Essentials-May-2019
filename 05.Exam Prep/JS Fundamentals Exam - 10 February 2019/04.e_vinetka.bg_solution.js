function solve(carObjects) {

    function getTownNameAndProfit(carObjects) {
        let towns = {};
        carObjects.forEach(carData => {
            const {town, price} = carData;
            if (!towns[town]) {
                towns[town] = {profit: 0, registrationsCount: 0};
            }
            towns[town].profit += price;
            towns[town].registrationsCount++;
        });

        let mostProfitableTown = Object.keys(towns).sort((a, b) => {
            return towns[b].profit - towns[a].profit
                || towns[b].registrationsCount - towns[a].registrationsCount
                || a.localeCompare(b);
        })[0];

        return [mostProfitableTown, towns[mostProfitableTown].profit];
    }

    function getModel(carObjects, mostProfitableTownName) {

        const townRegister = carObjects.filter(x => x.town === mostProfitableTownName);
        let models = {};
        townRegister.forEach(obj => {
            const {model, price} = obj;
            if (!models[model]) {
                models[model] = {carsCount: 0, biggestPrice: 0};
            }
            models[model].carsCount += 1;
            models[model].biggestPrice = price > models[model].biggestPrice ? price : models[model].biggestPrice;
        });
        return Object.keys(models).sort((a, b) =>
            models[b].carsCount - models[a].carsCount
            || models[b].biggestPrice - models[a].biggestPrice
            || a.localeCompare(b)
        )[0];
    }

    const [mostProfitableTownName, profit] = getTownNameAndProfit(carObjects);

    const mostDrivenModel = getModel(carObjects, mostProfitableTownName);

    let listOtTowns = {};
    carObjects.filter(x => x.model === mostDrivenModel).forEach(obj => {
        if (!Object.keys(listOtTowns).includes(obj.town)) {
            listOtTowns[obj.town] = [];
        }
        listOtTowns[obj.town].push(obj.regNumber);
    });

    console.log(`${mostProfitableTownName} is most profitable - ${profit} BGN\n` +
        `Most driven model: ${mostDrivenModel}`);
    Object.keys(listOtTowns).sort((a, b) => a.localeCompare(b)).forEach(key => {
        console.log(`${key}: ${listOtTowns[key].sort((a, b) => a.localeCompare(b)).join(', ')}`)
    });
}

solve([{model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2},
    {model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8},
    {model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9},
    {model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3},
    {model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3}]
);
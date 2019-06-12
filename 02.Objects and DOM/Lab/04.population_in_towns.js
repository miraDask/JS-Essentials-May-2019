function solve(input) {
    let towns = {};
    for (let data of input) {
        let townData = data.split(' <-> ');
        let townName = townData[0];
        let population = Number(townData[1]);

        if (!towns.hasOwnProperty(townName)) {
            towns[townName] = population;
        } else {
            towns[townName] += population;
        }
    }

    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`)
    }
}

solve([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000',
]);
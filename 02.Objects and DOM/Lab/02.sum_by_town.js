function solve(input) {
    let towns = {};
    for (let i = 0; i < input.length; i += 2) {
        let townAsKey = input[i];
        let income = Number(input[i + 1]);

        if (!towns.hasOwnProperty(townAsKey)) {
            towns[townAsKey] = income;
        } else {
            towns[townAsKey] += income;
        }
    }

    console.log(JSON.stringify(towns));
}

solve(['Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4',
]);
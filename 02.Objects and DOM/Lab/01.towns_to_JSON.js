function solve(input) {
    let townDataArr = input
        .map(x => x.split('|')
            .filter(x => x.length > 0))
        .map(x => x.map(x => x.trim()));

    let towns = [];
    let propsNames = townDataArr[0];
    for (let i = 1; i < townDataArr.length; i++) {
        let currentTownData = townDataArr[i];
        let currentTownObj = {};
        currentTownObj[propsNames[0]] = currentTownData[0];
        currentTownObj[propsNames[1]] = Number(currentTownData[1]);
        currentTownObj[propsNames[2]] = Number(currentTownData[2]);
        towns.push(currentTownObj);
    }
    console.log(JSON.stringify(towns));
}

solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
)
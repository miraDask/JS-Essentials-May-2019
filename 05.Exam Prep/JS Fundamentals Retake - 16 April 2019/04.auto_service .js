function solve(data) {
    let instructions = [];
    let parts = {};

    function addInstruction(carModel) {
        instructions.push(carModel);
    }

    function addPart(partData) {
        let model = partData[0];
        let part = partData[1];
        let serialNumber = partData[2];
        if (!parts[model]) {
            parts[model] = {};
        }

        if (!parts[model][part]) {
            parts[model][part] = [];
        }

        parts[model][part].push(serialNumber);
    }

    function repairCarResult(repairData) {
        let resultOfRepair = '';
        let model = repairData[0];

        if (!instructions.includes(model)) {
            resultOfRepair = `${model} is not supported`;
        } else {
            let partsToRepair = JSON.parse(repairData[1]);

            for (let part in partsToRepair) {
                if (partsToRepair[part] === 'broken') {
                    if (parts[model] && parts[model][part] && parts[model][part]) {
                        let newPart = parts[model][part][0];
                        partsToRepair[part] = newPart;
                        parts[model][part].shift();
                    }
                }
            }

            resultOfRepair = `${model} client - ${JSON.stringify(partsToRepair)}`;
        }

        return resultOfRepair;
    }

    for (let line of data) {
        let lineToArr = line.split(' ');
        let command = lineToArr[0];
        switch (command) {
            case 'instructions':
                let carModel = lineToArr[1];
                addInstruction(carModel);
                break;
            case 'addPart':
                let partData = lineToArr.slice(1);
                addPart(partData);
                break;
            case 'repair':
                let repairData = lineToArr.slice(1);
                let resultOfRepair = repairCarResult(repairData);
                console.log(resultOfRepair);
                break;
        }
    }

    for (let model of Object.keys(parts).sort((a, b) => a.localeCompare(b))) {
        let message = `${model} - ${JSON.stringify(parts[model])}`;
        console.log(message);
    }
}

solve([
        'instructions bmw',
        'addPart opel engine GV1399SSS',
        'addPart opel transmission SMF556SRG',
        'addPart bmw engine GV1399SSS',
        'addPart bmw transmission SMF444ORG',
        'addPart opel transmission SMF444ORG',
        'instructions opel',
        'repair opel {"engine":"broken","transmission":"OP8766TRS"}',
        'repair bmw {"engine":"ENG999FPH","transmission":"broken","wheels":"broken"}'
    ]
);
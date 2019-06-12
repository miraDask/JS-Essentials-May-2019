function spaceshipCrafting() {
    let inputs = document.querySelectorAll('input');
    let titaniumCore = +inputs[0].value;
    let aluminumCore = +inputs[1].value;
    let magnesiumCore = +inputs[2].value;
    let carbonCore = +inputs[3].value;
    let lossesPercent = +inputs[4].value;
    let percentForEach = lossesPercent / 4;

    titaniumCore -= titaniumCore * percentForEach / 100;
    aluminumCore -= aluminumCore * percentForEach / 100;
    magnesiumCore -= magnesiumCore * percentForEach / 100;
    carbonCore -= carbonCore * percentForEach / 100;

    let titaniumBars = Math.round((titaniumCore / 25));
    let aluminumBars = Math.round((aluminumCore / 50));
    let magnesiumBars = Math.round((magnesiumCore / 75));
    let carbonBars = Math.round((carbonCore / 100));

    let theUndefinedShips = 0;
    let nullMasterShips = 0;
    let JSONCrewShips = 0;
    let falseFleetShips = 0;

    while (true) {
        if (titaniumBars >= 7 && aluminumBars >= 9 && magnesiumBars >= 7 && carbonBars >= 7) {
            theUndefinedShips++;
            titaniumBars -= 7;
            aluminumBars -= 9;
            magnesiumBars -= 7;
            carbonBars -= 7;
        }

        if (titaniumBars >= 5 && aluminumBars >= 7 && magnesiumBars >= 7 && carbonBars >= 5) {
            nullMasterShips++;
            titaniumBars -= 5;
            aluminumBars -= 7;
            magnesiumBars -= 7;
            carbonBars -= 5;
        }

        if (titaniumBars >= 3 && aluminumBars >= 5 && magnesiumBars >= 5 && carbonBars >= 2) {
            JSONCrewShips++;
            titaniumBars -= 3;
            aluminumBars -= 5;
            magnesiumBars -= 5;
            carbonBars -= 2;
        }

        if (titaniumBars >= 2 && aluminumBars >= 2 && magnesiumBars >= 3 && carbonBars >= 1) {
            falseFleetShips++;
            titaniumBars -= 2;
            aluminumBars -= 2;
            magnesiumBars -= 3;
            carbonBars -= 1;
        }else {
            break;
        }
    }

    let availableBarsOutput = document.querySelector('#availableBars p');
    availableBarsOutput.textContent = `${titaniumBars} titanium bars, ${aluminumBars} aluminum bars, ${magnesiumBars} magnesium bars, ${carbonBars} carbon bars`

    let shipsReport = document.querySelector('#builtSpaceships p');

    let resultMessages = [];
    if (theUndefinedShips > 0) {
        resultMessages.push(`${theUndefinedShips} THE-UNDEFINED-SHIP`)
    }

    if (nullMasterShips > 0) {
        resultMessages.push(`${nullMasterShips} NULL-MASTER`)
    }
    if (JSONCrewShips > 0) {
        resultMessages.push(`${JSONCrewShips} JSON-CREW`)
    }

    if (falseFleetShips > 0) {
        resultMessages.push(`${falseFleetShips} FALSE-FLEET`)
    }

    shipsReport.textContent = resultMessages.join(', ');
}


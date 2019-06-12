function solve() {
    let trucks = {};
    let backupTires = [];

    const backupTiresOutputElement = document.querySelectorAll('fieldset div')[5];
    const trucksOutputElement = document.querySelectorAll('fieldset div')[6];
    const report = document.querySelector('#exercise textarea');
    const buttons = Array.from(document.querySelectorAll('button'));
    const addNewTruckBtn = buttons[0];
    const addNewTiresBtn = buttons[1];
    const goToWorkBtn = buttons[2];
    const endOfTheShiftBtn = buttons[3];

    function addNewTruck() {
        const plateNumber = document.querySelector('#newTruckPlateNumber').value;
        const tiresCondition = document.querySelector('#newTruckTiresCondition').value;
        if (!trucks[plateNumber]) {
            trucks[plateNumber] = {};
            trucks[plateNumber].tireSet = tiresCondition.split(' ').map(Number);
            trucks[plateNumber].totalDistance = 0;
            const output = document.createElement('div');
            output.className = 'truck';
            output.textContent = plateNumber;
            trucksOutputElement.appendChild(output);
        }
    }

    function addNewTire() {
        const newTiresSet = document.querySelector('#newTiresCondition').value;
        backupTires.push(newTiresSet.split(' ').map(Number));
        const output = document.createElement('div');
        output.className = 'tireSet';
        output.textContent = newTiresSet;
        backupTiresOutputElement.appendChild(output);
    }

    function goToWork() {
        const workPlateNumber = document.querySelector('#workPlateNumber').value;
        const distance = +document.querySelector('#distance').value;
        const qualityReduceAmount = distance / 1000;
        const currentTruck = trucks[workPlateNumber];

        function checkTires(tires) {
            let truckCanTravel = true;
            tires.forEach(t => {
                if (t - qualityReduceAmount < 0) {
                    truckCanTravel = false;
                }
            });
            return truckCanTravel;
        }

        function travel(currentTruck) {
            for (let i = 0; i < currentTruck.tireSet.length; i++) {
                currentTruck.tireSet[i] = currentTruck.tireSet[i] - qualityReduceAmount;
            }
            currentTruck.totalDistance += distance;
        }

        if (currentTruck) {
            let truckCanTravel = checkTires(currentTruck.tireSet);
            if (truckCanTravel) {
                travel(currentTruck);
            } else {
                currentTruck.tireSet = backupTires.shift();
                const usedTire = backupTiresOutputElement.children[0];
                usedTire.remove();
                truckCanTravel = checkTires(currentTruck.tireSet);
                if (truckCanTravel) {
                    travel(currentTruck);
                }
            }
        }
    }

    function printData() {
        Object.keys(trucks).forEach(plateNumber => {
            report.value += `Truck ${plateNumber} has traveled ${trucks[plateNumber].totalDistance}.\n`;
        });
        report.value += `You have ${backupTires.length} sets of tires left.\n`;
    }

    addNewTruckBtn.addEventListener('click', addNewTruck);
    addNewTiresBtn.addEventListener('click', addNewTire);
    goToWorkBtn.addEventListener('click', goToWork);
    endOfTheShiftBtn.addEventListener('click', printData)
}
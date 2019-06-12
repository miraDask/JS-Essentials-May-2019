function solve(plasma, sizeOfCut) {
    const damagePerHit = Math.min(...plasma);
    const boundaryPoints =  Math.max(...plasma);
    const lengthOfFirstCut = plasma.length / 2;

    let firstCollection = plasma.slice(0, lengthOfFirstCut);
    let secondCollection = plasma.slice(lengthOfFirstCut);

    function getProduct(arr) {
        return arr.reduce((a, b) => a * b);
    }

    function getPoints(collection) {
        let points = 0;
        if (sizeOfCut > 0) {
            while (collection.length > 0) {
                let tempArr = collection.splice(0, sizeOfCut);
                points += getProduct(tempArr);
            }
        } else {
            points += getProduct(collection);
        }

        return points;
    }

    let firstGiantPoints = getPoints(firstCollection);
    let secondGiantPoints = getPoints(secondCollection);
    let rounds = 1;

    while (firstGiantPoints > boundaryPoints && secondGiantPoints > boundaryPoints && damagePerHit !== 0) {
        firstGiantPoints -= damagePerHit;
        secondGiantPoints -= damagePerHit;
        rounds++;
    }

    let haveWinner = firstGiantPoints !== secondGiantPoints;
    let message = '';

    if (haveWinner) {
        let [winner, winnerGiantPoints] = firstGiantPoints > secondGiantPoints
            ? ['First', firstGiantPoints] : ['Second', secondGiantPoints];

        let [defeated, defeatedGiantPoints] = firstGiantPoints < secondGiantPoints
            ? ['First', firstGiantPoints] : ['Second', secondGiantPoints];

        message = `${winner} Giant defeated ${defeated} Giant with result ${winnerGiantPoints} `
            + `- ${defeatedGiantPoints} in ${rounds} rounds`;

    } else {
        message = `Its a draw ${firstGiantPoints} - ${secondGiantPoints}`;
    }

    console.log(message);
}

//solve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3)
solve([3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2);
//solve([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 2);
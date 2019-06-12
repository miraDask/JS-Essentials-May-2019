function solve(arrArg) {
    let operations = [];
    operations['chop'] = (x) => x / 2;
    operations['dice'] = (x) => Math.sqrt(x);
    operations['spice'] = (x) => x + 1;
    operations['bake'] = (x) => x * 3;
    operations['fillet'] = (x) => x * 0.8;

    let number = Number(arrArg[0]);

    for (let i = 1; i < arrArg.length; i++) {
        let makeOperation = operations[arrArg[i]];
        let result = makeOperation(number);
        console.log(result);
        number = result;
    }
}

solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])
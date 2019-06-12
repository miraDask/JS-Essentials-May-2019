function solve(inputArr) {
    let step = +inputArr.pop();

    for (let i = 0; i < inputArr.length; i+= step) {
        console.log(inputArr[i]);
    }
}

//solve(['1', '2', '3', '4', '5', '6']);

//solve(['dsa', 'asd', 'test', 'tset', '2']);

solve(['5', '20', '31', '4', '20', '2']);

function solve(argument){
    let argumentType = typeof(argument);
    let result = 0;

    if (argumentType === 'number') {
        result = Math.pow(argument, 2) * Math.PI;
        console.log(result.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${argumentType}.`);
    }
}

solve(5);
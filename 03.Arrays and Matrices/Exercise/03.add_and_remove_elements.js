function solve(inputArr) {
    let result = [];
    let number = 1;
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] === 'remove'){
            result.pop();
        } else {
            result.push(number);
        }
        number++;
    }

    if (result.length === 0){
        console.log('Empty')
    } else  {
        console.log(result.join('\n'));
    }
}
solve(['add', 'add', 'add', 'add']);
//solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);


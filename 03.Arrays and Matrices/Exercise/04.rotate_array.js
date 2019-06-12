function solve(inputArr) {
    let rotations = +inputArr.pop();
    rotations = rotations % inputArr.length;

    while (rotations > 0){
        let lastElement = inputArr.pop();
        inputArr.unshift(lastElement);
        rotations--;
    }

    console.log(inputArr.join(' '));
}
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);

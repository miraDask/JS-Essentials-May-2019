function solve(arr) {
   let evenPositionElements  = arr.filter((x,i) => i % 2 == 0);
    console.log(evenPositionElements.join(' '));
}
solve(['20', '30', '40']);
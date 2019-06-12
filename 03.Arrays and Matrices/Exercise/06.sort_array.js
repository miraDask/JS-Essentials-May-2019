function solve(inputArr) {
    let sortedArr = inputArr.sort((x, y) => x.length - y.length || x.localeCompare(y));
    console.log(sortedArr.join('\n'));
}
solve(['test',
    'Deny',
    'omen',
    'Default']
);

solve(	['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']

);

solve(['alpha',
    'beta',
    'gamma']
);
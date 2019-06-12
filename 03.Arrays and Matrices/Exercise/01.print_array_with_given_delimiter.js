function solve(arr) {
    let lastIndex = arr.length - 1;
    let delimiter = arr[lastIndex];
    arr.pop();
    console.log(arr.join(delimiter));
}

solve(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!',
    '_']
);
solve(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-']
);
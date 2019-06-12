function solve(inputArr, commandData) {

    let table = inputArr.slice(0);
    const header = table.shift();
    const commandParts = commandData.split(' ').filter(x => x !== '');
    const command = commandParts[0];

    function getSortFunc(headerColValue) {
        let func = undefined;

        let index = header.indexOf(headerColValue);
        let value = table[0][index];
        if (Number(value)) {
            func = (a, b) => a[index] - b[index];
        } else {
            func = (a, b) => a[index].localeCompare(b[index]);
        }
        return func;
    }

    if (command === 'sort') {
        let headerColValue = commandParts[1];
        let sortingCondition = getSortFunc(headerColValue);
        console.log(`${header.join(' | ')}`);
        table.sort(sortingCondition)
            .forEach(row => console.log(`${row.join(' | ')}`));

    } else if (command === 'filter') {
        let headerCol = commandParts[1];
        let value = commandParts[2];
        if (commandParts.length === 3 && header.includes(headerCol)) {
            let colIndex = header.indexOf(headerCol);
            let rows = table.filter(x => x[colIndex] === value);
            console.log(`${header.join(' | ')}`);
            rows.forEach(row => console.log(`${row.join(' | ')}`));
        }
    } else if (command === 'hide') {
        let headerColToHide = commandParts[1];
        if (commandParts.length === 2 && header.includes(headerColToHide)) {
            let colIndex = header.indexOf(headerColToHide);

            let filteredHeader = header.filter((x, y) => y !== colIndex);
            console.log(`${filteredHeader.join(' | ')}`);

            table.forEach(row => {
                row = row.filter((x, y) => y !== colIndex);
                console.log(`${row.join(' | ')}`);
            });
        }
    }
}


solve([['firstName', 'age', 'grade', 'course'],
        ['Peter', '25', '5.00', 'JS-Core'],
        ['Marry', '34', '6.00', 'Tech'],
        ['Marry', '28', '5.49', 'Ruby']],
    'sort firstName'
);

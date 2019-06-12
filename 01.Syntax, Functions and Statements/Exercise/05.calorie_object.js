function solve(arr) {
    let foods = {};

    for (let i = 0; i < arr.length; i += 2) {
        let key = arr[i];
        let value = arr[i + 1];
        foods[key] = +value;
    }

    console.log(foods);
}

solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52])
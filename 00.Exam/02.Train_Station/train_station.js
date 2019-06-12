function solve(capacity, passengers) {
    let leftPassengers = 0;
    let wagon = [];

    for (let i = 0; i < passengers.length; i++) {
        let sum = passengers[i] + leftPassengers;
        if (sum > capacity) {
            wagon[i] = capacity;
            leftPassengers = sum - capacity;
        } else {
            wagon[i] = sum;
            leftPassengers = 0;
        }
    }

    console.log(`[ ${wagon.join(', ')} ]`);

    if (leftPassengers <= 0) {
        console.log(`All passengers aboard`);
    } else {
        console.log(`Could not fit ${leftPassengers} passengers`)
    }
}

solve(10, [9, 39, 1, 0, 0]);
solve(6, [5, 15, 2]);
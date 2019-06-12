function solve(days) {
    let coffeeCups = days * 3;
    let colaBottles = days * 2;
    let teaCups = days * 3;
    let energyDrinks = 0;

    for (let i = 1; i <= days; i++) {
        if (i % 5 === 0) {
            energyDrinks += 3;
        }

        if (i % 9 === 0) {
            colaBottles += 4;
            energyDrinks += 2;
        }
    }

    let coffeeInMl = coffeeCups * 150;
    let coffeeCaffeine = coffeeInMl / 100 * 40;
    let colaInMl = colaBottles * 250;
    let colaCaffeine = colaInMl / 100 * 8;
    let teaInMl = teaCups * 350;
    let teaCaffeine = teaInMl / 100 * 20;
    let energyDrinkInMl = energyDrinks * 500;
    let energyDrinkCaffeine = energyDrinkInMl / 100 * 30;

    let total = coffeeCaffeine + colaCaffeine + teaCaffeine + energyDrinkCaffeine;
    console.log(`${total} milligrams of caffeine were consumed`);
}

solve(9);

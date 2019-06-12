function solve(orders) {
    let totalIncome = 0;
    for (let i = 0; i < orders.length; i++) {

        let orderItems = orders[i].split(', ');
        let money = 0;
        let drink = '';
        let sugarAmount = 0;
        let costOfDrink = 0;

        money = +orderItems[0];
        drink = orderItems[1];

        if (drink === 'tea') {
            costOfDrink = 0.8;
            if (orderItems[2] === 'milk') {
                costOfDrink += +((costOfDrink * 0.1).toFixed(1));
                sugarAmount = +orderItems[3];
            } else {
                sugarAmount = +orderItems[2];
            }

        } else if (drink === 'coffee') {
            let typeOfCoffee = orderItems[2];

            if (typeOfCoffee === 'caffeine') {
                costOfDrink += 0.8;
            } else if (typeOfCoffee === 'decaf') {
                costOfDrink += 0.9;
            }

            if (orderItems[3] === 'milk') {
                costOfDrink += +((costOfDrink * 0.1).toFixed(1));
                sugarAmount = +orderItems[4];
            } else {
                sugarAmount = +orderItems[3];
            }
        }

        if (sugarAmount > 0) {
            costOfDrink += 0.10;
        }
        let resultMessage = '';

        if (costOfDrink > money) {
            let diff = costOfDrink - money;
            resultMessage = `Not enough money for ${drink}. Need $${diff.toFixed(2)} more.`;
        } else {
            let change = money - costOfDrink;
            resultMessage = `You ordered ${drink}. Price: $${costOfDrink.toFixed(2)} Change: $${change.toFixed(2)}`;
            totalIncome += costOfDrink;
        }

        console.log(resultMessage);
    }

    console.log(`Income Report: $${totalIncome.toFixed(2)}`);
}

solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);
solve(['8.00, coffee, decaf, 4', '1.00, tea, 2']);
function solve(input) {
    let totalIncome = 0;

    function calculateDrinkPrice(orderData) {
        let drinkPrice = 0;
        const drink = orderData[1];
        if (drink === 'coffee') {
            const coffeeType = orderData[2];
            drinkPrice = coffeeType === 'decaf' ? 0.9 : 0.8;
        } else {
            drinkPrice = 0.8;
        }

        if (orderData[orderData.length - 2] === 'milk') {
            const milkPrice = +((drinkPrice * 0.1).toFixed(1));
            drinkPrice += milkPrice;
        }

        const sugarQuantity = +orderData[orderData.length - 1];
        if (sugarQuantity > 0) {
            drinkPrice += 0.10;
        }

        return drinkPrice;
    }

    function printOrderMessage(input) {
        const orderData = input.split(', ');
        const coinsInserted = +orderData[0];
        const drink = orderData[1];
        let message = '';
        const drinkPrice = calculateDrinkPrice(orderData);

        if (drinkPrice > coinsInserted) {
            const moneyNeeded = drinkPrice - coinsInserted;
            message = `Not enough money for ${drink}. Need ${moneyNeeded.toFixed(2)}$ more.`;
        } else {
            const change = coinsInserted - drinkPrice;
            message = `You ordered ${drink}. Price: ${drinkPrice.toFixed(2)}$ Change: ${change.toFixed(2)}$`;
            totalIncome += drinkPrice;
        }

        console.log(message);
    }

    input.forEach(o => printOrderMessage(o));
    console.log(`Income Report: ${totalIncome.toFixed(2)}$`)
}

solve([
    '1.00, coffee, caffeine, milk, 4',
    '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0']
)
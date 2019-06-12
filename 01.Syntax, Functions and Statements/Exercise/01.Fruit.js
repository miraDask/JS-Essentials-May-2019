function solve(typeOfFruit, weightInGrams, pricePerKilo ) {
    let weightInKilos = weightInGrams / 1000;
    let totalPrice = weightInKilos * pricePerKilo;
    let outputMessage = `I need $${totalPrice.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${typeOfFruit}.`;

    console.log(outputMessage);
}

solve('apple', 1563, 2.35);
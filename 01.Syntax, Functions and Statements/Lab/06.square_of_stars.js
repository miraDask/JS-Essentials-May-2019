function solve(argument = 5){
    const symbol = '*';
    for (let i = 0; i < argument; i++) {
        let stringToPrint = '';
        
        for (let j = 0; j < argument; j++) {
            stringToPrint += symbol + ' ';            
        }

        console.log(stringToPrint.trim());
    }
}

solve();
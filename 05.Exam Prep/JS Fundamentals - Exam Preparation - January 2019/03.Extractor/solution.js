function solve() {
    const numberPattern = /^[0-9]+/;
    const output = document.querySelector('#output');
    const extractionBtn = document.querySelector('button');

    function extract() {
        let input = document.querySelector('#input').value;
        const numbersToTake = input.match(numberPattern)[0];
        input = input.substr(numbersToTake.length, +numbersToTake);
        const indexOfSymbolForSplit = input.length - 1;
        if (input.length > indexOfSymbolForSplit) {
            const symbolToSplit = input[indexOfSymbolForSplit];
            let splitedInput = input
                .split(symbolToSplit)
                .filter(x => x !== '');
            const regex = new RegExp(`[${splitedInput[0]}]`, 'g');
            const hashTagPattern = /#/g;
            let outputText = splitedInput[1]
                .replace(regex, '')
                .replace(hashTagPattern, ' ');
            output.textContent = outputText;
        }
    }

    extractionBtn.addEventListener('click', extract)
}
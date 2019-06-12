function solve() {
    function getMessage(textToEncode, condition) {
        const namePattern = / ([A-Z][A-Za-z]*)-([A-Z][A-Za-z]*)(\.-([A-Z][A-Za-z]*))? /;
        const nameMatch = namePattern.exec(textToEncode);
        let nameArr = [nameMatch[1], nameMatch[2]];
        if (nameMatch[4]) {
            nameArr[1] += '.';
            nameArr.push(nameMatch[4]);
        }
        const name = nameArr.join(' ');

        const airportPattern = / ([A-Z]{3})\/([A-Z]{3}) /;
        const airportMatch = airportPattern.exec(textToEncode);
        let airportToFlightFrom = '';
        let airportToFlightTo = '';
        if (airportMatch) {
            airportToFlightFrom = airportMatch[1];
            airportToFlightTo = airportMatch[2];
        }

        const flightNumberPattern = / ([A-Z]{1,3}[0-9]{1,5}) /;
        const flightNumberMatch = flightNumberPattern.exec(textToEncode);
        let flightNumber = '';
        if (flightNumberMatch) {
            flightNumber = flightNumberMatch[1];
        }

        const companyPattern = /- ([A-Z][a-z]*)\*([A-Z][a-z]*) /;
        const companyMatch = companyPattern.exec(textToEncode);
        let companyName = '';
        if (companyMatch) {
            companyName = companyMatch[1] + ' ' + companyMatch[2];
        }

        let result = '';
        switch (condition) {
            case 'all':
                if (name && flightNumber && airportToFlightTo && airportToFlightFrom && companyName) {
                    result = `Mr/Ms, ${name}, your flight number ${flightNumber} is from ${airportToFlightFrom} to ${airportToFlightTo}.`+
                    ` Have a nice flight with ${companyName}.`;
                }
                break;
            case 'flight':
                if (flightNumber && airportToFlightFrom && airportToFlightTo) {
                    result = `Your flight number ${flightNumber} is from ${airportToFlightFrom} to ${airportToFlightTo}.`;
                }
                break;
            case 'name':
                if (name) {
                    result = `Mr/Ms, ${name}, have a nice flight!`;
                }
                break;
            case 'company':
                if (companyName) {
                    result = `Have a nice flight with ${companyName}.`;
                }
                break;
        }

        return result;
    }

    const inputArr = document.getElementById('string').value.split(', ');
    const textToEncode = inputArr[0];
    const condition = inputArr[1];
    const resultElement = document.getElementById('result');
    resultElement.textContent = getMessage(textToEncode, condition);
}
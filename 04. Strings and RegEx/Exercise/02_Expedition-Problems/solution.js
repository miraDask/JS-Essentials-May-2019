function solve() {

    function getMessage(input, stringThatSurroundsMessage) {
        const regex = new RegExp(`${stringThatSurroundsMessage}(.+)${stringThatSurroundsMessage}`, 'gi');
        let match = regex.exec(input);
        return match[1];
    }

    const stringThatSurroundsMessage = document.getElementById('string').value;
    const text = document.getElementById('text').value;
    const coordinatesPattern = /(east|north)[\S\s]*?(\d{2})[^,]*?,[^,]*?(\d{6})/gi;
    let northernCoordinatesMessage = '';
    let easternCoordinatesMessage = '';

    let matches;

    while ((matches = coordinatesPattern.exec(text)) !== null) {
        const direction = matches[1].toLowerCase();
        if (direction === 'east') {
            easternCoordinatesMessage = `${matches[2]}.${matches[3]} E`;
        } else if (direction === 'north') {
            northernCoordinatesMessage = `${matches[2]}.${matches[3]} N`;
        }
    }

    const message = getMessage(text, stringThatSurroundsMessage);
    const resultElement = document.getElementById('result');
    const firstOutPutLine = document.createElement('p');
    firstOutPutLine.textContent = northernCoordinatesMessage;
    const secondOutPutLine = document.createElement('p');
    secondOutPutLine.textContent = easternCoordinatesMessage;
    const lastOutPutLine = document.createElement('p');
    lastOutPutLine.textContent = `Message: ${message}`;

    resultElement.appendChild(firstOutPutLine);
    resultElement.appendChild(secondOutPutLine);
    resultElement.appendChild(lastOutPutLine);
}
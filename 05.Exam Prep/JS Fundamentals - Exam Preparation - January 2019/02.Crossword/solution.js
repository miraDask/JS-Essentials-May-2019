function solve() {
    const output = document.querySelector('#output p');
    const buttons = Array.from(document.getElementsByTagName('button'));
    const filterBtn = buttons.find(b => b.textContent === 'Filter');

    function filter() {
        const input = document.getElementById('input').value;
        const option = document.querySelector('#filterSecondaryCmd').value;
        const position = document.getElementById('filterPosition').value;

        if (option) {
            switch (option) {
                case 'nums':
                    console.log(input);
                    let nums = input.split('').filter(x => Number(x)).map(Number);
                    if (position <= nums.length) {
                        output.textContent += nums[position - 1];
                    }
                    break;
                case 'lowercase':
                    let lowerCaseLetters = input.split('').filter(x => x.toLowerCase() === x && !Number(x));
                    if (position <= lowerCaseLetters.length) {
                        output.textContent += lowerCaseLetters[position - 1];
                    }
                    break;
                case 'uppercase':
                    let upperCaseLetters = input.split('').filter(x => x.toUpperCase() === x && !Number(x));
                    if (position <= upperCaseLetters.length) {
                        output.textContent += upperCaseLetters[position - 1];
                    }
                    break;
            }
        }
    }

    filterBtn.addEventListener('click', filter);
    const sortBtn = buttons.find(b => b.textContent === 'Sort');

    function sort() {
        const input = document.getElementById('input').value;
        const option = document.querySelector('#sortSecondaryCmd').value;
        const position = document.getElementById('sortPosition').value;
        let sortedInput = [];
        if (option === 'A') {
           sortedInput = input.split('').sort((a, b) => a.localeCompare(b));
        } else if (option === 'Z') {
           sortedInput = input.split('').sort((a, b) => b.localeCompare(a));
        }

        if (position <= sortedInput.length) {
            output.textContent += sortedInput[position - 1];
        }
    }

    sortBtn.addEventListener('click', sort);
    const rotateBtn = buttons.find(b => b.textContent === 'Rotate');

    function rotate() {
        const input = document.getElementById('input').value;
        let rotationsCount = document.querySelector('#rotateSecondaryCmd').value;
        rotationsCount = rotationsCount % input.length;
        const position = document.getElementById('rotatePosition').value;
        let textToRotate = input.split('');

        for (let i = 0; i < rotationsCount; i++) {
            const lastElement = textToRotate.pop();
            textToRotate.unshift(lastElement);
        }

        if (position <= textToRotate.length) {
            output.textContent += textToRotate[position - 1];
        }
    }

    rotateBtn.addEventListener('click', rotate);

    const getBtn = buttons.find(b => b.textContent === 'Get');

    function getCharacter() {
        const input = document.getElementById('input').value;
        const position = document.getElementById('getPosition').value;
        if (position <= input.length) {
            output.textContent += input.split('')[position - 1];
        }
    }

    getBtn.addEventListener('click', getCharacter);
}
function solve() {
    let optionElement = document.querySelector('#selectMenuTo');
    let binaryOptionElement = document.createElement('option');
    binaryOptionElement.textContent = 'Binary';
    binaryOptionElement.value = 'binary';
    optionElement.appendChild(binaryOptionElement);

    let hexadecimalOptionElement = document.createElement('option');
    hexadecimalOptionElement.textContent = 'Hexadecimal';
    hexadecimalOptionElement.value = 'hexadecimal';
    optionElement.appendChild(hexadecimalOptionElement);

    let inputElement = document.getElementById('input');
    let outputElement = document.getElementById('result');

    let buttonElement = document.querySelector('button');
    buttonElement.addEventListener('click', () => {

        let optionElementValue = optionElement.value;
        let inputValue = Number(inputElement.value);

        outputElement.value = optionElementValue === 'binary'
            ? inputValue.toString(2)
            : inputValue.toString(16).toUpperCase();

        inputElement.value = '';
    })
}
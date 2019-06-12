function solve() {
    let asciiCode = 65;
    let listItemsCollection = Array.from(document.querySelectorAll('ol li'));
    let inputFieldElement = document.querySelector('input');
    let addButton = document.querySelector('button');

    listItemsCollection.forEach(x => x.setAttribute('id', `${String.fromCharCode(asciiCode++)}`));
    addButton.addEventListener('click', addStudentName);
    console.log(listItemsCollection);

    function addStudentName() {
        let input = inputFieldElement.value;
        let studentName = handleInput(input);
        let targetElement = listItemsCollection
            .filter(x => x.id === studentName[0])[0];
        console.log(targetElement);
        studentName = targetElement.textContent === ''
            ? studentName
            : ', ' + studentName;

         targetElement.textContent += studentName;
         inputFieldElement.value = '';
    }

    function handleInput(inputText) {
        inputText = inputText.toLowerCase();
        let firstLetterOfName = inputText[0].toUpperCase();
        let nameWithoutFirstLetter = inputText.slice(1);
        return  firstLetterOfName + nameWithoutFirstLetter;
    }
}
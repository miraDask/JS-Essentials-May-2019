function solve() {

    let tableBodyElement = document.querySelector('tbody');
    let buttons = document.querySelectorAll('#exercise button');
    let generateButton = buttons[0];
    let buyButton = buttons[1];
    let textAreas = document.getElementsByTagName('textarea');
    let inputTextArea = textAreas[0];
    let outputTextArea = textAreas[1];
    let checkBoxToEnable = tableBodyElement.children[0].children[4].children[0];
    checkBoxToEnable.disabled = false;

    generateButton.addEventListener('click', handleFurnitureInformation);
    buyButton.addEventListener('click', handlePurchaseInformation);

    function handleFurnitureInformation() {
        let furnitureInfoJSON = inputTextArea.value;
        let furnitureObjectsCollection = JSON.parse(furnitureInfoJSON);

        furnitureObjectsCollection.forEach(x => {
            let newTableRowElement = generateNewTableRow(x);
            tableBodyElement.appendChild(newTableRowElement);
        });

        function generateNewTableRow(furnitureObj) {
            let newTableRow = document.createElement('tr');

            let imgTableData = document.createElement('td');
            let imageElement = document.createElement('img');
            imageElement.src = furnitureObj['img'];
            imgTableData.appendChild(imageElement);
            newTableRow.appendChild(imgTableData);

            let nameTableData = document.createElement('td');
            let newParagraph = document.createElement('p');
            newParagraph.textContent = furnitureObj['name'];
            nameTableData.appendChild(newParagraph);
            newTableRow.appendChild(nameTableData);

            let priceTableData = document.createElement('td');
            let priceParagraph = document.createElement('p');
            priceParagraph.textContent = furnitureObj['price'];
            priceTableData.appendChild(priceParagraph);
            newTableRow.appendChild(priceTableData);

            let decFactorTableData = document.createElement('td');
            let decFactorParagraph = document.createElement('p');
            decFactorParagraph.textContent = furnitureObj['decFactor'];
            decFactorTableData.appendChild(decFactorParagraph);
            newTableRow.appendChild(decFactorTableData);

            let checkboxTableData = document.createElement('td');
            let checkBoxElement = document.createElement('input');
            checkBoxElement.type = 'checkbox';
            checkboxTableData.appendChild(checkBoxElement);
            newTableRow.appendChild(checkboxTableData);

            return newTableRow;
        }
    }

    function handlePurchaseInformation() {

        let purchasedFurniture = [];
        let totalPrice = 0;
        let totalDecFactor = 0;
        let rows = Array.from(document.querySelectorAll('tbody tr'));

        rows.forEach(r => {
            let rowChildren = r.children;
            let currentCheckBox = rowChildren[4].children[0];
            let nameOfProduct = rowChildren[1].textContent.trim();
            let productPrice = Number(rowChildren[2].textContent);
            let productDecFactor = Number(rowChildren[3].textContent);

            if (currentCheckBox.checked === true) {
                purchasedFurniture.push(nameOfProduct);
                totalPrice += productPrice;
                totalDecFactor += productDecFactor;
            }
        });

        let averageDecFactor = totalDecFactor / purchasedFurniture.length;

        outputTextArea.value = `Bought furniture: ${purchasedFurniture.join(', ')}\n`
            + `Total price: ${totalPrice.toFixed(2)}\n`
            + `Average decoration factor: ${averageDecFactor}`;
    }
}
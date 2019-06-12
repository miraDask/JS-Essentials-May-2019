function solve() {

    let searchButton = document.getElementById('searchBtn');
    let searchFieldElement = document.getElementById('searchField');
    let tableRowsDataCollection = Array.from(document.querySelectorAll('tbody tr'));
    let selectedElements = null;

    searchButton.addEventListener('click', () => {
        selectedElements = Array.from(document.querySelectorAll('.select'));
        selectedElements.forEach(x => x.classList.remove('select'));

        let searchedData = searchFieldElement.value;

        for (let rowElement of tableRowsDataCollection) {
            let tableColsDataCollection = Array.from(rowElement.children);
            let rowContainsData = tableColsDataCollection
                .map(x => x.textContent)
                .some(x => x.includes(searchedData));

            if (rowContainsData) {
                rowElement.classList.add('select');
            }
        }
        searchFieldElement.value = '';
    })
}

function getData() {
    let input = JSON.parse(document.querySelector('textarea').value);
    const peopleInResult = document.querySelector('#peopleIn p');
    const peopleOutResult = document.querySelector('#peopleOut p');
    const blackListResult = document.querySelector('#blacklist p');
    const criteriaArr = input.pop();

    let peopleIn = [];
    let peopleOut = [];
    let blackList = [];

    for (let person of input) {
        if (person.action === 'peopleIn') {
            if (!peopleIn.some(x => x.firstName === person.firstName && x.lastName === person.lastName)
                && !blackList.some(x => x.firstName === person.firstName && x.lastName === person.lastName)) {
                peopleIn.push(person);
            }
        } else if (person.action === 'peopleOut' || person.action === 'blacklist') {
            let personInClub = peopleIn.find(x => x.firstName === person.firstName && x.lastName === person.lastName);
            if (personInClub){
                peopleOut.push(person);
                peopleIn.splice(peopleIn.indexOf(personInClub), 1);
            }

            if (person.action === 'blacklist') {
                blackList.push(person);
            }
        }
    }

    function sortList(criteria, listToOrder) {
        return listToOrder.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    }

    function displayList(peopleList, resultElement) {
        resultElement.textContent = peopleList
            .map(x => ({'firstName': x.firstName, 'lastName': x.lastName}))
            .map(x => JSON.stringify(x))
            .join(' ')
    }

    const criteria = criteriaArr['criteria'];
    const action = criteriaArr['action'];

    if (criteria === 'firstName' || criteria === 'lastName') {
        if (action === 'peopleIn') {
            sortList(criteria, peopleIn);
        } else if (action === 'peopleOut') {
            sortList(criteria, peopleOut);
        } else if (action === 'blacklist') {
            sortList(criteria, blackList);
        }
    }

    displayList(peopleIn, peopleInResult);
    displayList(peopleOut, peopleOutResult);
    displayList(blackList, blackListResult);
}
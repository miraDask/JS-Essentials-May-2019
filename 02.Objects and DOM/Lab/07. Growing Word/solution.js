function growingWord() {
    let targetElement = document.querySelector('#exercise p');
    let color = targetElement.style.color;

    switch (color) {
        case 'blue' :
            targetElement.style.color = 'green';
            break;
        case 'green' :
            targetElement.style.color = 'red';
            break;
        case 'red' :
            targetElement.style.color = 'blue';
            break;
        default :
            targetElement.style.color = 'blue';
            break;
    }

    let size = parseInt(targetElement.style.fontSize) * 2 || 2;
    targetElement.style.fontSize = `${size}px`;
}


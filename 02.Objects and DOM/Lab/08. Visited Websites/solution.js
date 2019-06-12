function solve() {
    let siteElements = document.querySelectorAll('.link-1');
    for (let siteElement of siteElements){
        siteElement.addEventListener('click', (e) => {
           // console.log(e.target);
            let currentTarget = e.currentTarget;
            let paragraphElement = currentTarget.getElementsByTagName('p')[0];
            let text = paragraphElement.textContent.split(' ');
            let clicks = Number(text[1]);
            text[1] = clicks + 1;
            paragraphElement.textContent =  text.join(' ');
        });
    }
}
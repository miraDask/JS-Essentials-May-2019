function createArticle() {
	let titleInputElement = document.getElementById('createTitle');
	let titleElementText = titleInputElement.value;
	let contentInputElement = document.getElementById('createContent');
	let contentElementText = contentInputElement.value;

	if (titleElementText && contentElementText){

		let sectionElement = document.getElementById('articles');
		let articleElement = document.createElement('article');
		sectionElement.appendChild(articleElement);

		let titleElement = document.createElement('h3');
		titleElement.textContent = titleElementText;
		articleElement.appendChild(titleElement);

		let contentElement = document.createElement('p');
		contentElement.textContent = contentElementText;
		articleElement.appendChild(contentElement);

		titleInputElement.value = '';
		contentInputElement.value = '';
	}
}
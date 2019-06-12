function solve() {
	let input = JSON.parse(document.getElementById('arr').value);
	const resultElement = document.getElementById('result');
	const dataPattern = /^([A-Z][a-z]* [A-Z][a-z]*) (\+359([ -])\d\3\d{3}\3\d{3}) ([a-z0-9]+@[a-z]+\.[a-z]{2,3})/g;
	const decoration = '<p>- - -</p>';

	input.forEach(dataString => {
		let match = dataPattern.exec(dataString);
		if (match) {
			const name = match[1];
			const phoneNumber = match[2];
			const email = match[4];
			const nameP = `<p>Name: ${name}</p>`;
			const phoneP = `<p>Phone Number: ${phoneNumber}</p>`;
			const emailP = `<p>Email: ${email}</p>`;
			resultElement.innerHTML += nameP;
			resultElement.innerHTML += phoneP;
			resultElement.innerHTML += emailP;
			resultElement.innerHTML += decoration;

		} else {
			const pargr = '<p>Invalid data</p>';
			resultElement.innerHTML += pargr;
			resultElement.innerHTML += decoration;
		}
	});
}

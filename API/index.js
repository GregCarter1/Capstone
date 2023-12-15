https://rapidapi.com/api-sports/api/api-football/

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://api-football-v1.p.rapidapi.com/v3/timezone');
xhr.setRequestHeader('X-RapidAPI-Key', '9b5dd6a0a9msh6d175a300874810p196d7ajsn2071358f2e4b');
xhr.setRequestHeader('X-RapidAPI-Host', 'api-football-v1.p.rapidapi.com');

xhr.send(data);

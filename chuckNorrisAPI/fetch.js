const button = document.querySelector('button');
const h2 = document.querySelector('h2');
button.addEventListener('click', getData)

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Key': '4c975868admshb98b91f56cc0a4dp159334jsnb03ed099e18d',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
	}
};

async function getData()
{
    const response = await fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
	.then(response => response.json())
	.then(response => response.value)
	.catch(err => console.error(err));

    const data = await response;
    h2.textContent = data;
}
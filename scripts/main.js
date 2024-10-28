
const getWeather = async (e) => {
    e.preventDefault();

    const cityName = document.getElementById('city').value;
    console.log(cityName);

    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityName}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '1f820aeddbmshc0d8ad3855a8160p1123b2jsnf0ca1f3abf0a',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();

    document.getElementById('location').innerText = result.location.name;
    document.getElementById('temperature').innerText = result.current.temp_c;
    document.getElementById('condition').innerText = result.current.condition.text;
	console.log(result);
} catch (error) {
	console.error(error);
}
}
const searchBtn = document.getElementById('getWeather')

searchBtn.addEventListener('submit', getWeather);

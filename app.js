function getWeather(){
    const apiKey = 'b73c20664d11109d96fb5fc980e3927b';
    const city = document.getElementById('city').value;

    if (!city){
        alert('Please enter a city')
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    
    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching current weather data:', error);
            alert('Error fetching current weather data. Please try again.');
         });

}

function displayWeather(data){
    const displayDiv = document.getElementById('weather-display')
    displayDiv.innerHTML = ` 
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>`;
}



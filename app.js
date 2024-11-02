function getWeather(){
    const apiKey = 'b73c20664d11109d96fb5fc980e3927b';
    
    const city = document.getElementById('city').value;

    if (!city){
        alert('Please enter a city')
        return;
    }
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forcastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid${apiKey}`;
    
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




fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13')
    .then(res => res.json())
    .then(data => console.log(data))


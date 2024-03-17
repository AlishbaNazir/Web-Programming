$(document).ready(function() {
    $('#searchBtn').click(function() {
        var city = $('#cityInput').val();
        if (city !== '') {
            fetchWeatherData(city);
        } else {
            alert('Please enter a city name.');
        }
    });

    $('#getLocationBtn').click(function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    });
});

function successCallback(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    fetchCityName(latitude, longitude);
}

function errorCallback(error) {
    alert('Error getting device location.');
}

function fetchCityName(latitude, longitude) {
    var apiKey = 'a0395ae95cd44f7706ac6109fdfdbdea'; 
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey + '&units=metric';

    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function(response) {
            var cityName = response.name;
            fetchWeatherData(cityName); 
        },
        error: function(xhr, status, error) {
            alert('Error fetching city name.');
        }
    });
}

function fetchWeatherData(city) {
    var apiKey = 'a0395ae95cd44f7706ac6109fdfdbdea'; 
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=metric';

    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function(response) {
            displayCurrentConditions(response);
        },
        error: function(xhr, status, error) {
            alert('Error: City not found.');
        }
    });
}

function displayCurrentConditions(data) {
    var cityName = data.name;
    var temperature = data.main.temp;
    var weatherDescription = data.weather[0].description;
    var humidity = data.main.humidity;

    var currentConditionsHtml = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature} °C</p>
        <p>Weather: ${weatherDescription}</p>
        <p>Humidity: ${humidity}%</p>
    `;

    $('#currentConditions').html(currentConditionsHtml);
}


document.addEventListener('DOMContentLoaded', function() {
  const apiKey = '6ebfe1f2d5be420280e221839233105';
  const city = 'Rubizhne';

  const forecastContainer = document.getElementById('forecast');

  const cityElement = document.getElementById('city');
  cityElement.textContent = `${city}`;

  fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`)
    .then(response => response.json())
    .then(data => {
      const forecastDays = data.forecast.forecastday;

      forecastDays.forEach(day => {
        const forecastDay = document.createElement('div');
        forecastDay.classList.add('forecast-day');

        const dateElement = document.createElement('div');
        dateElement.classList.add('forecast-date');
        dateElement.textContent = `Date: ${day.date}`; 
        forecastDay.appendChild(dateElement);

        const iconElement = document.createElement('img');
        iconElement.src = day.day.condition.icon;
        iconElement.alt = day.day.condition.text;
        forecastDay.appendChild(iconElement);

        const temperatureElement = document.createElement('div');
        temperatureElement.classList.add('forecast-temperature');
        temperatureElement.textContent = `${day.day.avgtemp_c}°C`;
        forecastDay.appendChild(temperatureElement);

        forecastContainer.appendChild(forecastDay);
      });
    });
});


const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherbox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {
  const APIKey = '9dca27514c83b4591bd2500414124555';
  const city = document.querySelector('.search-box input').value;

  if (city === '') return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {
      const image = document.querySelector('.weather-box img');
      const temperature = document.querySelector('.weather-box .temperature');
      const description = document.querySelector('.weather-box .description');
      const humidity = document.querySelector('.weather-details .humidity span');
      const wind = document.querySelector('.weather-details .wind span');

      switch (json.weather[0].main) {
        case 'Clear':
          image.src = 'assets/imagenes/clear.png';
          break;

        case 'Rain':
          image.src = 'assets/imagenes/rain.png';
          break;

        case 'Snow':
          image.src = 'assets/imagenes/snow.png';
          break;

        case 'Clouds':
          image.src = 'assets/imagenes/clouds.png';
          break;

        case 'Mist':
          image.src = 'assets/imagenes/mist.png';
          break;

        case 'Drizzle':
            image.src = 'assets/imagenes/drizzle.png';

        default:
          image.src = 'assets/imagenes/clouds.png';
      }

      temperature.textContent = json.main.temp + '°C';
      description.textContent = json.weather[0].description;
      humidity.textContent = json.main.humidity + '%';
      wind.textContent = json.wind.speed + ' m/s';
    });
});

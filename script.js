
$(document).ready(function () {
  const container = $('.container');
  const search = $('.search-box button');
  const weatherbox = $('.weather-box');
  const weatherDetails = $('.weather-details');

  search.on('click', () => {
    const APIKey = '9dca27514c83b4591bd2500414124555';
    const city = $('.search-box input').val();

    if (city === '') return;

    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${APIKey}`,
      method: 'GET',
      success: function (json) {
        const image = weatherbox.find('img');

        const temperature = weatherbox.find('.temperature');

        const description = weatherbox.find('.description');

        const humidity = weatherDetails.find('.humidity span');
        
        const wind = weatherDetails.find('.wind span');

        switch (json.weather[0].main) {
          case 'Clear':
            image.attr('src', 'assets/imagenes/clear.png');
            break;
          case 'Rain':
            image.attr('src', 'assets/imagenes/rain.png');
            break;
          case 'Snow':
            image.attr('src', 'assets/imagenes/snow.png');
            break;
          case 'Clouds':
            image.attr('src', 'assets/imagenes/clouds.png');
            break;
          case 'Mist':
            image.attr('src', 'assets/imagenes/mist.png');
            break;
          case 'Drizzle':
            image.attr('src', 'assets/imagenes/drizzle.png');
            break;
          default:
            image.attr('src', 'assets/imagenes/clouds.png');
        }

        temperature.text(json.main.temp + '°C');
        description.text(json.weather[0].description);
        humidity.text(json.main.humidity + '%');
        wind.text(json.wind.speed + ' m/s');
      }
    });
  });
});


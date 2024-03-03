const getWeather = (city) => {
    // Update city name display
    document.getElementById('cityName').innerHTML = city;
  
    // Fetch weather data
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c5e860c931msh9a98ce630d963dap1ed946jsn68d79ddfb959',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    })
    .then(response => response.json())
    .then((response) => {
      console.log(response);
  
      // Update HTML elements with weather data
      document.getElementById('cloud_pct').innerHTML = response.cloud_pct;
      document.getElementById('temp').innerHTML = response.temp;
      document.getElementById('feels_like').innerHTML = response.feels_like;
      document.getElementById('humidity').innerHTML = response.humidity;
      document.getElementById('min_temp').innerHTML = response.min_temp;
      document.getElementById('max_temp').innerHTML = response.max_temp;
      document.getElementById('wind_speed').innerHTML = response.wind_speed;
      document.getElementById('sunrise').innerHTML = response.sunrise;
      document.getElementById('sunset').innerHTML = response.sunset;
    })
    .catch(err => console.error(err));
  };
  
  // Assuming you have defined these elements in your HTML
  const cityInput = document.getElementById('city'); // Assuming you have an input field for city
  const submitBtn = document.getElementById('submit'); // Assuming you have a submit button
  
  // Event listener for the submit button
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(cityInput.value);
  });
  
  // Fetch weather for a default city (Kolkata)
  getWeather("Kolkata");

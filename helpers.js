module.exports = {
  getWeatherInfo,
};

const axios = require("axios");

function getWeatherInfo(locationName) {
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${locationName}&units=metric&appid=22d000f607a579733c17d4142574e8d6`
    )
    .then((response) => {
      const weatherInfo = {};
      weatherInfo.time = standardizeLocalTime(response.data.timezone);
      weatherInfo.location = response.data.name;
      weatherInfo.description = response.data.weather[0].description;
      weatherInfo.temperature = response.data.main.temp;

      console.log(
        `It's ${weatherInfo.time} in ${weatherInfo.location} with ${weatherInfo.description} at ${weatherInfo.temperature}°C`
      );
    })
    .catch((error) => {
      console.log(error);
    });
}

function standardizeLocalTime(timezone) {
  const date = new Date();

  const unixTime = date.getTime();
  const offset = date.getTimezoneOffset() * 60000;

  const utcTime = unixTime + offset;

  const standardTime = utcTime + timezone * 1000;
  const localTime = new Date(standardTime).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return localTime;
}

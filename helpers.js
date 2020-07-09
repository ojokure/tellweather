module.exports = {
  getWeatherInfo,
  normalizeInput,
};

const axios = require("axios");

function getWeatherInfo(locationName) {
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${locationName}&units=metric&appid=22d000f607a579733c17d4142574e8d6`
    )
    .then((response) => {
      const time = standardizeLocalTime(response.data.timezone);
      const location = response.data.name;
      const description = response.data.weather[0].description;
      const temperature = response.data.main.temp;

      console.log(
        `It's ${time} in ${location} with ${description} at ${temperature}°C`
      );
    })
    .catch((error) => {
      console.log(
        "Ooops! Please try again by running the command 'npm run tellweather << Location e.g London >>' "
      );
    });
}

function normalizeInput(input) {
  if (input) {
    const cleanedInput = input.trim().toLowerCase();
    return cleanedInput;
  }
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

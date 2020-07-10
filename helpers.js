module.exports = {
  getWeatherInfo,
  normalizeInput,
  standardizeLocalTime,
};

const axios = require("axios");

function getWeatherInfo(locationNames) {
  locationNames.forEach((location) => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=771dcef478ae5faab8ee377e738531eb`
      )
      .then((response) => {
        const time = standardizeLocalTime(response.data.timezone);
        const location = response.data.name;
        const description = response.data.weather[0].description;
        const temperature = response.data.main.temp;
        console.log(
          `It's ${time} in ${location} with ${description} at ${temperature}°C temp`
        );
      })
      .catch((err) => {
        console.log(
          "Oops! Please try again by running the command 'npm run tellweather << Location(s) e.g London, Milan, Lagos >>'"
        );
      });
  });
}

function normalizeInput(input) {
  const cleanedInput = input.map((str) => str.replace(/\s/g, ""));
  return cleanedInput;
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

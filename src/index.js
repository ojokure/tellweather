const { getWeatherInfo } = require("../helpers");

const locationName = process.argv[2];

function tellWeather() {
  getWeatherInfo(locationName);
}

tellWeather();

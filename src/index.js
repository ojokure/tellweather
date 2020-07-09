const { getWeatherInfo, normalizeInput } = require("../helpers");

const locationName = normalizeInput(process.argv[2]);

function tellWeather() {
  getWeatherInfo(locationName);
}

tellWeather();

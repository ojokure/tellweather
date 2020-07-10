const { getWeatherInfo, normalizeInput } = require("../helpers");

const [, , ...locationNames] = normalizeInput(process.argv);

function tellWeather() {
  getWeatherInfo(locationNames);
}

tellWeather();

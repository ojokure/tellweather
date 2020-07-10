const { getWeatherInfo, normalizeInput } = require("../helpers");

const [bin, sourcePath, ...locationNames] = normalizeInput(process.argv);

function tellWeather() {
  getWeatherInfo(locationNames);
}

tellWeather();

const { getWeatherInfo, normalizeInput } = require("../helpers");

const [, , ...locationNames] = normalizeInput(process.argv);

function tellWeather() {
  console.log("<<< loading >>>");
  getWeatherInfo(locationNames);
}

tellWeather();

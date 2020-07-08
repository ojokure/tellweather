const axios = require("axios");

const locationName = process.argv[2];

const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${locationName}&units=metric&appid=22d000f607a579733c17d4142574e8d6`;

const standardizeLocalTime = (timezone) => {
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
};

axios
  .get(apiUrl)
  .then((response) => {
    const time = standardizeLocalTime(response.data.timezone);
    const temperature = response.data.main.temp;
    const description = response.data.weather[0].description;

    console.log(
      `It's ${time} in ${response.data.name} with ${description} at ${temperature}°C`
    );
  })
  .catch((error) => {
    console.log(error);
  });

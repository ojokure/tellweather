const axios = require("axios");

const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=Lagos&units=metric&appid=22d000f607a579733c17d4142574e8d6`;

axios
  .get(apiUrl)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

const axios = require("axios");
const {
  getWeatherInfo,
  normalizeInput,
  standardizeLocalTime,
} = require("../helpers");

test("normalizeInput works as it should", () => {
  expect(
    normalizeInput([" utah", "Ikeja ", "       Tokyo", "  Paris", " Lagos"])
  ).toEqual(["utah", "Ikeja", "Tokyo", "Paris", "Lagos"]);
  expect(normalizeInput(["Accra ", "Lagos", "  Geneva"])).not.toEqual([
    "Accra ",
    "Lagos",
    "  Geneva",
  ]);
});

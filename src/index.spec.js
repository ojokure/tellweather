const axios = require("axios");
const response = require("./__mocks__/response");
const mockUrl = require("./__mocks__/axiosUrl");

const {
  getWeatherInfo,
  normalizeInput,
  standardizeLocalTime,
} = require("../helpers");

beforeAll(() => {
  const date = new Date(1594403660);
  spy = jest.spyOn(global, "Date").mockImplementation(() => date);
});

test("normalizeInput works as it should", () => {
  const testInput1 = [" utah", "Ikeja ", "       Tokyo", "  Paris", " Lagos"];
  const testInput2 = ["Accra ", "Lagos", "  Geneva"];

  expect(normalizeInput(testInput1)).toEqual([
    "utah",
    "Ikeja",
    "Tokyo",
    "Paris",
    "Lagos",
  ]);
  expect(normalizeInput(testInput2)).not.toEqual(testInput2);
});

test("getWeatherInfo works as it should", async () => {
  axios.get.mockImplementationOnce(() => Promise.resolve({ data: response }));

  const weatherInfo = await getWeatherInfo(["Lagos"]);

  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith(mockUrl);
});

test("standardizeLocalTime works as it should", async () => {
  localTime = standardizeLocalTime(3600);

  expect(localTime).toEqual("11:53 AM");
  expect(localTime).toMatch(new RegExp(/AM||PM/));
});

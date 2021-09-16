// refresh .json from definition found in .js
const spokaneWeatherMockDataToJSON = () => {
  const fs = require("fs");
  const path = require("path");
  const spokaneWeather = require("../../../../src/services/weather/mock/spokaneWeather.mock.data");
  const data = JSON.stringify({ spokaneWeather });
  const filepath = path.join(__dirname, "spokaneWeather.data.json");

  fs.writeFile(filepath, data, function (err) {
    err ? console.log(err) : console.log(`${filepath} created.`);
  });
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = spokaneWeatherMockDataToJSON;

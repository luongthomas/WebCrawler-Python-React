
const axios = require('axios');

// const units  = '&units=imperial';
const _baseURL = '127.0.0.1:3000/crawler';

function getQueryStringData(city) {
  return {
    q: city,
    type: 'accurate',
    cnt: 5,
  };
}


function getForecast(city) {
  const queryStringData = getQueryStringData(city);
  const url = prepUrl('forecast/daily', queryStringData);

  return axios.get(url)
    .then(function (forecastData) {
      return forecastData.data;
    });
}

module.exports = {
  getForecast: getForecast,
};

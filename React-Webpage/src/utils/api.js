
const axios = require('axios');

// const units  = '&units=imperial';
// const _baseURL = 'https://tangoflask.herokuapp.com/crawler';
const _baseURL = 'http://127.0.0.1:5000/add';

const config = {
    //method: 'get',
    url: _baseURL,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    responseType: 'json',
    withCredentials: false,
  }

function startCrawler(url, maxPages, keyword, searchType) {
  console.log(typeof(url), typeof(maxPages), typeof(keyword), typeof(searchType))

  axios.post('http://127.0.0.1:5000/crawler', {
    //headers: {'X-Requested-With': 'XMLHttpRequest'},
    //withCredentials: false,
    //responseType: 'json',
    url: url,
    maxPages: maxPages,
    keyword: keyword,
    searchType: searchType
  })
    .then(function(response) {
      console.log(response)
      console.log('crawler JSON here')
      return 'crawled'
    })
    .catch(function(error) {
      console.log(error)
      return 'error'
    })


  // return axios.get(config)
  //   .then(function (response) {
  //     console.log(response.data)
  //     return 'startCrawler returned';
  //   });
}

module.exports = {
  startCrawler
};

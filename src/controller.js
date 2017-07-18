const request = require('request')
// const API_KEY = // API KEY GOES HERE
const BASE_URL = 'https://wger.de/api/v2/?format=json'

function getPlaces(req, res, next) {
  request(BASE_URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })
}

module.exports = {
  getPlaces: getPlaces
};

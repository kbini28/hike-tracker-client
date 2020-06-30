const config = require('./../config')
const store = require('./../store')

const inputHike = function (data, token) {
  console.log('api hike data ', data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/hikes',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      hike: {
        parkName: data.hike.parkName,
        location: data.hike.location,
        distance: data.hike.distance,
        difficulty: data.hike.difficulty
      }
    }
  })
}

module.exports = {
  inputHike
}

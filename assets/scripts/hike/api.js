const config = require('./../config')
const store = require('./../store')

const inputHike = function (data, token) {
  // console.log('api hike data ', data)
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

const indexHikes = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/hikes',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteHike = function (dataId) {
  console.log('do i get here?', dataId)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/hikes/' + dataId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateHike = function (data, id) {
  console.log('update api ', data, id)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/hikes/' + id,
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
  inputHike,
  indexHikes,
  deleteHike,
  updateHike
}

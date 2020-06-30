const store = require('./../store')
const showHikesTemplate = require('./../templates/helpers/hike-index.handlebars')

const failure = function () {
  $('form').trigger('reset')
  $('#message').text('Invalid Information').show().removeClass().addClass('failure').delay(5000).fadeOut()
}

const inputHikeSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text(`Saved!`).show().removeClass().addClass('success').delay(4000).fadeOut()
  store.hike = response.hike
}

const indexHikesSuccess = function (response) {
  // console.log('ui response ', response)
  const showHikes = showHikesTemplate({ hikes: response.hikes })
  $('.content').append(showHikes)
}

const clearHikes = function () {
  $('.content').empty()
}

const deleteHikeSuccess = function (id) {
  $(`[data-id='${id}']`).remove()
}

module.exports = {
  failure,
  inputHikeSuccess,
  indexHikesSuccess,
  clearHikes,
  deleteHikeSuccess
}

const store = require('./../store')
const showHikesTemplate = require('./../templates/helpers/hike-index.handlebars')

const failure = function () {
  $('form').trigger('reset')
  $('#message').text('Invalid Information').show().removeClass().addClass('failure').delay(5000).fadeOut()
}

const inputHikeSuccess = function (response) {
  $('form').trigger('reset')
  $('.content').empty()
  $('#message').text(`Saved!`).show().removeClass().addClass('success').delay(4000).fadeOut()
  store.hike = response.hike
}

const indexHikesSuccess = function (response) {
  // console.log('ui response ', response)
  $('.content').empty()
  const showHikes = showHikesTemplate({ hikes: response.hikes })
  if (showHikes.length === 0) {
    $('.content').append('No hikes logged. Record your first hike!')
  } else {
    $('.content').append(showHikes)
  }
  $('.hike-updates').toggle(false)
}

const clearHikes = function () {
  $('.content').empty()
}

const deleteHikeSuccess = function (id) {
  $(`[data-id='${id}']`).remove()
}

const updateHikeSuccess = function (data, id) {
  // console.log('ui data, id ', data, id)
  $('form').trigger('reset')
  $(`[data-id='${id}']`).remove()
  store.hike = data.hike
  $('.content').empty()
  $('#message').text(`Saved!`).show().removeClass().addClass('success').delay(4000).fadeOut()
  // const showHikes = showHikesTemplate({ hikes: data.hikes })
  // $('.content').append(showHikes)
  $('#show-hikes-button').trigger('click')
}

module.exports = {
  failure,
  inputHikeSuccess,
  indexHikesSuccess,
  clearHikes,
  deleteHikeSuccess,
  updateHikeSuccess
}

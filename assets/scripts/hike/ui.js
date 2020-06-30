const store = require('./../store')

const failure = function () {
  $('form').trigger('reset')
  $('#message').text('Invalid Information').show().removeClass().addClass('failure').delay(5000).fadeOut()
}

const inputHikeSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text(`Saved!`).show().removeClass().addClass('success').delay(4000).fadeOut()
  store.hike = response.hike
}

module.exports = {
  failure,
  inputHikeSuccess
}

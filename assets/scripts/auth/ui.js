const store = require('./../store')

const failure = function () {
  $('form').trigger('reset')
  $('#message').text('Invalid Information').show().removeClass().addClass('failure').delay(5000).fadeOut()
}

const signUpSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text(`Welcome ${response.user.email}! Sign in to log your first hike!`).show().removeClass().addClass('success')
}

const signInSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text(`Welcome ${response.user.email}!`).show().removeClass().addClass('success').delay(4000).fadeOut()
  store.user = response.user
}

const changePassSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Password successfully updated').show().removeClass().addClass('success').delay(4000).fadeOut()
}

const signOutSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Take a hike!').show().removeClass().addClass('success').delay(4000).fadeOut()
  store.user = null
}

module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  changePassSuccess,
  signOutSuccess
}

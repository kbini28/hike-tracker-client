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
  $('#logged-out-view').hide()
  $('#logged-in-view').removeClass('hidden')
  $('nav').removeClass('hidden')
}

const changePassSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Password updated').show().removeClass().addClass('success').delay(4000).fadeOut()
  $('.change-pass-toggle').toggle(false)
}

const signOutSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Take a hike!').show().removeClass().addClass('success').delay(4000).fadeOut()
  $('#logged-out-view').show()
  $('#logged-in-view').addClass('hidden')
  $('.change-pass-toggle').toggle(false)
  $('.hike-updates').toggle(false)
  store.user = null
}

module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  changePassSuccess,
  signOutSuccess
}

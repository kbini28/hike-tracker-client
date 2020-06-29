const failure = function () {
  $('form').trigger('reset')
  $('#message').text('Invalid Information').show().removeClass().addClass('failure').delay(5000).fadeOut()
}

const signUpSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text(`Welcome ${response.user.email}! Sign in to log your first hike!`).show().removeClass().addClass('success')
}

module.exports = {
  failure,
  signUpSuccess
}

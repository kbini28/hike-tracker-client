'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const hikeEvents = require('./hike/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pass').on('submit', authEvents.onChangePass)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#hike-inputs').on('submit', hikeEvents.onInputHike)
  $('#show-hikes-button').on('click', hikeEvents.onIndexHikes)
  $('#clear-hikes-button').on('click', hikeEvents.onClearHikes)
  $('.content').on('click', '.remove-hike-btn', hikeEvents.onDeleteHike)
  // $('.content').on('click', 'update-hike-btn', hikeEvents.onUpdateHike)
})

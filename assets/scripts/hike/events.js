const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const onInputHike = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  const token = store.user.token

  api.inputHike(data, token)
    .then(ui.inputHikeSuccess)
    .catch(ui.failure)
}

const onIndexHikes = function (event) {
  event.preventDefault()

  api.indexHikes()
    .then(ui.indexHikesSuccess)
    .catch(ui.failure)
}

const onClearHikes = function (event) {
  event.preventDefault()
  ui.clearHikes()
}

const onDeleteHike = function (event) {
  console.log('click event ', event)
  event.preventDefault()
  const id = event.target.getAttribute('data-id')
  console.log(id)
  api.deleteHike(id)
    .then(ui.deleteHikeSuccess)
    .catch(ui.failure)
}

// const onUpdateHike = function (event) {
//   event.preventDefault()
// }

module.exports = {
  onInputHike,
  onIndexHikes,
  onClearHikes,
  onDeleteHike
  // onUpdateHike
}

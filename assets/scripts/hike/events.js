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

  api.indexHikes(event)
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
    .then(() => $(event.target).parent().remove())
    .catch(ui.failure)
}

// const onTriggerUpdate = function (event) {
//   event.preventDefault()
//   $onUpdateHike.toggle()
// }

const onUpdateHike = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  const id = form.getAttribute('data-id')
  console.log('event id ', id)
  api.updateHike(data, id)
    .then(() => ui.updateHikeSuccess(data, id))
    // .then(() => {
    //   $('#modalUpdateForm').on('click', '.save-hike-button', ui.updateHikeSuccess(data, id))
    // })
    .catch(ui.failure)
}

const onToggleUpdateBtn = function (event) {
  event.preventDefault()
  $('.hike-updates').toggle()
}

module.exports = {
  onInputHike,
  onIndexHikes,
  onClearHikes,
  onDeleteHike,
  // onTriggerUpdate,
  onUpdateHike,
  onToggleUpdateBtn
}

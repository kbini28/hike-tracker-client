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

// const onIndexHike = function (event) {
//   event.preventDefault()
//
//   api.indexHike()
// }

module.exports = {
  onInputHike
}

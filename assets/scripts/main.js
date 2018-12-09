const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const store = require('./store.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.onSignUpToApi(data)
    .then(function () {
      console.log('successful sign-up')
    })
    .catch(function () {
      console.log('failed sign-up')
    })
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.onSignInToApi(data)
    .then(function (response) {
      store.user = response.user
      console.log(response)
    })
    .catch(function () {
      console.log('failed-signin')
    })
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.onChangePasswordApi(data)
    .then(function () {
      console.log('change password successful')
    })
    .catch(function () {
      console.log('failed-changepassword')
    })
}

const onSignOut = function (event) {
  event.preventDefault()
  api.onSignOutToApi()
    .then(function () {
      store.user = null
      console.log('sign out successful')
    })
    .catch(function (response) {
      console.log('sign out failed')
      console.log(response)
    })
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}

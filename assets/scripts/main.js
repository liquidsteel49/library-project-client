const getFormFields = require('../../lib/get-form-fields.js')

const signUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  onSignUpToApi(data)
    .then(console.log('successful sign-up'))
    .catch(console.log('failed sign-up'))
}
//move to api.js
const onSignUpToApi = function (data) {
  return $.ajax({
    // change this later to use config.js file
    url: 'http://localhost:4741/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  onSignInToApi(data)
    .then(console.log('successful sign-in'))
    .catch(console.log('failed sign-up'))
}

// move to api.js
const onSignInToApi = function (data) {
  return $.ajax({
    // change this later to use config.js file
    url: 'http://localhost:4741/sign-in',
    method: 'POST',
    data
  })
}

// add the sign-out



// change password



module.exports = {
  signUp
  signIn
}

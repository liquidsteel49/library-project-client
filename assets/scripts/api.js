const config = require('./config.js')
const store = require('./store.js')


const onSignUpToApi = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const onSignInToApi = function (data) {
  return $.ajax({
    // change this later to use config.js file
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const onSignOutToApi = function () {
  return $.ajax({
    // change this later to use config.js file
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onChangePasswordApi = function(data){
  return $.ajax({
    // change this later to use config.js file
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  onSignInToApi,
  onSignUpToApi,
  onSignOutToApi,
  onChangePasswordApi
}

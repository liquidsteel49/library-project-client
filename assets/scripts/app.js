'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const main = require('./main.js')

$(() => {
  $('#user-registry').on('submit', main.signUp)
  $('#user-signin').submit(main.signIn)
  $('#logout-button').click(main.signOut)
  $('#user-change-password').submit(main.changePassword)

  /*
  function httpFetch(url, body, verb) {
    let myHeaders = new Headers()
    myHeaders.set('Content-Type', 'application/json')
    let myInit = { cache: 'default', headers: myHeaders, method: verb, mode: 'cors' }
    if (body) {
      myInit.body = JSON.stringify(body)
    }
    const myRequest = new Request(url, myInit)
    return fetch(myRequest)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      })
  }

  const url = "http://localhost:4741/sign-up"
  const data = {
    "credentials": {
      "email": "test4@test.com",
      "password": "test",
      "password_confirmation": "test"
    }
  }



httpFetch(url, data, "POST")
  .then((result) => {
    console.log(result)
  })
  .catch((result) => {
    console.error(result)
  })
*/

/*
  $.ajax({
    url: "http://localhost:4741/sign-up",
    data: {
      "credentials": {
        "email": "test5@test.com",
        "password": "test",
        "password_confirmation": "test"
      }
    },
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    success: (result) => {
      console.log(result)
    },
    error: (result) => {
      console.error(result)
    }
});
*/

})

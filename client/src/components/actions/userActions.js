function createUser(state) {
  return (dispatch) => {
    return fetch("http://localhost:8080/user/register", {
      method: "post",
      body: JSON.stringify(state),
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        dispatch({
          type: 'NEW_USER',
          payload: data
        })
      })
  }
}

function userLogin(state) {
  return (dispatch) => {
    return fetch("http://localhost:8080/user/login", {
      method: "post",
      body: JSON.stringify(state),
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        dispatch({
          type: 'USER_LOGIN',
          payload: data
        })
      })
  }
}


function storeUserToken(token) { //stores token and decoded token user info 
  return {
    type: "STORE_USER_TOKEN",
    payload: token
  }
}


export {
  createUser,
  userLogin,
  storeUserToken
}
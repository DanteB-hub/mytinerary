const userReducer = (state = [], action) => {
    switch (action.type) {

          case'NEW_USER':
            console.log(action.payload)
            return action.payload

          case "USER_LOGIN":
            console.log(action.payload)
           return action.payload
           
           case "STORE_TOKEN_USER":
            return Object.assign({}, state, {
              token: action.token,
            })

          default: 
            return state
      }
    }
    
    export default userReducer
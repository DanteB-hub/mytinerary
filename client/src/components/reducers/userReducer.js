const userReducer = (state = [], action) => {
    switch (action.type) {

          case'NEW_USER':
            console.log(action.payload)
            return action.payload
        default:
          return state
      }
    }
    
    export default userReducer
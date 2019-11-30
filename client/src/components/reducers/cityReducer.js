const cityReducer = (state = [], action) => {
    switch (action.type) {

          case'CITY_GET':
            return action.payload
        default:
          return state
      }
    }
    
    export default cityReducer
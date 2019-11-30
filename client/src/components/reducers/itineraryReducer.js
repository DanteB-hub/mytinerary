const itineraryReducer = (state = [], action) => {
    switch (action.type) {

          case'ITIN_GET':
            return action.payload
        default:
          return state
      }
    }
    
    export default itineraryReducer
const buscadorReducer = (state = "", action) => {
    switch (action.type) {
      case 'UPDATE_BUSCADOR':
        console.log("Accionando buscador dinamico season 10")
        console.log(action)
        return action.payload
      default:
        return state
    }
  }
  
  export default buscadorReducer
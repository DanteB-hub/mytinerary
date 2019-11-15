const cityReducers = (state = [, action]) => {
    switch (action.type) {
        case "HELLO_WORLD":
            console.log("Hello World", action)
            return [
                ...state, {
                    world_status: action.payload.world_status
                }
            ]
            default: 
                return state
    }
}

export default cityReducers
function cityGet() {
    return (dispatch, getState) => {
        console.log("getState()")
        console.log(getState())
        if(getState().length > 0) return;
        return fetch("http://localhost:8080/cities").then((res) => {
            return res.json()
    }).then((data) => {
        dispatch({
            type: "CITY_GET",
            payload: data
        })
    })
}}

export {
    cityGet
}
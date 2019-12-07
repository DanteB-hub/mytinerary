function itineraryGet(fetchs) {
    return (dispatch) => {
        return fetch(fetchs).then((res) => {
            return res.json()
    }).then((data) => {
        dispatch({
            type: "ITIN_GET",
            payload: data
        })
    })
}}

export {
    itineraryGet
}
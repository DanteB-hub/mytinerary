function itineraryGet(fetcha) {
    return (dispatch) => {
        return fetch(fetcha).then((res) => {
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
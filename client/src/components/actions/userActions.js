function  createUser(state) {
    return (dispatch) => {
        return fetch("http://localhost:8080/user/register", {
            method: "post",
            body: JSON.stringify(state),
            headers: { "Content-Type": "application/json"}
        })
        .then((res) => {
            return res.json()})
        .then((data)=>{
            dispatch( {
              type: 'NEW_USER',
              payload:data
            })
          })
        }}

export {
    createUser
}
import react from "react"

FetchCity = () => {
    this.setState({...this.state, isFetching: true})
    fetch(url)
    .then(response => reponse.json())
    .then(result => this.setState({city: result,
                                   isFetching: false}))
    .catch(err => console.log(err))
}

export default FetchCities
import startArrow from './images/circled-right-2.png'
import Carousel from 'react-bootstrap/Carousel'
import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { storeUserToken } from "./actions/userActions"
import { connect } from "react-redux";


class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: window.location.pathname.slice(6, -1)
    }
  }
  componentDidMount() {
    this.props.storeUserToken(this.state.token)
  }

  render() {
    return (
      <React.Fragment>

        <main>

          <div className="landing-main">
            <p>Find your perfect trip, designed by insiders who know and love their cities.</p>

            <h2><a className="browse" href="/Cities"> Start browsing</a></h2>
            <Link to="/Cities"><img src={startArrow} className="arrow" alt="" /></Link>
          </div>
        </main>
        <Carousel>
          <Carousel.Item>
            <div className="carousel-img-wrapper">
              <img
                className="w-40"
                src="https://i.forbesimg.com/media/lists/places/new-york-ny_416x416.jpg"
                alt="First slide"
              />
              <img
                className="w-40"
                src="https://i.forbesimg.com/media/lists/places/new-york-ny_416x416.jpg"
                alt="Third slide"
              />
              <img
                className="w-40"
                src="https://i.forbesimg.com/media/lists/places/new-york-ny_416x416.jpg"
                alt="Third slide"
              />
              <img
                className="w-40"
                src="https://i.forbesimg.com/media/lists/places/new-york-ny_416x416.jpg"
                alt="Third slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-img-wrapper">
              <img
                className="w-40"
                src="https://i.forbesimg.com/media/lists/places/new-york-ny_416x416.jpg"
                alt="Photo of New York"
              />
              <img
                className="w-40"
                src="https://i.forbesimg.com/media/lists/places/new-york-ny_416x416.jpg"
                alt="Third slide"
              />
              <img
                className="w-40"
                src="https://i.forbesimg.com/media/lists/places/new-york-ny_416x416.jpg"
                alt="Third slide"
              />
              <img
                className="w-40"
                src="https://i.forbesimg.com/media/lists/places/new-york-ny_416x416.jpg"
                alt="Third slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-img-wrapper">
              <img
                className="w-40"
                src="https://i.forbesimg.com/media/lists/places/new-york-ny_416x416.jpg"
                alt="First slide"
              />
              <img
                className="w-40"
                src="https://i.forbesimg.com/media/lists/places/new-york-ny_416x416.jpg"
                alt="Third slide"
              />
              <img
                className="w-40"
                src="https://i.forbesimg.com/media/lists/places/new-york-ny_416x416.jpg"
                alt="Third slide"
              />
              <img
                className="w-40"
                src="https://i.forbesimg.com/media/lists/places/new-york-ny_416x416.jpg"
                alt="Third slide"
              />
            </div>
          </Carousel.Item>

        </Carousel>

      </React.Fragment>

    )
  }
};

const mapStateToProps = (state) => {

  return {
    token: state.userReducer
  }
}


export default connect(mapStateToProps, { storeUserToken })(Landing);
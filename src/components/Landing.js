import startArrow from './images/circled-right-2.png';
import Carousel from 'react-bootstrap/Carousel'
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Landing extends Component {
    render()
        { return (
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
    <Carousel.Caption>
    </Carousel.Caption>
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
    <Carousel.Caption>
    </Carousel.Caption>
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
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </React.Fragment>

        )}
};

export default Landing;
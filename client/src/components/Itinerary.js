import React, { Component } from 'react';
import {itineraryGet} from './actions/itineraryActions'
import { connect } from 'react-redux'
import {BrowserRouter as Router,
        Link 
    } from "react-router-dom";
import BackArrow from './images/backarrow.png'
import Footer from './Footer.js'


class Itinerary extends Component {
        constructor (props) {
            super(props);
            this.state = {
                itineraries: [],
                isClicked: false
            }
        }

        componentDidMount(){
            console.log(this.props.match.params.id)
            let fetch = "http://localhost:8080/itineraries/" + this.props.match.params.id
            this.props.itineraryGet(fetch)
        }

        render (){ 
            return(
                <main>
                <h1>Hola</h1> 
                <ul>
                    {this.props.itineraries.map((itinerary) => {
                        return ( 
                            <React.Fragment>
                                <ul className="itineraryWrapper">
                                    <div>
                                        <ul className="itineraryView    ">
                                            <li>
                                                <h4>{itinerary.title}</h4>
                                                <img src="https://www.pathcenter.co.il/wp-content/uploads/2014/03/user_icon.png" height="50"/>
                                                <Link to="#"><h6> {itinerary.postedBy.username} </h6></Link>
                                                <ul>
                                                    <li> User Ratings: {itinerary.rating}/5 </li>
                                                    <li> Price: {itinerary.price} U$D </li>
                                                    <li> Duration in minutes: {itinerary.duration} </li>
                                                </ul>
                                                {itinerary.hashtags.map(hash => {
                                                    return (
                                                    <Link to={hash}>{hash + " "}</Link>)

                                                })}
                                            </li>
                                        </ul>
                                    </div>
                                </ul>

                            <Footer></Footer>
                            </React.Fragment>
                        )
                        })}
                </ul>
                </main>
            )}

    }

    const mapStateToProps = (state) => {
        console.log("state 2")
        console.log(state)
        return {
          itineraries:state.itineraryReducer
        }
      }

    export default connect(mapStateToProps, {itineraryGet})(Itinerary);
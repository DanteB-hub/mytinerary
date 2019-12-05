import React, { Component } from 'react';
import {itineraryGet} from './actions/itineraryActions'
import { connect } from 'react-redux'
import {BrowserRouter as Router,
        Link 
    } from "react-router-dom";
import BackArrow from './images/backarrow.png'
import Footer from './Footer.js'
import ItineraryList from './ItineraryList'

class Itinerary extends Component {
        constructor (props) {
            super(props);
            this.state = {
                itineraries: []
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
                <ul className="itinerariesWrapper">
                    {this.props.itineraries.map(itinerary => {
                    return (<ItineraryList title={itinerary.title} 
                                           postedBy={itinerary.postedBy}
                                           rating={itinerary.rating}
                                           price={itinerary.price}
                                           duration={itinerary.duration}
                                           hashtags={itinerary.hashtags}
                                           _id={itinerary._id}
                                           activities={itinerary.activities}>
                                           
                            </ItineraryList>)})}
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
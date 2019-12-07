import React, { Component } from 'react';
import {itineraryGet} from './actions/itineraryActions'
import { connect } from 'react-redux'
import {BrowserRouter as Router,
        Link 
    } from "react-router-dom";
import {imagesUrl} from "./Constants";

    class ItineraryList extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isClicked: false

                
            }

            this.handleClick = this.handleClick.bind(this);
        }
 
        

        handleClick() {
            this.setState(state => ({
              isClicked: !state.isClicked
            }));
          }
        
         
render ()
        { if(!this.state.isClicked) {
                                     return(
                        <li key={this.props._id}>
                            <div className="itineraryCard">
                                    <h4>{this.props.title}</h4>
                                    {this.props.hashtags.map(hash => {
                                        return (
                                        <Link to={hash}>{hash + " "}</Link>)})}
                                    <img src="https://www.pathcenter.co.il/wp-content/uploads/2014/03/user_icon.png" height="50"/>
                                    <Link to="#"><h6> {this.props.postedBy.username} </h6></Link>

                                        <p className="itineraryInfo">User Ratings: {this.props.rating}/5</p>
                                        <p className="itineraryInfo">Price: {this.props.price} U$D </p>
                                        <p className="itineraryInfo">Duration in minutes: {this.props.duration}</p>
            


                                <Link to="#" onClick={this.handleClick}>Show detailed activity list:</Link>

                                
                            </div>
                        </li>)}
            else {  
                return(
                    <li key={this.props._id}>
                        <div className="itineraryCard">
                                <h4>{this.props.title}</h4>
                                {this.props.hashtags.map(hash => {
                                    return (
                                    <Link to={hash}>{hash + " "}</Link>)})}
                                <img src="https://www.pathcenter.co.il/wp-content/uploads/2014/03/user_icon.png" height="50"/>
                                <Link to="#"><h6> {this.props.postedBy.username} </h6></Link>

                                    <p className="itineraryInfo">User Ratings: {this.props.rating}/5</p>
                                    <p className="itineraryInfo">Price: {this.props.price} U$D </p>
                                    <p className="itineraryInfo">Duration in minutes: {this.props.duration}</p>
        


                            <Link to="#" onClick={this.handleClick}>Hide detailed activity list:</Link>
                        
                            <ul>
                            {this.props.activities.map(activity => {
                                return (
                            <React.Fragment>
                            <li key={activity.activity_id}>{activity.name}
                            <img classname="w-40" src={imagesUrl + activity.localUrl}></img></li>
                            </React.Fragment>
                            )})}
                            </ul>

                            
                        </div>
                    </li>)}

                                    }
                        }

                           

export default ItineraryList
import home from './images/homeIcon.png'
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { atLanding: true}
    }
    render()
        {  return(
                    <footer>
                        <Link to="/Landing">
                        <img className="home-button" alt="" src={home}/>
                        </Link>
                    </footer> 

        )}
};

export default Footer;
import React, { Component } from 'react';
import Landing from './components/Landing.js'
import Header from "./components/Header.js"
import Cities from "./components/Cities.js"
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/stylesheets/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component  {
  render (){ return (
    <React.Fragment>
    <Router>
        <div className="App">
            <Header></Header>

              <Route exact path="/" component={Landing}/>
              <Route path="/Landing" component={Landing}/>
              <Route path="/Cities" component={Cities}/>
              <Route path="/Login" component={Login}/>
              <Route path="/Signup" component={Signup}/>

        </div>


    </Router>
    </React.Fragment>
  )
  }
}

export default App;
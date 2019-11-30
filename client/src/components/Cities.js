import Footer from './Footer.js'
import React, { Component } from 'react';
import {cityGet} from "./actions/cityActions";
import { connect } from 'react-redux'
import Buscador from "./Buscador"
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

class Cities extends Component {
        constructor(props){
          super(props);
          this.state= {
            cities:[]
          }
        }
        /*componentDidMount(){
          fetch("http://localhost:8080/cities").then((res)=>{
            return res.json();
          }).then((data)=>{
            this.setState({cities:data})
          })
        }*/
        

        componentDidMount(){
          console.log("inital state")
          console.log(this)
          console.log("location")
          console.log(this.props.location)
          this.props.cityGet()
        }


    render()
        { return (
            <React.Fragment>
            <main>
                <div className="landing-main">
                  
                    <p>This is where cities go</p>
                    <Buscador></Buscador>
                    <ul>
                        {this.props.cities && this.props.cities.filter((cities) => {return cities && (cities.name.toLowerCase().indexOf(this.props.buscador.toLowerCase())!=-1) || (cities.country.toLowerCase().indexOf(this.props.buscador.toLowerCase())!=-1)}).map((city)=>{
                            return (
                        <Link to={"/Cities/" + city._id}>
                          <li key={city._id}>
                            {city.name + ", " + city.country}
                          </li>
                        </Link>
                            )
                        })}

                    </ul>
                </div>
            </main>
            <Footer></Footer>
            </React.Fragment>


        )}
};

const mapStateToProps = (state) => {
  console.log("state 2")
  console.log(state)
  return {
    cities:state.cityReducer,
    buscador:state.buscadorReducer
  }
}


export default connect(mapStateToProps, {cityGet})(Cities);
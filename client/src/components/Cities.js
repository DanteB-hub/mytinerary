import Footer from './Footer.js'
import React, { Component } from 'react';


class Cities extends Component {
        constructor(props){
          super(props);
          this.state= {
            cities:[]
          }
        }
        componentDidMount(){
          fetch("http://localhost:8080/cities").then((res)=>{
            return res.json();
          }).then((data)=>{
            this.setState({cities:data})
          })
        }
    render()
        { return (
            <React.Fragment>
            <main>
                <div className="landing-main">
                    <p>This is where cities go</p>
                    <ul>
                        {this.state.cities.map((city)=>{
                            return (
                                <li key={city._id}>
                                    {city.name + ", " + city.country}
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </main>
            <Footer></Footer>
            </React.Fragment>


        )}
};

export default Cities;
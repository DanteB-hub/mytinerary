import React, { Component } from 'react';
import Footer from './Footer.js'
import {
    Link 
} from "react-router-dom";
import { timingSafeEqual } from 'crypto';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password : "",
            pfpurl : ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }
        handleInputChange(event) {
            const target = event.target;
            const value = target.value;
            const name = target.name;

            this.setState({
                [name]: value
            })

        }

        handleSubmit(event) {
            event.preventDefault();
            console.log("wesa")
        }
        
    render()
        { return (
            <React.Fragment>
                <main>
                    <div className="landing-main">
                        <p>This is where you sign up</p>
                        <form onSubmit={this.handleSubmit} name="New Account">
                            <label>E-mail: <br/>
                            <input id="email" type="email" name="email" value={this.state.email} onChange={this.handleInputChange} placeholder="examble@example.com" required/></label>
                            
                            <label>Password: <br/>
                            <input id="password" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} required/></label>

                            <label>Link to Profile Picture (optional): <br/>
                            <input id="pfpurl" type="text" name="pfpurl" value={this.state.pfpurl} onChange={this.handleInputChange}/></label>

                            <input type="submit" value="Create Account"/>


                            <p>Already have an account? <Link to="/Login/"> Log in </Link> instead</p>

                        </form>
                    </div>
                </main>
            <Footer></Footer>
            </React.Fragment>

        )};
}

export default Signup;
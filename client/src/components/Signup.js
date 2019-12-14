import React, { Component } from 'react';
import Footer from './Footer.js'
import PasswordField from './PasswordField'
import {createUser} from './actions/userActions'
import {connect} from "react-redux"
import {
    Link 
} from "react-router-dom";




class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password : "",
            pfpurl : "",
            username: ""
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
        handleChangeValue = e => this.setState({password: e.target.value});

        handleInput(event) {
            const target = event.target;
            const value = target.value;
            const name = target.name;

            this.setState({
                [name]: value
            })

        }

        handleSubmit(event) {
            event.preventDefault();
            console.log(this.state)
            this.props.createUser(this.state)
        }
        
    render()
        { return (
            <React.Fragment>
                <main>
                    <div className="landing-main">
                        <p>This is where you sign up</p>
                        <form onSubmit={this.handleSubmit} name="New Account">
                            <label>E-mail: <br/>
                                <input id="email" type="email" name="email" value={this.state.email} onChange={this.handleInput} placeholder="examble@example.com" required/>
                            </label>
                            
                            <label>Username: <br/>
                                <input id="username" type="text" name="username" value={this.state.username} onChange={this.handleInput} required/>
                            </label>

                            <label>Password: <br/>
                                <PasswordField password={this.state.password} onChangeValue={this.handleChangeValue}></PasswordField>
                            </label>

                            <label>Link to Profile Picture (optional): <br/>
                                <input id="pfpurl" type="text" name="pfpurl" value={this.state.pfpurl} onChange={this.handleInput}/>
                            </label>

                            <input type="submit" value="Create Account"/>


                            <p>Already have an account? <Link to="/Login/"> Log in </Link> instead</p>

                        </form>
                    </div>
                </main>
            <Footer></Footer>
            </React.Fragment>

        )};
}


const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    }
}
export default connect(mapStateToProps, {createUser})(Signup);
import React, { Component } from 'react';
import Footer from './Footer.js'
import PasswordField from './PasswordField'
import {userLogin} from './actions/userActions'
import {connect} from "react-redux"
import {
    Link 
} from "react-router-dom"


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password : "",
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
            this.props.userLogin(this.state)
        }

    render()
        { return (
            <React.Fragment>
            <main>
                <div className="landing-main">
                    <p>This is where you log in</p>
                    <form onSubmit={this.handleSubmit} name="New Account">

                            <label>E-mail: <br/>
                                <input id="email" type="email" name="email" value={this.state.email} onChange={this.handleInput} placeholder="youremail@mail.com" required/>
                            </label>

                        <label>Password: <br/>
                            <PasswordField password={this.state.password} onChangeValue={this.handleChangeValue}></PasswordField>
                        </label>

                        <input type="submit" value="Log in"/>
                    </form>
                </div>
            </main>
            <form action="Login/user/google">
                <button>Log in with Google</button>
            </form>
            <Footer></Footer>
            </React.Fragment>       

        )}
};

const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    }
}
export default connect(mapStateToProps, {userLogin})(Login);
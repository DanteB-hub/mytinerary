import React, { Component } from 'react';
import Footer from './Footer.js'
import PasswordField from './PasswordField'


class Login extends Component {
    render()
        { return (
            <React.Fragment>
            <main>
                <div className="landing-main">
                    <p>This is where you log in</p>
                    <form>

                        <label> E-mail: <br/>
                            <input type="email" required/>
                        </label>
                        <label>Password: <br/>
                            <PasswordField /*password={this.state.password} onChangeValue={this.handleChangeValue}*/></PasswordField>
                        </label>

                        <input type="submit" value="Log in"/>
                    </form>
                </div>
            </main>
            <Footer></Footer>
            </React.Fragment>       

        )}
};

export default Login;
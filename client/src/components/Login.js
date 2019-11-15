import React, { Component } from 'react';
import Footer from './Footer.js'
class Login extends Component {
    render()
        { return (
            <React.Fragment>
            <main>
                <div className="landing-main">
                    <p>This is where you log in</p>
                </div>
            </main>
            <Footer></Footer>
            </React.Fragment>       

        )}
};

export default Login;
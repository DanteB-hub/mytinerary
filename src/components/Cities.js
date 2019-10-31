import Footer from './Footer.js'
import React, { Component } from 'react';

class Cities extends Component {
    render()
        { return (
            <React.Fragment>
            <main>
                <div className="landing-main">
                    <p>This is where cities go</p>
                    <img src="http://nerdywithchildren.com/wp-content/uploads/2013/07/cartoon-city-skyline.jpg" alt=""></img>

                </div>
            </main>
            <Footer></Footer>
            </React.Fragment>


        )}
};

export default Cities;
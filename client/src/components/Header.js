import React, { Component } from 'react';
import Logo from "./images/MYtineraryLogo.png"
import Dropdown from 'react-bootstrap/Dropdown'
import Image from 'react-bootstrap/Image'


class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <nav>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <Image className="user-picture" src="https://www.pathcenter.co.il/wp-content/uploads/2014/03/user_icon.png" roundedCircle />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/Signup">Create Account</Dropdown.Item>
                            <Dropdown.Item href="/Login">Log in</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                </nav>
                <div className="Logo-wrapper">
                    <img src={Logo} className="App-logo" alt="logo" />
                </div>
            </header>
        )
    }
};

export default Header 
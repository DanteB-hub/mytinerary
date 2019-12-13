import React, { Component } from 'react';

class PasswordField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPswrd: false
        }

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.setState(state => ({
          showPswrd: !state.showPswrd
        }));
      }      

    

   


    render() {
            if(!this.state.showPswrd) {
                return(           
                    <React.Fragment>
                        <input id="password" name="password" type="password" value={this.props.password} onChange={this.props.onChangeValue}></input>
                        <button type="button" onClick={this.handleClick}>Show/Hide Password</button>
                    </React.Fragment>
                 )} else {
                     return(
                        <React.Fragment>
                            <input id="password" name="password" type="text" value={this.props.password} onChange={this.props.onChangeValue}>
                                </input><button type="button" onClick={this.handleClick}>Show/Hide Password</button>
                        </React.Fragment>
                     )
                 }
}}

export default PasswordField
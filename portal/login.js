import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

var Login = React.createClass ({
    getInitialState() {
        return{
            username: "",
            password: ""
        };
    },
    submit() {
        console.log(this.state.username);
        console.log(this.state.password);
    },
    usernameChange(event) {
        console.log(event.target.value)
        this.setState({
            username : event.target.value
        })
    },
    passwordChange(event){
        console.log(event.target.value)
        this.setState({
            password: event.target.value
        })
    },

    render() {
        return (
            <div style={styles.loginBlock}>
                <TextField
                    hintText="type the username"
                    floatingLabelText="username"
                    style={styles.loginBlockItem}
                    onChange={this.usernameChange}
                    />
                <TextField
                    hintText="type the password"
                    floatingLabelText="Password"
                    type="password"
                    style={styles.loginBlockItem}
                    onChange={this.passwordChange}
                    />
                <RaisedButton label="login" primary={true} style={styles.loginButton} onClick={this.submit}/>
            </div>
        );
    }
})
const styles = {
    loginBlock: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        heigth: 700
    },
    loginButton: {
        height: 40,
        width: 300
    },
    loginBlockItem: {
        height: 70,
        width: 300
    }
};


export default Login;



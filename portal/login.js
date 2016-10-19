import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

var Login = React.createClass ({
    getInitialState() {
        return{
            username: "",
            password: "",
            loginError : ""
        };
    },
    submit() {
        console.log(this.state.username);
        console.log(this.state.password);
         fetch("http://localhost:3000/login",{
             method : 'post',
             headers : {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'    
             },
             body : JSON.stringify({
                 username : this.state.username,
                 password : this.state.password
             })
         }).then(

           response => response.json().then( value => {
            console.log(value);
            if( value.success){
                this.props.history.push('/list');
            }else{
                this.setState({
                    loginError: "用户名密码错误"
                });
            }
           } )
    )
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
                <div>{ this.state.loginError }</div>
            </div>
        );
    }
})
const styles = {
    loginBlock: {
        width: '100%',
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
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



import React, {Component}  from "react"
import {Navigate, useNavigate} from 'react-router-dom';
import './index.css'

class Login extends Component{
    state = {
        usernameInput: '',
        passwordInput: '',
        redirectToRegisterForm: false,
        showSubmitError: false,
        errorMsg: "",

    }

   /* onRedirectToRegisterForm = () => {
        this.setState({redirectToRegisterForm: true})
    } */



    submitForm =async (event) => {
        event.preventDefault();


        const {usernameInput, passwordInput} = this.state;
        if (usernameInput === "") {
            alert("Please enter valid Username");
        } else if (passwordInput === "") {
            alert("Please enter your password");
        }
        const savedUser = JSON.parse(localStorage.getItem('registeredUser'))
        if (!savedUser) {
            this.setState({errorMsg: 'No registered user found'})
            return
        }

        if (savedUser.firstName.toLowerCase() === usernameInput.toLowerCase() && savedUser.password === passwordInput) {
            const token = crypto.randomUUID()
            localStorage.setItem('authToken', token)

            this.props.navigate('/')
        } else {
            this.setState({error: 'Invalid credentials'})
        }


     }

        onChangePasswordInput = event => {
            this.setState({passwordInput: event.target.value})
        }

        renderPasswordInputField = () => {
            const {passwordInput} = this.state

            return (
                <>
                    <label htmlFor="password" className="input-label">Password</label>
                    <input id="password" className="search-input" type="password" onChange={this.onChangePasswordInput}
                           value={passwordInput}/>
                </>
            )
        }

        onChangeUsernameInput = event => {
            this.setState({usernameInput: event.target.value})
        }

        renderUsernameInputField = () => {
            const {usernameInput} = this.state

            return (
                <>
                    <label className="input-label" htmlFor="emailInput">Username</label>
                    <input type="text" value={usernameInput} className="search-input" id="emailInput"
                           onChange={this.onChangeUsernameInput}/>
                </>
            )
        }

    render() {
        const {errorMsg} = this.state;
        if(this.state.redirectToRegisterForm) {
            return <Navigate to="/registerForm" replace />
        }
        const token = localStorage.getItem('registeredUser')
        if(!token) {
            return <Navigate to="/registerForm" replace />
        }

        return (

            <div className="login-form-container">
                {/*<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeQFdUzr_h4YAgYjMPOnuY9qeXGi0OfZkAQ&s" alt="logo"/>*/}
                <form onSubmit={this.submitForm} className="form-container" >
                    <div className="input-container">
                        {this.renderUsernameInputField()}
                    </div>
                    <div className="input-container">
                        {this.renderPasswordInputField()}
                    </div>
                   <div className="button-container">
                       <button type="submit" className="button">Login</button>

                   </div>
                    {<p>{errorMsg}</p>}
                </form>
            </div>
        )
    }
}





function LoginWithNavigate(props){
    const navigate = useNavigate();
    return <Login {...props} navigate={navigate} />;
}

export default LoginWithNavigate
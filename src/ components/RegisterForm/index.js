import {Component} from 'react'
import './index.css'
import {Navigate} from "react-router-dom";

class RegisterForm extends Component {
    state = {
        firstNameInput: '',
        lastNameInput: '',
        emailInput: '',
        passwordInput: '',
    }

    onChangeFirstNameInput = event => {
        this.setState({firstNameInput: event.target.value})
    }
    onChangeLastNameInput = event => {
        this.setState({lastNameInput: event.target.value})
    }
    onChangeEmailInput = event => {
        this.setState({emailInput: event.target.value})
    }
    onChangePasswordInput = event => {
        this.setState({passwordInput: event.target.value})
    }

    changeSubmittedStatus = () => {
        this.setState({isSubmitted: true})
    }


    onSubmitForm =async event => {
        event.preventDefault()
        const  {firstNameInput, lastNameInput, emailInput, passwordInput} = this.state
        if(!firstNameInput || !lastNameInput ||  !emailInput || !passwordInput ) {
            alert("Please enter all credentials")
         } else {
            const userDetails = {
                firstName: firstNameInput,
                lastName: lastNameInput,
                email: emailInput,
                password: passwordInput
            }
            const url = 'https://dummyjson.com/users/add'
            const options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(userDetails)
            }
            const response = await fetch(url, options)
            const data = await response.json()

            if (response.ok) {
                localStorage.setItem('registeredUser', JSON.stringify(data))
            }
        }
    }

    render() {
        const  {firstNameInput, lastNameInput, emailInput, passwordInput} = this.state
        const token =  localStorage.getItem('registeredUser')
        if(token) {
            return <Navigate to="/login" replace />
        }

        return (
            <div className="form-container">
                <form className="form" onSubmit={this.onSubmitForm}>
                    <div className="label-container">
                        <label className="label" htmlFor="firstName">First Name</label>
                        <input placeholder="FIRST NAME" id="firstName" type="text" className="form-control"  value={firstNameInput} onChange={this.onChangeFirstNameInput} />
                    </div>

                    <div className="label-container">
                        <label className="label" htmlFor="lastName">Last Name</label>
                        <input placeholder="LAST NAME" id="lastName" type="text" className="form-control" value={lastNameInput} onChange={this.onChangeLastNameInput} />
                    </div>

                    <div className="label-container">
                        <label className="label" htmlFor="email">Email</label>
                        <input placeholder="EMAIL ID" id="email" type="text" className="form-control" value={emailInput} onChange={this.onChangeEmailInput} />
                    </div>

                    <div className="label-container">
                        <label className="label" htmlFor="password">Password</label>
                        <input placeholder="PASSWORD" id="password" type="password" className="form-control" value={passwordInput} onChange={this.onChangePasswordInput} />
                    </div>
                    <div className="button-containe">
                        <button className="btn btn-primary" type="submit">Register</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default RegisterForm
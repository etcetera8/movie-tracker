import React, { Component } from 'react';
import { signUpUser, getAllUsers } from '../../api.js';
import './SignUp.css';

export class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password:'',
      errorStatus: false
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]:value})
  }

  handleSignUp = async (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    const userArray = await getAllUsers();
    const existing = await userArray.find(user => user.email === email);

    !existing ? signUpUser(email, password, name) : this.emailTaken(true);
    return existing
  }

  emailTaken = (warning) => {
    if (warning) {
      this.setState({errorStatus: true})
    }
  }

  render () {
    console.log(this.emailTaken());
    return (
      <div>
        <form type="submit">
          <input
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            type="text"
            placeholder="Enter your name"
          />
          <input
            className={!this.state.errorStatus ? "" : "error"}
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            type="text"
            placeholder="Enter Email"
          />
          <input
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
            type="text"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            onClick={this.handleSignUp}>
            Sign Up
          </button>
        </form>
       
       { this.state.errorStatus && 
        <p className="login-error">Sorry, an account with this e-mail already exists</p>
       }
      </div>
    )
  }
}
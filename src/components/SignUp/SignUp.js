import React, { Component } from 'react';
import { signUpUser, getAllUsers } from '../../api.js';

export class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password:''
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

    !existing ? signUpUser(email, password, name) : console.log('email already in use')
  }

  render () {
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
      </div>
    )
  }
}
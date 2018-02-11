import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activeUserAction } from '../../actions/actionIndex';
import { validateUser } from '../../api.js';
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
    const allUsers = await getAllUsers();
    const userExists = await allUsers.find(user => user.email === email);

    if (userExists) {
      this.emailTaken(true);
    } else {
      await signUpUser(email, password, name)
      const validate = await validateUser(name, password);

      this.props.handleLogin(validate.data)
    }

    return userExists
  }

  emailTaken = (warning) => {
    if (warning) {
      this.setState({errorStatus: true})
    }
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

const mapDispatch = (dispatch) => ({
  handleLogin: (user) => dispatch(activeUserAction(user)),
})

export default connect(null, mapDispatch)(SignUp)
import React, { Component } from 'react';

export class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password:''
    }
  }

  handleChange=(e)=> {
    const { name, value } = e.target;
    this.setState({[name]:value})
  }

  render () {
    return (
      <div>
        <form type="submit">
          <input value={this.state.name} onChange={this.handleChange} name="name" type="text" placeholder="Enter your name" />
          <input value={this.state.email} onChange={this.handleChange} name="email" type="text" placeholder="Enter Email" />
          <input value={this.state.password} onChange={this.handleChange} name="password" type="text" placeholder="Enter your password" />
        <button type="submit">Sign Up</button>
        </form>
      </div>
    )

  }
}
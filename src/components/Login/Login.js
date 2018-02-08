import React, {Component} from 'react';
import { validateUser } from '../../api.js';
console.log(validateUser);
export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange=(e)=> {
    this.setState({[e.target.name]:e.target.value})
  }

  //'Taylor', 'password', 'tman2272@aol.com'

  handleInput = (e) => {
    e.preventDefault();
    validateUser()
    //if succesfull redirect'/'
    //if fail alert username/password not found
  }

  render() {
    return (
      <div>
        <form type="submit">
          <input
            name="username" 
            type='text' 
            placeholder="User Name or E-mail"
            value={this.state.username}
            onChange={this.handleChange}
            />
          <input 
            name="password"
            type='password' 
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange} 
            />
          <button 
            onClick={this.handleInput}
            type="submit">login
          </button>
        </form>
      </div>
    )
  }

}
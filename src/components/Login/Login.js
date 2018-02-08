import React, {Component} from 'react';
import { getAllUsers, validateUser } from '../../api.js';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange=(e)=> {
    const { name, value } = e.target;
    this.setState({[name]:value})
  }
  //if succesfull redirect'/'
  //if fail alert username/password not found
  //'Taylor', 'password', 'tman2272@aol.com'

  handleInput = async (e) => {
    e.preventDefault();
    const userArray = await getAllUsers()
    console.log('userArray', userArray);

    const username = this.state.username
    const password = this.state.password
    console.log('login info: ', username, password)

    const validate = await validateUser(username, password)
    console.log('validate: ', validate)
  
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
import React, {Component} from 'react';
import { getAllUsers, validateUser } from '../../api.js';
import { connect } from 'react-redux';
import { loginStatus } from '../../actions/actionIndex';
import { withRouter } from 'react-router-dom';
import { SignUp } from '../SignUp/SignUp'
export class Login extends Component {
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
  //'Taylor', 'password', 'tman2272@aol.com'

  handleInput = async (e) => {
    e.preventDefault();
    const { username, password } = this.state
    const userArray = await getAllUsers()
    const validate = await validateUser(username, password)
  
    if(validate.status === 'success') {
      this.props.handleLogin(true);
      this.setState({username: '', password: ''})

    } else {
      console.log('failed to login try again n00b')

      this.props.handleLogin(false);
    }


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
        <SignUp />
      </div>
    )
  }
}

const mapState = (store) => {
  return {}
}

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (login) => dispatch(loginStatus(login))
})

export default withRouter(connect(mapState, mapDispatchToProps)(Login))


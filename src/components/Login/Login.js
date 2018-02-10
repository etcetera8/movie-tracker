import React, {Component} from 'react';
import { getAllUsers, validateUser } from '../../api.js';
import { connect } from 'react-redux';
import { activeUserAction } from '../../actions/actionIndex';
//import { withRouter } from 'react-router-dom';
import { SignUp } from '../SignUp/SignUp';
class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange=(e)=> {
    const { name, value } = e.target;
    this.setState({[name]:value});
  }

  handleLoginAttempt = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    //const userArray = await getAllUsers();
    const validate = await validateUser(username, password);
    console.log('validate', validate.data)

    if(validate.status === 'success') {
      console.log('props: ', this.props)
      //this.props.loginId(validate.data.id)
      this.props.handleLogin(validate.data);
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
            onClick={this.handleLoginAttempt}
            type="submit">login
          </button>
        </form>
        <SignUp />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (user) => dispatch(activeUserAction(user)),
});

export default connect(null, mapDispatchToProps)(Login);

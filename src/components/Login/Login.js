import React, {Component} from 'react';

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

  handleInput = (e) => {
    e.preventDefault();

    //     fetch('/api/v1/groceries', {
    //   method: 'POST',
    //   body: JSON.stringify({ grocery }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response => response.json())
    // .then(groceries => {
    //   this.setState({
    //     grocery: {
    //       name: '',
    //       quantity: '' 
    //     }
    //   }, updateGroceryList(groceries));
    // })
    // .catch(error => {
    //   this.setState({
    //     errorStatus: 'Error adding grocery'
    //   })
    // });
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
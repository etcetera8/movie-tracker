import React, {Component} from 'react';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      string: ''
    }
  }

  componentDidMount() {
    this.setState({ string: 'hello'})
  }

  render() {
    return (
      <div>
        <form type="submit">
          <input type='text' placeholder="User Name or E-mail" />
          <input type='password' placeholder="Password" />
          <button type="submit">login</button>
        </form>
      </div>
    )
  }

}
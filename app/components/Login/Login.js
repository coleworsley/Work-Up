import React, { Component } from 'react';
import { SignUp } from '../SignUp/SignUp'

const initialState = {
  status: 'login',
  signup: {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  },
  login: {
    email: '',
    password: '',
  }
}

export default class Login extends Component {
  constructor() {
    super();
    this.state = { initialState }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  assignType(field) {
    switch (field) {
      case 'email':
        return 'email';
      case 'password':
        return 'password'
      default:
        return 'text';
    }
  }

  handleSubmit() {
    const { fetchUserSignUp } = this.props;
    const { signup } = this.state
    fetchUserSignUp(signup);

    this.setState({ initialState });
  }

  handleChange(e, field) {
    const { signup } = this.state;
    const newState = Object.assign({}, signup, {[field]: e.target.value})
    this.setState({ signup: newState })
  }

  createInput(field) {
    return <input
              type={this.assignType(field)}
              name={field}
              placeholder={field}
              value={this.state[field]}
              onChange={(e) => this.handleChange(e, field)}
            />
  }

  buildInputs(status) {
    
  }

  render() {
    return (
      <main className='login-container'>
        <h1 className='login-title title'>Work
          <span className='login-title-span title-span'>Up</span>
        </h1>

        <section className="login-card">


        </section>
        <h3>Login</h3>
        {this.createInput('first_name')}
        {this.createInput('last_name')}
        {this.createInput('email')}
        {this.createInput('password')}

        <button onClick={this.handleSubmit}>Submit</button>
      </main>
    )
  }
}

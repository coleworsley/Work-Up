import React, { Component } from 'react';
import './Login.css';

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
  },
  error: '',
}

export default class Login extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.switchStatus = this.switchStatus.bind(this);
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
    const { fetchUserSignUp, fetchUserLogin } = this.props;
    const { status, signup, login } = this.state

    if (status === 'login') {
      fetchUserLogin(login)
    } else {
      fetchUserSignUp(signup);
    }

    this.setState( initialState );
  }

  handleChange(e, field) {
    const { status } = this.state;
    const newState = Object.assign({}, this.state[status], {[field]: e.target.value})
    this.setState({ [status]: newState })
  }

  createInput(field, status) {
    return <input
              className='login-input'
              key={field}
              type={this.assignType(field)}
              name={field}
              placeholder={field}
              value={this.state[status][field]}
              onChange={(e) => this.handleChange(e, field)}
            />
  }

  buildInputs(status) {
    return Object.keys(this.state[status]).map(key => this.createInput(key, status));
  }

  switchStatus() {
    const { status } = this.state
    const newStatus = status === 'login' ? 'signup' : 'login';
    this.setState({
      status: newStatus,
      [status]: initialState[status],
      error: '',
    });
  }

  buttonText(status) {
    return status === 'login' ? 'Create An Account' : 'Have an Account?'
  }

  componentWillReceiveProps(np) {
    const error = np.user.error ? np.user.error : '';
    // TODO: change workouts to dashboard when complete
    if(np.user.id) np.history.push('/workouts')
    this.setState({ error })
  }

  render() {
    const { status, error } = this.state;

    return (
      <main className='login-container'>

        <h1 className='login-title title'>Work
          <span className='login-title-span title-span'>Up</span>
        </h1>

        <section className='login-card'>
          <h3 className='login-status'>{ status }</h3>
          { this.buildInputs(status) }
          <button
            className='login-btn'
            onClick={ this.handleSubmit }>Submit</button>
          <p className='login-error-text'>{error}</p>
        </section>

        <div className='login-links'>
          <button
            className='login-toggle-btn'
            onClick={ this.switchStatus }>
            { this.buttonText(status) }
          </button>
        </div>

      </main>
    )
  }
}

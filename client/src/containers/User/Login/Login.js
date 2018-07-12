import React, { Component } from 'react'
import { UserConsumer } from '../../../Providers/UserProvider'
import FormBuilder from '../../../components/UI/FormBuilder';

const fields = [
	{ label: 'Username', name: 'username', type: 'text' },
	{ label: 'Password', name: 'password', type: 'password' },
]; 

  class Login extends Component {
    render() {
      return (
        <div>
          <h1>Log In</h1>

          <UserConsumer>
            {context => (
              <FormBuilder
                fields={fields}
                handleChange={context.handleChange}
                handleSubmit={context.handleLogin}
                currentState={context.state}
                errors={context.state.errors}
                error={context.state.error}
                buttonText="Log In"
              />
            )}
          </UserConsumer>
        </div>
      )
    }
  }

export default Login
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../actions/UserActions'

import FormBuilder from '../../../components/UI/User/FormBuilder';

const Fields = [
	{ label: 'Username', name: 'username', type: 'text', errorMsg: 'Username is required' },
	{ label: 'Password', name: 'password', type: 'password', errorMsg: 'Password is required' },
];

  class Login extends Component {
    onSubmit = values => {
      this.props.actions.login(values)
    }

    render() {
      return (
        <div>
          <FormBuilder fields={Fields} onSubmit={this.onSubmit} buttonText='Log In' formTitle='Log In' />

          <p style={{ color: 'red' }}>{this.props.error}</p>
        </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    return { error: state.User.error }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(Object.assign(userActions), dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Login)
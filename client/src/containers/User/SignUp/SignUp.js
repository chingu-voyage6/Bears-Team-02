import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../../actions/UserActions';
// import * as errorActions from '../../actions/ErrorActions'

import FormBuilder from '../../../components/UI/User/FormBuilder';
import Fields from '../../../misc/signUpFields'

class SignUp extends Component {
	onSubmit = values => {
		this.props.actions.signUp(values)
	}

	render() {
		return (
			<div>
				<FormBuilder fields={Fields} onSubmit={this.onSubmit} buttonText='Sign Up' formTitle='Sign Up' />

				<p style={{ color: 'red' }}>{this.props.error ? this.props.error.message : null}</p>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state.User.error)
	return { error: state.User.error }
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(Object.assign(userActions), dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

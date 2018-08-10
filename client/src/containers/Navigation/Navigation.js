import React, { Component } from 'react';
import './Navigation.css';
import { connect } from 'react-redux';
import NavigationComp from '../../components/UI/Navigation/Navigation';
import * as connectionActions from '../../actions/ConnectionActions';
import * as messageActions from '../../actions/MessagingActions';
import { bindActionCreators } from 'redux';
import Loader from '../../components/UI/Enhancements/Loader';

const linksIn = [
	{ name: 'Connect', url: '/connect', class: 'navbar-item' },
	{ name: 'Dashboard', url: '/dashboard', class: 'navbar-item' },
	{ name: 'Log Out', url: '/logout', class: 'navbar-item' },
];
const linksOut = [
	{ name: 'Sign Up', url: '/signup', class: 'navbar-item' },
	{ name: 'Log In', url: '/login', class: 'navbar-item' },
];

class Navigation extends Component {
	state = { toggleBurger: false };

	componentDidUpdate(prevProps) {
		if (prevProps.pendingRequests !== this.props.pendingRequests) {
			this.props.actions.getPendingConnections();
		}
		if (prevProps.messages === this.props.messages) {
			this.props.actions.getMessages();
		}
	}

	handleBurgerClick = () => {
		this.setState(prevState => ({ toggleBurger: !prevState.toggleBurger }));
	};

	render() {
		return (
			<div>
				<NavigationComp
					handleBurgerClick={this.handleBurgerClick}
					toggleBurger={this.state.toggleBurger}
					authenticated={this.props.authenticated}
					linksIn={linksIn}
					linksOut={linksOut}
					notifications={
						this.props.messages && this.props.messages.messages
							? this.props.notifications + this.props.messages.messages.sent.length + this.props.messages.messages.received.length
							: 0
					}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log('state.Message.messages.', state.Message.messages);
	return {
		authenticated: state.User.authenticated,
		notifications: state.Connection.pendingRequests,
		pendingRequests: state.Connection.pendingRequests,
		messages: state.Message.messages,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(Object.assign(connectionActions, messageActions), dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	null,
	{ pure: true }
)(Navigation);

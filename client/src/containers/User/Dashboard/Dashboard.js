import React, { Component, Fragment } from 'react';
import './Dashboard.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import diff from 'object-diff';
import { withAlert } from 'react-alert';
import * as userActions from '../../../actions/UserActions';
import * as connectionActions from '../../../actions/ConnectionActions';
import * as messagingActions from '../../../actions/MessagingActions';
import UpdateForm from '../../../components/UI/Form/UpdateForm/UpdateForm';
import updateFields from '../../../misc/userUpdateFields';
import DashboardComp from '../../../components/UI/User/Dashboard/Dashboard';
import Loader from '../../../components/UI/Enhancements/Loader';
import StartConversation from '../../Message/StartConversation';
import ModalHOC from '../../../hoc/ModalHOC/ModalHOC';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editProfile: false,
			displayingSection: 'Messages',
			modalIsOpen: false,
      receivingUser: null
		};
	}

	componentDidMount() {
		this.props.actions.dashboard();
		this.props.actions.getPendingConnections();
		this.props.actions.getConversations();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.flashMessage !== this.props.flashMessage) {
			this.props.alert.show(this.props.flashMessage);
			this.props.actions.getPendingConnections();
			if (this.props.user) {
				console.log('ERE');
				this.props.actions.getConversations();
			}
		}
	}

	handleSubmit = async values => {
		const { initialValues } = await this.props;
		const objDiff = await diff(initialValues, values);
		// console.log("objDiff", objDiff);
		this.props.actions.updateUser(objDiff);
	};

	toggleTechnical = e => {
		e.preventDefault();
		this.props.actions.toggleTechnical();
	};

	toggleSection = section => {
		this.setState({ displayingSection: section });
	};

	pendingConnectionResponse = (connectionRequest, action) => {
		this.props.actions.pendingConnectionResponse(connectionRequest, action);
	};

	markAsRead = (messageId) => {
		this.props.actions.markAsRead({messageId})
	}

	closeModal = () => {
		this.setState({ modalIsOpen: false })
	}

	render() {
		if (this.state.editProfile) {
			return (
				<UpdateForm
					fields={updateFields}
					initialValues={this.props.initialValues}
					onSubmit={this.handleSubmit}
					closeForm={() => this.setState({ editProfile: false })}
				/>
			);
		}

		if (this.props.user && this.props.connections && this.props.conversations) {
			return (
				<Fragment>
					<ModalHOC modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal}>
						<StartConversation receivingUser={this.state.receivingUser} />
					</ModalHOC>
					<DashboardComp
						user={this.props.user}
						initialValues={this.props.initialValues}
						onSubmitProfile={this.handleSubmit}
						toggleEditProfile={() => this.setState({ editProfile: true })}
						connections={this.props.connections}
						pendingConnections={this.props.pendingConnections}
						pendingRequests={this.props.pendingRequests}
						pendingConnectionResponse={this.pendingConnectionResponse}
						conversations={this.props.conversations}
						messageButton={(_id) => this.setState({ modalIsOpen: true, receivingUser: _id })}
						markAsRead={(messageId) => this.markAsRead(messageId)}
						toggleTechnical={this.toggleTechnical}
						toggleSection={this.toggleSection}
						displayingSection={this.state.displayingSection}
						acceptConnection={this.acceptConnection}
						blockConnection={this.props.actions.blockConnection}
					/>
				</Fragment>
			);
		}

		return <Loader />;
	}
}

const mapStateToProps = ({ User, Connection, Message, UI }) => {
	return {
		user: User.user,
		initialValues: User.user,
		connections: User.connections,
		pendingConnections: Connection.pendingConnections,
		pendingRequests: Connection.pendingRequests,
		conversations: Message.conversations,
		flashMessage: UI.flashMessage,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(Object.assign(userActions, connectionActions, messagingActions), dispatch),
	};
};

Dashboard = withAlert(Dashboard);

export default (Dashboard = connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard));

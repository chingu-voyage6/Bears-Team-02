import React, { Component } from "react";
import "./Connect.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getUsers,
  requestConnection,
  dashboard,
  getPendingConnections
} from "../../../actions/UserActions";
import ConnectComp from "../../../components/UI/User/ConnectComp/ConnectComp";
import Loader from "../../../components/UI/Enhancements/Loader";
import { withAlert } from "react-alert";

class Connect extends Component {
  componentDidMount() {
    // * Temp fix for error caused on reload to /connect with user state not populating
    // this.props.getUsers();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.flashMessage !== this.props.flashMessage) {
      this.props.alert.show(this.props.flashMessage);
    }
  }

  requestConnection = requestedUser => {
    this.props.requestConnection(requestedUser);
  };

  renderConnectionList = () => {
    const { users, user } = this.props;
    // * Temp fix for error caused on reload to /connect with user state not populating
    if (user === null) {
      this.props.dashboard();
      this.props.getPendingConnections();
      return <Loader />;
    }

    if (users === null) {
      this.props.getUsers();
      return <Loader />;
    }
    return (
      <ConnectComp
        pendingConnections={this.props.pendingConnections}
        user={this.props.user}
        users={users}
        requestConnection={this.requestConnection}
        getUsers={this.props.getUsers}
      />
    );
  };

  render() {
    return (
      <div className="container connect-container columns is-centered">
        {this.renderConnectionList()}
      </div>
    );
  }
}

const mapStateToProps = ({ User }) => {
  console.log("STATE", User);
  return {
    users: User.users,
    user: User.user,
    pendingConnections: User.pendingConnections,
    flashMessage: User.flashMessage
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { getUsers, requestConnection, dashboard, getPendingConnections },
    dispatch
  );
};

Connect = withAlert(Connect);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Connect);

import React, { Component } from "react";
import Links from "../../components/UI/Links";
import "./Navigation.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const linksIn = [
  { name: "Connections", url: "/connect", class: "navbar-item" },
  { name: "User", url: "/user", class: "navbar-item" },
  { name: "Log Out", url: "/logout", class: "navbar-item" }
];
const linksOut = [
  { name: "Sign Up", url: "/signup", class: "navbar-item" },
  { name: "Log In", url: "/login", class: "navbar-item" }
];

class Navigation extends Component {
  componentDidMount() {
    console.log("CWD", this.props);
  }

  render() {
    return (
      <nav className="navbar is-info is-spaced">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            FC
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            {this.props.authenticated ? (
              <Links links={linksIn} />
            ) : (
              <Links links={linksOut} />
            )}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return { authenticated: state.User.authenticated };
};

export default connect(
  mapStateToProps,
  null,
  null,
  { pure: true }
)(Navigation);

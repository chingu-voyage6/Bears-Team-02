import React, { Component } from "react";
import Links from "../../components/UI/Links";
import "./Navigation.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";

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
  state = { toggleBurger: false };

  componentDidMount() {
    console.log("CWD", this.props);
  }

  handleBurgerClick = () => {
    this.setState(prevState => ({ toggleBurger: !prevState.toggleBurger }));
  };

  render() {
    let navBurger = classNames("navbar-burger", {
      "is-active": this.state.toggleBurger
    });
    let navMenu = classNames("navbar-menu", {
      "is-active": this.state.toggleBurger
    });
    return (
      <nav className="navbar is-info is-spaced">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              FC
            </Link>
            <a
              role="button"
              class={navBurger}
              aria-label="menu"
              aria-expanded="false"
              data-target="navMenu"
              onClick={this.handleBurgerClick}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="navMenu" className={navMenu}>
            <div className="navbar-end">
              {this.props.authenticated ? (
                <Links links={linksIn} />
              ) : (
                <Links links={linksOut} />
              )}
            </div>
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

/* Saving for now - Handler for navBar Burger */
// document.addEventListener("DOMContentLoaded", () => {
//   // Get all "navbar-burger" elements
//   const $navbarBurgers = Array.prototype.slice.call(
//     document.querySelectorAll(".navbar-burger"),
//     0
//   );

//   // Check if there are any navbar burgers
//   if ($navbarBurgers.length > 0) {
//     // Add a click event on each of them
//     $navbarBurgers.forEach(el => {
//       el.addEventListener("click", () => {
//         // Get the target from the "data-target" attribute
//         const target = el.dataset.target;
//         const $target = document.getElementById(target);

//         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//         el.classList.toggle("is-active");
//         $target.classList.toggle("is-active");
//       });
//     });
//   }
// });

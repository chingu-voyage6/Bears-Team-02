/* landing page view */

import React from "react";
import "./Header.css";
import { UserConsumer } from '../../Providers/UserProvider'
import FormBuilder from '../UI/FormBuilder'

console.log("connected to header.js");
const fields = [
	{ label: 'Username', name: 'username', type: 'text' },
	{ label: 'Password', name: 'password', type: 'password' },
]; 

const Header = () => {
  return (
    <div className="container-fluid">
      <figure className="image" id="logo-image">
        <img src="https://bulma.io/images/placeholders/256x256.png" alt="placeholder"/>
      </figure>
      <h1 id="site-title">Founder Connect</h1>
      <div id="log-in">
        <h2>Already a member?</h2>
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
    </div>
  );
};

export default Header;

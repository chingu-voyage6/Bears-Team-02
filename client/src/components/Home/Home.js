import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

const technicalFounder = () => {
  console.log("You selected technical");
};

const nonTechnicalFounder = () => {
  console.log("You selected nontechnical");
};

const Home = () => {
  return (
    <div className="columns section">
      <div className="column has-text-centered">
        <h1 className="title is-1"> Create your profile </h1>
        <NavLink
          to="/signup"
          onClick={technicalFounder}
          className="button is-dark is-large"
        >
          I'm a technical founder
        </NavLink>
        <NavLink
          to="/signup"
          onClick={nonTechnicalFounder}
          className="button is-dark is-large"
        >
          I'm a non-technical founder
        </NavLink>
      </div>
      <aside className="column">
        <p className="subtitle is-4 has-text-justified">
          Founder Connect is a social networking site that connects technical
          and non-technical startup founders.
        </p>
        <p className="subtitle is-4 has-text-justified">
          Find your future partner by creating a Founder Connect profile today.
        </p>
      </aside>
    </div>
  );
};
export default Home;

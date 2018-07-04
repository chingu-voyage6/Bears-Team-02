import React, { Component } from "react";
import "./App.css";
import Connections from "./components/Connections/Connections";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Footer/Footer";
import { Route, Switch } from "react-router-dom";
import Navigation from "./containers/Navigation/Navigation";
import SignUp from "./containers/SignUp/SignUp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/connect" component={Connections} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;

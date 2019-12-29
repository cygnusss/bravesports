import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './lib/navbar';
import AccountManager from './account/';
import Results from './results/';
import Login from './login/';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../assets/style/modifiers.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route path="/account" component={AccountManager}/>
        <Route path="/results" component={Results}/>
        <Route path="/login" component={Login}/>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("content"));

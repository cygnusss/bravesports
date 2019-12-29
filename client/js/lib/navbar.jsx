import React, { Component } from 'react';
import Button from './button'
import '../../assets/style/navbar.css';

// Move this later to a constants file
const LOGOUT = "Logout";
const ACCOUNT_MANAGER = "Account Manager";
const RESULTS = "Results";

export default class Navbar extends Component {
  render() {
    return (
      <header className="navbar--header">
        <h1 className="navbar--logo">BraveSportsBot</h1>
        <nav>
          <ul className="nav__links">
            <li className="--navbar"><a href="/account">{ACCOUNT_MANAGER}</a></li>
            <li className="--navbar"><a href="/results">{RESULTS}</a></li>
          </ul>
        </nav>
        <Button className='cta' label={LOGOUT}/>
      </header>
    )
  } 
}

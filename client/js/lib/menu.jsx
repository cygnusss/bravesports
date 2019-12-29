import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../../assets/style/menu.css';

export default class Menu extends Component {
  render() {
    const { items } = this.props;
    return (
      <nav className="account-manager--nav">
        <ul className="account-manager--ul">
          {items ?
          items.map(({link, label}, idx)=> {
            return (
              <a key={`menu-item-${idx}`} href={link} className="account-manager--a">
                <li className="account-manager--li">
                  {label}
                </li>
              </a>
            )
          })
          : null}
        </ul>
      </nav>
    )
  } 
}

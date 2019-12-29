import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Button from '../lib/button';
import ViewAccounts from './viewAccounts';
import AddAccount from './addAccount';

const ACCOUNT_MANAGER = "Account Manager";
const VIEW_ALL = "View All";
const ADD_ACCOUNT = "Add Account";

export default class AccountManager extends Component {
  render() {
    const { match: { path }, history } = this.props;
    return (
      <div className="center-padding normal-top-margin">
        <div>
          <h1>{ACCOUNT_MANAGER}</h1>
          <div>
            <Button className="slight-right-margin" onClick={() => history.push(`${path}/add`)} label={ADD_ACCOUNT}/>
            <Button className="slight-right-margin" onClick={() => history.push(`${path}/view`)} label={VIEW_ALL}/>
          </div>
        </div>
        <div className="normal-top-margin">
          <Route path={`${path}/view`} component={ViewAccounts}/>
          <Route path={`${path}/add`} component={AddAccount}/>
        </div>
      </div>
    )
  } 
}

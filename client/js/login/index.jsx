import React, { Component } from 'react';
import Form from '../lib/form';

export default class Results extends Component {
  render() {
    return (
      <Form className="margin--auto variable-top-margin-normal">
        <input className="form-control" placeholder="Username"/>
        <input className="form-control" placeholder="Password"/>
        <input className="form-control" type="submit" value="Login" />
      </Form>
    )
  } 
}

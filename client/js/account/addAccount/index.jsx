import React, { Component } from 'react';
import Form from '../../lib/form';

export default class AddAccount extends Component {
  submit(e) {
    e.preventDefault();
    console.log(e);
  }

  render() {
    return (
      <Form className={"margin--auto"} submit={this.submit}>
        {/* <div className="form-select">
          <select name="format" id="format">
            <option>Choose Color</option>
            <option value="1">Blue</option>
            <option value="2">Yellow</option>
          </select>
        </div> */}
        <input className="form-control" placeholder="Username"/>
        <input className="form-control" placeholder="Password"/>
        <input className="form-control" placeholder="Percent"/>
        <input className="form-control" placeholder="Bet Amount"/>
        <input className="form-control" type="submit" value="Submit" />
      </Form>
    )
  } 
}

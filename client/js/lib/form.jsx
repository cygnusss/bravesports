import React, { Component } from 'react';
import '../../assets/style/form.css';

export default class Form extends Component {
  getClasses() {
    let classList = ["form"];
    const { className } = this.props;
    if (className) {
      return classList.concat(className.split(" ")).join(" ");
    }
    return classList[classList.length-1];
  }

  render() {
    return (
      <form className={this.getClasses()} autoComplete="off" noValidate onSubmit={this.props.submit}>
        {this.props.children}
      </form>
    )
  } 
}
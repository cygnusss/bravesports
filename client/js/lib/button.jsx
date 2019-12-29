import React, { Component } from 'react';
import '../../assets/style/button.css';

export default class Button extends Component {
  classNames() {
    const classList = ["btn"];
    const { className } = this.props;
    const additionalClasses = className ?className.split(" ") : "";
    return classList.
      concat(additionalClasses).
      join(" ");
  }

  render() {
    const { label } = this.props;
    return (<button onClick={this.props.onClick} className={this.classNames()}>{label}</button>)
  } 
}

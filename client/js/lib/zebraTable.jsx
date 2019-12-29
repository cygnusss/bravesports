import React, { Component } from 'react';
import '../../assets/style/zebra-table.css';
import Button from './button';

export default class ZebraTable extends Component {
  render() {
    if (!this.props.rows) return null;
    const { colour } = this.props;
    let headColour = "",
        bodyColour = "";
    if (colour) {
      if (colour === "red") {
        headColour = "red";
        bodyColour = "soft-red";
      }
      if (colour === "yellow") {
        headColour = "yellow";
        bodyColour = "soft-yellow";
      }
      if (colour === "grey") {
        headColour = "grey";
        bodyColour = "soft-grey";
      }
    }
    return (
      <table className="zebra-table">
        <thead className={headColour}>
          <tr>
            {
              this.props.headers
              ? this.props.headers.map((title, idx) => <th key={`${idx}-${title}`}>{title}</th>)
              : ["Network",
              "Site",
              "Proxy",
              "Brave %",
              "Username",
              "Password",
              "Toggle",
              "Edit Account"].map((title, idx) => <th key={`${idx}-${title}`}>{title}</th>)
            }
          </tr>
        </thead>
      <tbody className={bodyColour}>
        {this.props.rows.map(values => <tr>{values.map(val => <th>{val}</th>)}</tr>)}
      </tbody>
    </table>
    )
  } 
}
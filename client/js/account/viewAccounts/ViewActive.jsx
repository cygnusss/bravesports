import React, { Component } from 'react';
import ZebraTable from '../../lib/zebraTable';

export default class Active extends Component {
  render() {
    return (
      <div className="temp">
        <ZebraTable 
          headers={["Network",
            "Site",
            "Proxy",
            "Brave %",
            "Username",
            "Password",
            "Toggle",
            "Edit Account"]} 
          rows={this.props.rows}
      />
      </div>
    )
  } 
}

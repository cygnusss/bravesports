import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Menu from '../../lib/menu';
import Active from './ViewActive';
import Inactive from './ViewInactive';
import InDevelopment from './ViewInDevelopment';
import Broken from './viewBroken';
import Button from '../../lib/button';
import axios from 'axios';

const ACTIVE = 'Active';
const INACTIVE = 'Inactive';
const IN_DEVELOPMENT = 'In Development';
const BROKEN = 'Broken';

const RowButton = ({ label }) => (
  <th className="flex">
    <Button className="margin--auto" key="toggle-button" label={label}/>
  </th>
);

export default class ViewAccounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5001/accounts")
      .then(({data}) => {
        this.setState({accounts: data});
      })
  }

  render() {
    if (!this.state.accounts) return null;
    const { match: { path } } = this.props;
    const items = [
      {
        link: `${path}/active`,
        label: ACTIVE,
      },
      {
        link: `${path}/inactive`,
        label: INACTIVE,
      },
      {
        link: `${path}/in_development`,
        label: IN_DEVELOPMENT,
      },
      {
        link: `${path}/broken`,
        label: BROKEN,
      },
    ];
    return (
      <>
        <Menu items={items}/>
        <Route path={`${path}/active`} render={() => {
            return (<Active rows={
              this.state.accounts.map(
                row => row.concat(
                  [<RowButton label="Toggle"/>, <RowButton label="Edit"/>]
                )
              )
            }/>)
          }}/>
        <Route path={`${path}/inactive`} component={Inactive}/>
        <Route path={`${path}/in_development`} component={InDevelopment}/>
        <Route path={`${path}/broken`} component={Broken}/>
      </>
    )
  } 
}

import React, { Component } from 'react';
import ZebraTable from '../lib/zebraTable';
import Button from '../lib/button';
import '../../assets/style/results.css';
import '../../assets/style/accordion.css';
import axios from 'axios';

const ACCORDION_OPEN = 'accordion-open';
const ACCORDION_CLOSED = 'accordion-closed';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accordion: {},
      results: [],
    }
  }

  componentDidMount() {
    this.fetchResults()
      .then(({ data }) => { this.setState({ results: data }) });
  }

  fetchResults() {
    return axios.get('http://localhost:5001/results');
  }

  setOpenAndCloseAccordion(e, idx){
    if (!this.state.accordion[idx]) {
      this.setState({
        accordion: { [idx]: true },
      })
      return
    }
    let newAccordion = {};
    for (let key in this.state.accordion) { newAccordion[key] = false }
    this.setState({
      accordion: { ...newAccordion, [idx]: !this.state.accordion[idx] },
    })
  }

  getAccordionClass(idx) {
    return this.state.accordion[idx] ? ACCORDION_OPEN : ACCORDION_CLOSED;
  }

  render() {
    if (!this.state.results.length) return null;
    return (
      <div className="middle">

        <div className="results-page--header normal-top-margin">
          <div>
            <h1>Operation Results</h1>
            <small className="regular">70 operations in the last 3 days</small>
          </div>
          <div className="cta">
            <input
              type="date"
              id="results-start_date"
              name="trip-start"
              placeholder="Start Date"
            />
            <input
              className="slight-right-margin"
              type="date"
              id="results-end_date"
              name="trip-start"
              placeholder="Start Date"
            />
            <Button label="Apply Filters"/>
          </div>
        </div>
        {/* WHERE IS ERROR COLUMN ???? */}
        {
          this.state.results.map((res, idx) => {
            const id = res[0]
            const username = res[2]
            const site = res[3]
            const amount = res[res.length-1].split(' ')[0];
            const odds = res[res.length-1].split(' ')[1];
            
            return (<div className="menu normal-top-margin">
              <li 
                onClick={(e) => this.setOpenAndCloseAccordion(e, idx)}
                className={this.getAccordionClass(idx)}
                id={`profile-${idx}`}
              >
                <a href={`${this.props.match.path}#profile-${idx}`} className="tempbtn">Betting Columns</a>
                <div className="smenu">
                  <ZebraTable headers={["ID", "Site", "Username", "Bet Amout", "Found Odds", "Error"]} rows={[[id, site, username, amount, odds, "Operation was successful!" ]]} />
                </div>
              </li>
            </div>)
          })
        }

      </div>
    )
  } 
}

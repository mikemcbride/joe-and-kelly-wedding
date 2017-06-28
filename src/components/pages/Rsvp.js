import React from 'react'
import Page from '../Page'
import base from '../../base'
import { sortByKey, objectHasValue } from '../../helpers'

class Rsvp extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.renderFilteredRsvps = this.renderFilteredRsvps.bind(this)
    
    this.state = {
      rsvps: {},
      searchTerm: '',
      filteredRsvps: []
    }
  }
  
  componentWillMount () {
    this.ref = base.syncState('rsvps', {
      context: this,
      state: 'rsvps'
    })
  }

  componentWillUnmount () {
    base.removeBinding(this.ref)
  }
  
  handleChange(e) {
    this.setState({searchTerm: e.target.value})
  }
  
  handleClick(e) {
    const ids = Object.keys(this.state.rsvps)
    const newList = ids.reduce((arr, id) => {
      const newItem = { ...this.state.rsvps[id], id }
      const retVal = objectHasValue(newItem, this.state.searchTerm) ? [...arr, newItem] : [...arr]
      return sortByKey(retVal, 'lastName')
    }, [])
    
    this.setState({filteredRsvps: newList})
  }
  
  renderFilteredRsvps(item) {
    let respondedIcon

    if (item.responded === true) {
      respondedIcon = <span className="w2 dib gold"><i className="icon icon-check"></i></span>
    } else {
      respondedIcon = <span className="w2 dib gold"><i className="icon icon-close"></i></span>
    }

    return (
      <div className="ph2 pv3 ph3-ns gold bb b--white-10" key={item.id}>
        {respondedIcon}{item.lastName}, {item.firstName}
      </div>
    )
  }
  
  render() {
    return (
      <Page>
        <p className="mb3">To find your RSVP, put your name in the box and click "Search". When the results show up, please pick yours from the list and fill in the fields. When finished, click Submit. If you have responded, your RSVP will have a check mark next to it.</p>
        <form className="mw7 center pa4-ns mb3">
          <fieldset className="cf bn ma0 pa0">
            <legend className="pa0 f5 f4-ns mb3 gold">Find your RSVP</legend>
            <div className="cf">
              <input className="f6 f5-l input-reset fl white bg-transparent ba b--gold outline-0 pa3 w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Your Email Address" type="text" name="email-address" value={this.state.searchTerm} onChange={this.handleChange} />
              <button className="f6 f5-l fw5 button-reset fl pv3 tc ba b--gold bg-gold outline-0 white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="button" onClick={this.handleClick}>Search</button>
            </div>
          </fieldset>
        </form>
        
        <div className="ba b--white-10 br1">
          <h3 className="f5 f4-ns b ph2 ph3-ns pv3 bb b--white-10 ttu gold mv0">Results</h3>
          {this.state.filteredRsvps.map(this.renderFilteredRsvps)}
        </div>
      </Page>
    )
  }
}

export default Rsvp
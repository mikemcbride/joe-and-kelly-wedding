import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import base from '../base'

class Rsvp extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderFilteredRsvps = this.renderFilteredRsvps.bind(this)
    
    this.state = {
      rsvps: {},
      searchTerm1: '',
      searchTerm2: '',
      searchTerm3: '',
      filteredRsvps: {},
      groupId: '',
      notFound: false
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
  
  handleChange(e, property) {
    const obj = {[property]: e.target.value}
    console.log('obj:', obj)
    this.setState(obj)
  }
  
  handleClick(e) {
    this.findRsvp()
  }
  
  handleSubmit(e) {
    e.preventDefault()
    this.findRsvp()
  }
  
  findRsvp() {
    const searchTerm = `${this.state.searchTerm1}${this.state.searchTerm2}${this.state.searchTerm3}`
    const item = this.state.rsvps[searchTerm]
    
    if (item === undefined) {
      this.setState({ filteredRsvps: {}, notFound: true })
    } else {
      this.setState({ filteredRsvps: item, notFound: false, groupId: searchTerm })
    }
  }
  
  renderFilteredRsvps() {
    const group = this.state.filteredRsvps
    const items = Object.keys(group).reduce((acc, id) => {
      const item = {id, ...group[id]}
      return [...acc, item]
    }, [])

    return items.map(item => {
      const attendingClass = item.attending ? 'icon-check' : 'icon-close'
      return (
        <li className="last-child-no-border ph3 pv3 gold bb b--white-20" key={item.id}>
          <span className="w2 dib gold">{ item.responded === true && <i className={`icon ${attendingClass}`}></i>}</span> {item.lastName}, {item.firstName}
        </li>
      )
    })
  }
  
  render() {
    return (
      <Page activeNavItem="rsvp">
        <div className="dn-ns pt3 mb4 bb b--white-30"></div>
        <form className="mw7 center pa4-ns mb3" onSubmit={this.handleSubmit}>
          <fieldset className="cf bn ma0 pa0">
            <legend className="pa0 f5 f4-ns mb3 gold">
              Find your RSVP
              <p className="body-color f6 f5-ns mb0 mt3">
                Enter the three digit code from your invite into the boxes and click "Search".
              </p>
              <p className="body-color f6 f5-ns mb3">
                Then click "Edit RSVP" and fill in the form. When finished, click Submit.
              </p>
            </legend>
            <div className="mw5 center tc">
              <input className="f3 input-reset mh1 white bg-transparent ba b--gold outline-0 ph3 pv4 w3 tc br2"
                      type="text"
                      placeholder="0"
                      maxLength="1"
                      name="searchTerm1"
                      value={this.state.searchTerm1}
                      onChange={(e) => this.handleChange(e, 'searchTerm1')} />
              <input className="f3 input-reset mh1 white bg-transparent ba b--gold outline-0 ph3 pv4 w3 tc br2"
                      type="text"
                      placeholder="0"
                      maxLength="1"
                      name="searchTerm2"
                      value={this.state.searchTerm2}
                      onChange={(e) => this.handleChange(e, 'searchTerm2')} />
              <input className="f3 input-reset mh1 white bg-transparent ba b--gold outline-0 ph3 pv4 w3 tc br2"
                      type="text"
                      placeholder="0"
                      maxLength="1"
                      name="searchTerm3"
                      value={this.state.searchTerm3}
                      onChange={(e) => this.handleChange(e, 'searchTerm3')} />
              <button className="f5 fw5 button-reset pv3 mt3 tc ba b--gold bg-gold outline-0 white pointer w-90 br2"
                      type="button"
                      onClick={this.handleClick}>SEARCH</button>
            </div>
          </fieldset>
        </form>
        
        {Object.keys(this.state.filteredRsvps).length > 0 &&
          <article className="pa4-ns mw7 center">
            <h3 className="f5 f4-ns fw4 gold center">Results</h3>
            <ul className="list pl0 ml0 center ba b--white-20 br2">
              <li className="last-child-no-border gold bb b--white-20">
                <div className="flex justify-between">
                  <span className="pa3">Group {this.state.groupId}</span>
                  <Link href={`rsvp-detail?id=${this.state.groupId}`}>
                    <span className="dib bg-gold white pa3 br2 br--top br--right pointer">Edit RSVP →</span>
                  </Link>
                </div>
              </li>
              {
                Object.keys(this.state.filteredRsvps)
                  .filter(id => this.state.filteredRsvps[id].responded === true)
                  .length > 0 &&
                <li className="last-child-no-border white-80 bb b--white-20 pa3">
                  <strong className="gold">Heads up!</strong> You have already submitted your RSVP for this group. You may still resubmit if you would like to change your reply.
                </li>
              }
              {this.renderFilteredRsvps()}
            </ul>
          </article>
        }
        
        {this.state.notFound === true &&
          <h3 className="mt5 f5 f4-ns fw4 gold ttu tc">No results found for that ID. Please try again.</h3>
        }
      </Page>
    )
  }
}

export default Rsvp
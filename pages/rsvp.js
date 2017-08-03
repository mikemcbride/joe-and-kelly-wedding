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
      searchTerm: '',
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
  
  handleChange(e) {
    this.setState({searchTerm: e.target.value})
  }
  
  handleClick(e) {
    this.findRsvp()
  }
  
  handleSubmit(e) {
    e.preventDefault()
    this.findRsvp()
  }
  
  findRsvp() {
    const item = this.state.rsvps[this.state.searchTerm]
    
    if (item === undefined) {
      this.setState({ filteredRsvps: {}, notFound: true })
    } else {
      this.setState({ filteredRsvps: item, notFound: false, groupId: this.state.searchTerm })
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
        <p className="mb3 lh-copy ph3">
          To find your RSVP, type the code from your invite into the box and click "Search".
          Click "Edit Group RSVP" and fill in the form. When finished, click Submit.
          If you have already responded, your RSVP will have a check mark next to it if you marked <span className="gold">attending</span>, and an "x" if you marked <span className="gold">not attending</span>.
        </p>
        <div className="dn-ns pt3 mb4 bb b--white-30"></div>
        <form className="mw7 center pa4-ns mb3" onSubmit={this.handleSubmit}>
          <fieldset className="cf bn ma0 pa0">
            <legend className="pa0 f5 f4-ns mb3 gold">Find your RSVP</legend>
            <div className="cf">
              <input className="f6 f5-l input-reset fl white bg-transparent ba b--gold outline-0 pa3 w-100 w-75-m w-80-l br2-ns br--left-ns"
                      placeholder="Your RSVP code..."
                      type="text"
                      name="searchTerm"
                      value={this.state.searchTerm}
                      onChange={this.handleChange} />
              <button className="f6 f5-l fw5 button-reset fl pv3 tc ba b--gold bg-gold outline-0 white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="button" onClick={this.handleClick}>Search</button>
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
                    <span className="dib bg-gold white pa3 br2 br--top br--right pointer">Edit Group RSVP →</span>
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
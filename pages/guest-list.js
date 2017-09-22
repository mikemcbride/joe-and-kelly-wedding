
import React from 'react'
import Page from '../components/Page'
import base from '../base'

class GuestList extends React.Component {
  constructor() {
    super()
    this.renderRsvps = this.renderRsvps.bind(this)
    this.setAttendingFilter = this.setAttendingFilter.bind(this)
    this.setRespondedFilter = this.setRespondedFilter.bind(this)
    this.filterRsvps = this.filterRsvps.bind(this)
    
    this.state = {
      rsvps: [],
      filteredRsvps: [],
      attendingFilter: 'all',
      respondedFilter: 'all'
    }
  }
  
  componentDidMount() {
    base.fetch('rsvps', {
      context: this
    }).then(data => {
      if (Object.keys(data).length > 0) {
        const mappedRsvps = this.mapData(data)
        this.setState({ rsvps: mappedRsvps, filteredRsvps: mappedRsvps })
      }
    }).catch(err => {
      console.error(err)
    })
  }
  
  mapData(data) {
    return Object.keys(data).reduce((acc, val) => {
      const group = data[val]
      const groupRsvps = Object.keys(group).map(id => {
        return Object.assign(group[id], { id })
      })
      
      return [...acc, ...groupRsvps]
    }, [])
  }
  
  setAttendingFilter(val) {
    this.setState({ attendingFilter: val })
  }
  
  setRespondedFilter(val) {
    this.setState({ respondedFilter: val })
  }
  
  filterRsvps(rsvp) {
    const attending = this.state.attendingFilter
    const responded = this.state.respondedFilter
    
    return (
      (attending === 'all' || rsvp.attending === attending) &&
      (responded === 'all' || rsvp.responded === responded)
    )
  }
  
  renderRsvps() {
    return this.state.rsvps.filter(this.filterRsvps).map(item => (
      <tr key={item.id}>
        <td className="pa2 ba b--mid-gray">{item.firstName}</td>
        <td className="pa2 ba b--mid-gray">{item.lastName}</td>
        <td className="pa2 ba b--mid-gray">{item.responded.toString()}</td>
        <td className="pa2 ba b--mid-gray">{item.attending.toString()}</td>
        <td className="pa2 ba b--mid-gray">{item.getsGuest.toString()}</td>
        <td className="pa2 ba b--mid-gray">{item.guestAttending.toString()}</td>
        <td className="pa2 ba b--mid-gray">{item.guestName}</td>
      </tr>
      )
    )
  }
  
  render() {
    return (
      <Page activeNavItem="rsvp">
          {Object.keys(this.state.rsvps).length > 0 &&
            <section>
              <div className="flex justify-end">
                <div className="ba b--white-20 br-0 pa2 mb3">
                  <div className="gold fw6">Attending: </div>
                  <div className="flex">
                    <span className="pv2 mb1 ph3 pointer" onClick={(e) => this.setAttendingFilter('all')}>
                      <i className={'gold mr2 icon icon-' + (this.state.attendingFilter === 'all' ? 'dot-circle-o' : 'circle-o')} /> All
                    </span>
                    <span className="pv2 mb1 ph3 pointer" onClick={(e) => this.setAttendingFilter(true)}>
                      <i className={'gold mr2 icon icon-' + (this.state.attendingFilter === true ? 'dot-circle-o' : 'circle-o')} /> Yes
                    </span>
                    <span className="pv2 mb1 ph3 pointer" onClick={(e) => this.setAttendingFilter(false)}>
                      <i className={'gold mr2 icon icon-' + (this.state.attendingFilter === false ? 'dot-circle-o' : 'circle-o')} /> No
                    </span>
                  </div>
                </div>
                
                <div className="ba b--white-20 pa2 mb3">
                  <div className="gold fw6">Responded: </div>
                  <div className="flex">
                    <span className="pv2 mb1 ph3 pointer" onClick={(e) => this.setRespondedFilter('all')}>
                      <i className={'gold mr2 icon icon-' + (this.state.respondedFilter === 'all' ? 'dot-circle-o' : 'circle-o')} /> All
                    </span>
                    <span className="pv2 mb1 ph3 pointer" onClick={(e) => this.setRespondedFilter(true)}>
                      <i className={'gold mr2 icon icon-' + (this.state.respondedFilter === true ? 'dot-circle-o' : 'circle-o')} /> Yes
                    </span>
                    <span className="pv2 mb1 ph3 pointer" onClick={(e) => this.setRespondedFilter(false)}>
                      <i className={'gold mr2 icon icon-' + (this.state.respondedFilter === false ? 'dot-circle-o' : 'circle-o')} /> No
                    </span>
                  </div>
                </div>
              </div>
              <table className="collapse w-100 pa2 ba b--mid-gray">
                <thead className="gold">
                  <tr>
                    <th className="pa2 ba b--mid-gray">First Name</th>
                    <th className="pa2 ba b--mid-gray">Last Name</th>
                    <th className="pa2 ba b--mid-gray">Responded</th>
                    <th className="pa2 ba b--mid-gray">Attending</th>
                    <th className="pa2 ba b--mid-gray">Gets Guest</th>
                    <th className="pa2 ba b--mid-gray">Guest Attending</th>
                    <th className="pa2 ba b--mid-gray">Guest Name</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderRsvps()}
                </tbody>
              </table>
            </section>
          }
      </Page>
    )
  }
}

export default GuestList
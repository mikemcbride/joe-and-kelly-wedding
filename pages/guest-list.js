import React from 'react'
import Page from '../components/Page'
import base from '../base'

class GuestList extends React.Component {
  constructor() {
    super()
    this.renderRsvps = this.renderRsvps.bind(this)
    
    this.state = {
      rsvps: {},
      filters: {
        attending: null,
        responded: null
      }
    }
  }
  
  componentDidMount() {
    base.fetch('rsvps', {
      context: this
    }).then(data => {
      console.log('data?', data)
      if (Object.keys(data).length === 0) {
        this.setState({
          rsvps: {},
        })
      } else {
        this.setState({ rsvps: data })
      }
    }).catch(err => {
      this.setState({
        rsvps: {}
      })
      console.error(err)
    })
  }
  
  renderRsvps() {
    const groups = Object.keys(this.state.rsvps)
    const items = groups.reduce((acc, val) => {
      const group = this.state.rsvps[val]
      const groupRsvps = Object.keys(group).map(id => {
        return Object.assign(group[id], { id })
      })
      
      return [...acc, ...groupRsvps]
    }, [])
    return items.map(item => (
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
            <table className="collapse w-100 pa2 ba b--mid-gray">
              <thead>
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
          }
      </Page>
    )
  }
}

export default GuestList
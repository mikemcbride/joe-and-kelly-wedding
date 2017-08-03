import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import base from '../base'


class RsvpDetail extends React.Component {
  constructor(props) {
    super()
    this.setAttending = this.setAttending.bind(this)
    this.setGuestAttending = this.setGuestAttending.bind(this)
    this.handleGuestNameChange = this.handleGuestNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
    this.state = {
      group: {},
      errorMessage: '',
      submitted: false
    }
  }
  
  componentDidMount() {
    base.fetch(`rsvps/${this.props.url.query.id}`, {
      context: this
    }).then(data => {
      if (Object.keys(data).length === 0) {
        this.setState({
          rsvp: {},
          submitted: 0,
          errorMessage: 'Unable to load this RSVP record. Please try again later.'
        })
        console.error('More than likely, this RSVP id does not exist.')
      } else {
        this.setState({ group: data })
      }
    }).catch(err => {
      this.setState({
        group: {},
        errorMessage: 'Unable to load this RSVP record. Please try again later.'
      })
      console.error(err)
    })
  }
  
  setAttending(id, val) {
    if (val !== this.state.group[id].attending) {
      const group = {...this.state.group}
      group[id].attending = val
      
      this.setState({ group })
    }
  }
  
  setGuestAttending(id, val) {
    if (val !== this.state.group[id].guestAttending) {
      const group = {...this.state.group}
      group[id].guestAttending = val
      
      if (val === false) {
        group[id].guestName = ""
      }
      
      this.setState({ group })
    }
  }
  
  handleGuestNameChange(e, id) {
    const group = {...this.state.group}
    group[id].guestName = e.target.value
    
    this.setState({ group })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    const group = Object.keys(this.state.group).reduce((acc, id) => {
      acc[id] = {...this.state.group[id], responded: true}
      return acc
    }, {})
    
    this.setState({ group })
    
    base.post(`rsvps/${this.props.url.query.id}`, {
      data: group
    }).then(() => {
      this.setState({ submitted: true })
    }).catch(err => {
      this.setState({ errorMessage: 'Sorry! We are unable to save your RSVP at this time.'})
      console.error(err)
    })
  }
  
  renderErrorMessage() {
    return <div className="mw6 tc center gold ttu">{this.state.errorMessage}</div>
  }
  
  renderSuccessMessage() {
    return (
      <div className="mw6 tc center">
        <div className="mb4 f5 f4-ns">Thanks! We've received your RSVP.</div>
        <Link href="/rsvp">
          <a className="outline-0 f6 f5-ns link no-underline-hover pointer br2 bn ph3 pv2 pv3-ns dib white bg-gold w-100 w5-ns">Back to RSVP</a>
        </Link>
      </div>
    )
  }
  
  renderGuestCard() {
    return Object.keys(this.state.group).map(id => {
      const rsvp = this.state.group[id]
      return (
        <div className="ba b--white-10 br1 mb4" key={id}>
          <h3 className="f5 f4-ns b ph2 ph3-ns pv3 bb b--white-10 ttu gold mv0">{ rsvp.firstName } { rsvp.lastName }</h3>          
          
          <div className="ph2 pv3 ph3-ns">
            <div className="flex flex-column items-start mb3">
              <h4 className="f5 b gold">Will you be attending?</h4>
              <span className="pv2 mb1 ph3 pointer" onClick={(e) => this.setAttending(id, true)}>
                <i className={'gold mr2 icon icon-' + (rsvp.attending === true ? 'dot-circle-o' : 'circle-o')} /> Yes
              </span>
              <span className="pv2 mb1 ph3 pointer" onClick={(e) => this.setAttending(id, false)}>
                <i className={'gold mr2 icon icon-' + (rsvp.attending === false ? 'dot-circle-o' : 'circle-o')} /> No
              </span>
            </div>
            
            {
              rsvp.getsGuest && rsvp.attending &&
              <div className="flex flex-column items-start mb3">
                <h4 className="f5 b gold">Are you bringing a guest?</h4>
                <span className="pv2 mb1 ph3 pointer" onClick={(e) => this.setGuestAttending(id, true)}>
                  <i className={'gold mr2 icon icon-' + (rsvp.guestAttending === true ? 'dot-circle-o' : 'circle-o')} /> Yes
                </span>
                <span className="pv2 mb1 ph3 pointer" onClick={(e) => this.setGuestAttending(id, false)}>
                  <i className={'gold mr2 icon icon-' + (rsvp.guestAttending === false ? 'dot-circle-o' : 'circle-o')} /> No
                </span>
              </div>
            }
            
            {
              rsvp.guestAttending && rsvp.attending && rsvp.getsGuest &&
              <div className="flex flex-column items-start mb3">
                <h4 className="f5 b gold mb3">What is your guest's name?</h4>
                <input className="input-reset white bg-transparent ba b--white-30 b--gold-focus outline-0 pa3 w-100 w-50-ns br2"
                       placeholder="Jane Doe"
                       type="text"
                       name="guestName"
                       value={rsvp.guestName}
                       onChange={(e) => this.handleGuestNameChange(e, id)} />
              </div>
            }
            
          </div>
        </div>
      )
    })
  }
  
  renderRsvpForm() {
    return (
      <div>
        <h3 className="gold mb4 fw4 f5 f4-ns">Below are cards for each person invited as part of this RSVP. If you are allowed to bring a guest, there will be an option on your card for that.</h3>
        <form name="rsvpForm" onSubmit={this.handleSubmit}>
          {this.renderGuestCard()}
          
          <input className="input-reset outline-0 f6 f5-ns pointer br2 bn ph3 pv2 pv3-ns mb2 dib white bg-gold w-100 w4-ns"
            type="submit"
            value="Submit" />
        </form>
      </div>
    )
  }
  
  render() {
    return (
      <Page activeNavItem="rsvp">
        {
          this.state.errorMessage !== '' &&
          this.renderErrorMessage()
        }
        
        {
          this.state.submitted === true &&
          this.renderSuccessMessage()
        }
        
        {
          this.state.submitted === false &&
          this.renderRsvpForm()
        }
      </Page>
    )
  }
}

export default RsvpDetail
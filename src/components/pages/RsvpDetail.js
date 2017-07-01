import React from 'react'
import { Link } from 'react-router-dom'
import Page from '../Page'
import base from '../../base'


class RsvpDetail extends React.Component {
  constructor(props) {
    super()
    this.setAttending = this.setAttending.bind(this)
    this.setGuestAttending = this.setGuestAttending.bind(this)
    this.handleGuestNameChange = this.handleGuestNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
    this.state = {
      rsvp: {},
      errorMessage: '',
      submitted: false
    }
  }
  
  componentDidMount() {
    base.fetch(`rsvps/${this.props.match.params.rsvpId}`, {
      context: this
    }).then(data => {
      if (!data.firstName) {
        this.setState({
          rsvp: {},
          submitted: 0,
          errorMessage: 'Unable to load this RSVP record. Please try again later.'
        })
        console.error('More than likely, this RSVP id does not exist.')
      } else {
        this.setState({ rsvp: data })
      }
    }).catch(err => {
      this.setState({
        rsvp: {},
        errorMessage: 'Unable to load this RSVP record. Please try again later.'
      })
      console.error(err)
    })
  }
  
  setAttending(val) {
    if (val !== this.state.rsvp.attending) {
      const rsvp = Object.assign(this.state.rsvp, { attending: val })
      this.setState({ rsvp })
    }
  }
  
  setGuestAttending(val) {
    if (val !== this.state.rsvp.guestAttending) {
      const rsvp = Object.assign(this.state.rsvp, { guestAttending: val })
      this.setState({ rsvp })
    }
  }
  
  handleGuestNameChange(e) {
    const rsvp = Object.assign(this.state.rsvp, { guestName: e.target.value})
    this.setState({ rsvp })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    const rsvp = Object.assign(this.state.rsvp, { responded: true })
    this.setState({ rsvp })
    
    base.post(`rsvps/${this.props.match.params.rsvpId}`, {
      data: rsvp
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
        <Link to="/rsvp" className="outline-0 f6 f5-ns link no-underline-hover pointer br2 bn ph3 pv2 pv3-ns dib white bg-gold w-100 w5-ns">Back to RSVP</Link>
      </div>
    )
  }
  
  renderRsvpForm() {
    const rsvp = this.state.rsvp
    return (
      <form name="rsvpForm" onSubmit={this.handleSubmit}>
        <div className="ba b--white-10 br1 mt4">
          <h3 className="f5 f4-ns b ph2 ph3-ns pv3 bb b--white-10 ttu gold mv0">{ rsvp.firstName } { rsvp.lastName }</h3>
          {
            rsvp.responded &&
            <div className="bb b--white-10 ph2 ph3-ns pv3 white-80">
              <strong className="gold">Note:</strong> You have already submitted your RSVP. However, you may still resubmit if you would like to change your reply.
            </div>
          }
          
          <div className="ph2 pv3 ph3-ns">
            
            <div className="flex flex-column items-start mb3">
              <h4 className="f5 b gold">Will you be attending?</h4>
              <span className="pv2 mb1 ph3 pointer" onClick={(e) => this.setAttending(true)}>
                <i className={'gold mr2 icon icon-' + (rsvp.attending === true ? 'dot-circle-o' : 'circle-o')} /> Yes
              </span>
              <span className="pv2 mb1 ph3 pointer" onClick={(e) => this.setAttending(false)}>
                <i className={'gold mr2 icon icon-' + (rsvp.attending === false ? 'dot-circle-o' : 'circle-o')} /> No
              </span>
            </div>
            
            {
              !rsvp.getsGuest &&
              <div className="flex flex-column items-start mb3">
                <h4 className="f5 b gold">Are you bringing a guest?</h4>
                <span className="pv2 mb1 ph3 pointer" onClick={(e) => this.setGuestAttending(true)}>
                  <i className={'gold mr2 icon icon-' + (rsvp.guestAttending === true ? 'dot-circle-o' : 'circle-o')} /> Yes
                </span>
                <span className="pv2 mb1 ph3 pointer" onClick={(e) => this.setGuestAttending(false)}>
                  <i className={'gold mr2 icon icon-' + (rsvp.guestAttending === false ? 'dot-circle-o' : 'circle-o')} /> No
                </span>
              </div>
            }
            
            {
              rsvp.guestAttending &&
              <div className="flex flex-column items-start mb3">
                <h4 className="f5 b gold mb3">What is your guest's name?</h4>
                <input className="input-reset white bg-transparent ba b--white-30 b--gold-focus outline-0 pa3 w-100 w-50-ns br2"
                       placeholder="Jane Doe"
                       type="text"
                       name="guestName"
                       value={this.state.rsvp.guestName}
                       onChange={this.handleGuestNameChange} />
              </div>
            }
            
            <input className="input-reset outline-0 f6 f5-ns pointer br2 bn ph3 pv2 pv3-ns mb2 dib white bg-gold w-100 w4-ns"
                   type="submit"
                   value="Submit" />
          </div>
        </div>
      </form>
    )
  }
  
  render() {
    return (
      <Page>
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
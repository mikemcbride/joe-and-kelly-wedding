import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Story, Party, Festivities, Accommodations, Attractions, Registry } from './pages'
import Rsvp from './pages/Rsvp'
import RsvpDetail from './pages/RsvpDetail'

class App extends Component {
  render() {
    const supportsHistory = 'pushState' in window.history
    
    return (
      <BrowserRouter forceRefresh={!supportsHistory}>
        <Switch>
          <Route exact path='/our-story' component={Story} />
          <Route exact path='/wedding-party' component={Party} />
          <Route exact path='/festivities' component={Festivities} />
          <Route exact path='/accommodations' component={Accommodations} />
          <Route exact path='/attractions' component={Attractions} />
          <Route exact path='/registry' component={Registry} />
          <Route exact path='/rsvp' component={Rsvp} />
          <Route exact path='/rsvp/:rsvpId' component={RsvpDetail} />
          <Route component={Home} />
        </Switch>
  		</BrowserRouter>
    )
  }
}

export default App

import React from 'react'
import Page from '../components/Page'
import story from '../data/story'

export default () => (
  <Page activeNavItem="story">
    <div className="lh-copy">
      <p className="mb4">Joe and Kelly met at the University of Missouri in the fall of 2012.</p>
      <h3 className="f4 fl dib pa3 ba mr2 b ttu gold mb0 mt1">Joe</h3>
      <p className="mb4">{ story.joe }</p>
      
      <h3 className="f4 fl dib pa3 ba mr2 b ttu gold mb0 mt1">Kelly</h3>
      <p>{ story.kelly }</p>
    </div>
  </Page>
)
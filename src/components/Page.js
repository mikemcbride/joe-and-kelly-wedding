import React from 'react'
import Nav from './Nav'

export default ({ children }) => (
  <div className="min-vh-100 z-1 flex flex-column">
    <Nav />
    <div className="pa3 pt4 z-2 flex-auto">
      <div className="w-100 center mw8 lh-copy">
        { children }
      </div>
    </div>
  </div>
)
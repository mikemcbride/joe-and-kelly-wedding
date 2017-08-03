import React from 'react'
import Nav from './Nav'
import Head from 'next/head'

export default ({ activeNavItem, children }) => {
  return (
    <div className="base-styles min-vh-100 z-1 flex flex-column">
      <Head>
        <title>Collins Conlon Wedding</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link href='/static/styles/index.css' rel='stylesheet' />
      </Head>
      <Nav activeNavItem={activeNavItem} />
      <div className="pa3 pt4 z-2 flex-auto">
        <div className="w-100 center mw8 lh-copy">
          { children }
        </div>
      </div>
    </div>
  )
}
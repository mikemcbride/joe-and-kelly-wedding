import React from 'react'

export default ({ member }) => {
  const bgImage = require(`../img/${member.image}`)
  
  return (
    <article className="w-100 w-50-l pv3 ph3-l">
      <div className="ba b--white-10 br1 pa3 pa4-ns h-100">
        <div className="tc">
          <span className="br-100 h4 w4 dib ba b--white-20 pa2 mb4">
            <img className="w-100 h-100 dib br-100 object-cover grayscale" src={bgImage} alt={member.name} />
          </span>
          <h1 className="f3 mb2">{ member.name }</h1>
          <h3 className="f5 fw4 mt0 mb3 white-60">{ member.title }</h3>
          <div className="w-60 center bb bw1 b--white-20 mv3"></div>
        </div>
        <p className="measure center f6">{ member.bio }</p>
      </div>
    </article>
  )
}
import React from 'react'

export default ({ member }) => {
  return (
    <article className="w-100 w-50-l pv3 ph3-l">
      <div className="ba b--white-10 br1 pa3 pa4-ns h-100">
        <div className="tc">
          <span className="br-100 h4 w4 dib ba b--white-20 pa2 mb4">
            <img className="w-100 h-100 dib br-100 object-cover grayscale" src={`/static/img/${member.image}`} alt={member.name} />
          </span>
          <h1 className="f3 mb3">{ member.name }</h1>
          <div className="w3 center bb bw1 b--gold mb3"></div>
          <h3 className="f5 fw4 m0 white-80">{ member.title }</h3>
          <p className="measure center f5 white-60">{ member.bio }</p>
        </div>
      </div>
    </article>
  )
}
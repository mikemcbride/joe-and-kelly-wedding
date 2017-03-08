import React from 'react'

export default ({ member }) => (
  <article className="w-100 w-50-l pv3 ph3-l">
    <div className="ba b--white-10 br1 pa3 pa4-ns h-100">
      <div className="tc">
        <span className="br-100 h4 w4 dib ba b--white-20 pa2 mb4">
          <span className="w-100 h-100 br-100 dib cover bg-center party-pic" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/${member.image}` }}></span>
        </span>
        <h1 className="f3 mb3">{ member.name }</h1>
        <h2 className="f5 mv0 white-60">{ member.title }</h2>
        <div className="w-60 center bb bw1 b--white-20 mv3"></div>
      </div>
      <p className="measure center f6">{ member.bio }</p>
    </div>
  </article>
)
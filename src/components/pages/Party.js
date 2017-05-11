import React from 'react'
import Page from '../Page'
import PartyMember from '../PartyMember'
import party from '../../data/party.js'

export const Party = () => (
  <Page>
    <p className="lh-copy mb4">Joe and Kelly have friends. Well, Kelly does. Joe has his brothers (and Mike who doesn't really count). Either way, their names are listed below for you to read.</p>
    
    <section className="mb4 mb5-ns">
      <h1 className="f3 b ttu gold mt0 pb2 bb bw1">The Ladies</h1>
      <div className="flex flex-wrap">
        { party.ladies.map(bm => <PartyMember member={bm} key={bm.id} />) }
      </div>
    </section>

    <section className="mb4 mb5-ns">
      <h1 className="f3 b ttu gold mt0 pb2 bb bw1">The Gentlemen</h1>
      <div className="flex flex-wrap">
        { party.gentlemen.map(gm => <PartyMember member={gm} key={gm.id} />) }
      </div>
    </section>
  </Page>
)
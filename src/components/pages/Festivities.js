import React from 'react'
import Page from '../Page'
import ceremony from '../../data/ceremony'
import reception from '../../data/reception'

export const Festivities = () => (
  <Page>
    <section className="mb4 mb5-ns">
      <h1 className="f3 b ttu gold mt0 mb4 pb2 bb bw1">Ceremony</h1>
      <p className="mb4">{ ceremony.info }</p>
      <div className="ba b--white-10 br1 mt4">
        <h3 className="f5 f4-ns b ph2 ph3-ns pv3 bb b--white-10 ttu gold mv0">{ ceremony.venue }</h3>
        <div className="ph2 pv3 ph3-ns flex">
          <div className="flex-auto">
            <div className="flex items-center pv2">
              <span className="gold dib address-icon mr3 mr4-ns tc icon icon-map-marker f4"></span>
              <span className="flex-auto"><a className="hover-gold" href={ ceremony.map.url } target="_blank">{ ceremony.address }</a></span>
            </div>
            <div className="flex items-center pv2">
              <span className="gold dib address-icon mr3 mr4-ns tc icon icon-calendar f4"></span>
              <span className="flex-auto">{ ceremony.date }</span>
            </div>
            <div className="flex items-center pv2">
              <span className="gold dib address-icon mr3 mr4-ns tc icon icon-clock f4"></span>
              <span className="flex-auto">{ ceremony.time }</span>
            </div>
            <div className="flex items-center pv2">
              <span className="gold dib address-icon mr3 mr4-ns tc icon icon-globe f4"></span>
              <span className="flex-auto"><a href={`http://www.${ceremony.website}`} className="hover-gold" target="_blank">{ ceremony.website }</a></span>
            </div>
          </div>
          <div className="dn db-l">
            <iframe src={ ceremony.map.embed.src } width="100%" height={ `${ceremony.map.embed.small}` } frameBorder="0" className="bn" allowFullScreen></iframe>
          </div>
        </div>
      </div>
      <div className="ph3-l f6 f5-ns dn-l">
        <div className="mt4 pa2 ph3-ns">
          <div className="db dn-ns">
            <iframe src={ ceremony.map.embed.src } width="100%" height={ `${ceremony.map.embed.small}` } frameBorder="0" className="bn" allowFullScreen></iframe>
          </div>
          <div className="dn db-m">
            <iframe src={ ceremony.map.embed.src } width="100%" height={ `${ceremony.map.embed.medium}` } frameBorder="0" className="bn" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </section>

    <section className="mb4 mb5-ns">
      <h1 className="f3 b ttu gold mt0 mb4 pb2 bb bw1">Reception</h1>
      <p className="mb3">Please join us for a cocktail hour at 5:30, with dinner and dancing to follow.</p>
      <p className="mb3"><span className="dib b gold ttu">Please note:</span> parking at the reception is limited. There will be parking attendants to help direct you and escort you to your vehicle. We want all of our guests to have a fun and safe time, so please consider carpooling, taking a taxi, or calling an Uber.</p>
      <p className="mb3">Never used Uber before? Download the app on your smartphone and enter this code for a free ride: <span className="gold">joec7977ue</span></p>
      <div className="ba b--white-10 br1 mt4">
        <h3 className="f5 f4-ns b ph2 ph3-ns pv3 bb b--white-10 ttu gold mv0">{ reception.venue }</h3>
        <div className="ph2 pv3 ph3-ns flex">
          <div className="flex-auto">
            <div className="flex items-center pv2">
              <span className="gold dib address-icon mr3 mr4-ns tc icon icon-map-marker f4"></span>
              <span className="flex-auto"><a className="hover-gold" href={ reception.map.url } target="_blank">{ reception.address }</a></span>
            </div>
            <div className="flex items-center pv2">
              <span className="gold dib address-icon mr3 mr4-ns tc icon icon-calendar f4"></span>
              <span className="flex-auto">{ reception.date }</span>
            </div>
            <div className="flex items-center pv2">
              <span className="gold dib address-icon mr3 mr4-ns tc icon icon-drink f4"></span>
              <span className="flex-auto">Cocktails: { reception.time.cocktails }</span>
            </div>
            <div className="flex items-center pv2">
              <span className="gold dib address-icon mr3 mr4-ns tc icon icon-food f4"></span>
              <span className="flex-auto">Dinner: { reception.time.dinner }</span>
            </div>
            <div className="flex items-center pv2">
              <span className="gold dib address-icon mr3 mr4-ns tc icon icon-globe f4"></span>
              <span className="flex-auto"><a href={`http://www.${ reception.website }`} className="hover-gold" target="_blank">{ reception.website }</a></span>
            </div>
          </div>
          <div className="dn db-l">
            <iframe src={ reception.map.embed.src } width="100%" height={ `${reception.map.embed.small}` } frameBorder="0" className="bn" allowFullScreen></iframe>
          </div>
        </div>
      </div>
      
      <div className="ph3-l f6 f5-ns dn-l">
        <div className="mt4 pa2 ph3-ns">
          <div className="db dn-ns">
            <iframe src={ reception.map.embed.src } width="100%" height={ `${reception.map.embed.small}` } frameBorder="0" className="bn" allowFullScreen></iframe>
          </div>
          <div className="dn db-m">
            <iframe src={ reception.map.embed.src } width="100%" height={ `${reception.map.embed.medium}` } frameBorder="0" className="bn" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </section>
  </Page>
)
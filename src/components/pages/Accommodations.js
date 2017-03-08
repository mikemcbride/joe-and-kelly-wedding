import React from 'react'
import Page from '../Page'
import hotel from '../../data/hotel'

export const Accommodations = () => (
  <Page>
    <div className="ba b--white-10 br1">
      <h3 className="f5 f4-ns b ph2 ph3-ns pv3 bb b--white-10 ttu gold mv0">{ hotel.name }</h3>
      <div className="ph2 pv3 ph3-ns">
        <div className="flex items-center pv2">
          <span className="gold dib address-icon mr3 mr4-ns tc icon icon-map-marker f4"></span>
          <span className="flex-auto"><a className="hover-gold" href={hotel.map.url} target="_blank">{hotel.address}</a></span>
        </div>
        <div className="flex items-center pv2">
          <span className="gold dib address-icon mr3 mr4-ns tc icon icon-phone f4"></span>
          <span className="flex-auto"><a href={`tel:${hotel.website.phone}`} className="hover-gold" target="_blank">{hotel.phone}</a></span>
        </div>
        <div className="flex items-center pv2">
          <span className="gold dib address-icon mr3 mr4-ns tc icon icon-code f4"></span>
          <span className="flex-auto">Booking Code: {hotel.booking.code}</span>
        </div>
        <div className="flex items-center pv2">
          <span className="gold dib address-icon mr3 mr4-ns tc icon icon-link f4"></span>
          <span className="flex-auto"><a href={hotel.booking.link} target="_blank">Click here to book. Use the code from above.</a></span>
        </div>
        <div className="flex items-center pv2">
          <span className="gold dib address-icon mr3 mr4-ns tc icon icon-globe f4"></span>
          <span className="flex-auto"><a href={hotel.website.url} className="hover-gold" target="_blank">{hotel.website.display}</a></span>
        </div>
        <div className="flex items-center pv2">
          <span className="gold dib address-icon mr3 mr4-ns tc icon icon-info f4"></span>
          <span className="flex-auto">{hotel.notes}</span>
        </div>
      </div>
    </div>
    
    <div className="ph3-l f6 f5-ns">  
      <div className="mt4 pa2 ph3-ns">
        <div className="db dn-ns">
          <iframe src={ hotel.map.embed.src } width="100%" height={ `${hotel.map.embed.small}` } frameBorder="0" className="bn" allowFullScreen></iframe>
        </div>
        <div className="dn db-m">
          <iframe src={ hotel.map.embed.src } width="100%" height={ `${hotel.map.embed.medium}` } frameBorder="0" className="bn" allowFullScreen></iframe>
        </div>
        <div className="dn db-l">
          <iframe src={ hotel.map.embed.src } width="100%" height={ `${hotel.map.embed.large}` } frameBorder="0" className="bn" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  </Page>
)
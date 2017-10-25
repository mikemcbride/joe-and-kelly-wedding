import React from 'react'
import Page from '../components/Page'
import hotel from '../data/hotel'

export default () => (
  <Page activeNavItem="accommodations">
    <p className="mb4">For the convenience of our guests, we have reserved a block of rooms at the nearby Aladdin Hotel. In order to ensure availability and the discounted rate, please book by October 25, 2017.</p>
    <div className="ba b--white-10 br1">
      <h3 className="f5 f4-ns b ph2 ph3-ns pv3 bb b--white-10 ttu gold mv0">{ hotel.name }</h3>
      <div className="ph2 pv3 ph3-ns flex">
        <div className="flex-auto">
          <div className="flex items-center pv2">
            <span className="gold dib address-icon mr3 mr4-ns tc icon icon-map-marker f4"></span>
            <span className="flex-auto"><a className="hover-gold" href={hotel.map.url} target="_blank">{hotel.address}</a></span>
          </div>
          <div className="flex items-center pv2">
            <span className="gold dib address-icon mr3 mr4-ns tc icon icon-phone f4"></span>
            <span className="flex-auto"><a href={`tel:${hotel.phone}`} className="hover-gold" target="_blank">{hotel.phone}</a></span>
          </div>
          <div className="flex items-center pv2">
            <span className="gold dib address-icon mr3 mr4-ns tc icon icon-code f4"></span>
            <span className="flex-auto">Booking Code: {hotel.booking.code}</span>
          </div>
          <div className="flex items-center pv2">
            <span className="gold dib address-icon mr3 mr4-ns tc icon icon-link f4"></span>
            <span className="flex-auto"><a href={hotel.booking.link} target="_blank">Click here to book.</a> Use the code from above. If the online booking fails, please call the hotel at the number listed.</span>
          </div>
          <div className="flex items-center pv2">
            <span className="gold dib address-icon mr3 mr4-ns tc icon icon-info f4"></span>
            <span className="flex-auto">{hotel.notes}</span>
          </div>
        </div>
        <div className="dn db-l">
          <iframe src={ hotel.map.embed.src } width="100%" height={ `${hotel.map.embed.small}` } frameBorder="0" className="bn" allowFullScreen></iframe>
        </div>
      </div>
    </div>
    
    <div className="ph3-l f6 f5-ns dn-l">  
      <div className="mt4 pa2 ph3-ns">
        <div className="db dn-ns">
          <iframe src={ hotel.map.embed.src } width="100%" height={ `${hotel.map.embed.small}` } frameBorder="0" className="bn" allowFullScreen></iframe>
        </div>
        <div className="dn db-m">
          <iframe src={ hotel.map.embed.src } width="100%" height={ `${hotel.map.embed.medium}` } frameBorder="0" className="bn" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  </Page>
)
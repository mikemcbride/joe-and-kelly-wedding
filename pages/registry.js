import React from 'react'
import Page from '../components/Page'

export default () => (
  <Page activeNavItem="registry">
    <p className="tc mt3 mb5">We have registered at Amazon and Bed Bath and Beyond. You can find links to the registries below.</p>
    <div className="flex items-center flex-column flex-row-ns">
      <div className="white-10 anti-grayscale-hover-ns w-100 pa4 pv3-ns">
        <a className="dib w-100" href="https://www.amazon.com/wedding/kelly-collins-joe-conlon-kansas-city-november-2017/registry/3V4GEHZY5WPCI" target="_blank">
          <img className="w-100" src='/static/img/amazon.svg' alt="Amazon Logo" />
        </a>
      </div>
      
      <div className="white-10 anti-grayscale-hover-ns w-100 pa4 pv3-ns">
        <a className="dib w-100" href="https://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?pwsToken=&eventType=Wedding&inventoryCallEnabled=true&registryId=544337828&pwsurl=" target="_blank">
          <img className="w-100" src='/static/img/bbb.svg' alt="Bed Bath and Beyond Logo" />
        </a>
      </div>
    </div>
  </Page>
)
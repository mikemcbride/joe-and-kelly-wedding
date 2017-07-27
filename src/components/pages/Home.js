import React from 'react'
import Page from '../Page'
import Banner from '../../img/banner.jpg'

export const Home = () => (
  <Page>
    <p className="tc mb4">Joe and Kelly are getting married!</p>
    <img src={Banner} alt="banner" className="db center" />
  </Page>
)
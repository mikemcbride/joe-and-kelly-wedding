import React from 'react'
import Page from '../Page'
import Banner from '../../img/banner.jpg'

export const Home = () => (
  <Page>
    <p className="tc mb4">Welcome! Joe and Kelly like cats and they also like pizza. Enjoy the site!</p>
    <img src={Banner} alt="banner" className="db center" />
  </Page>
)
import React from 'react'
import Page from '../Page'
import attractions from '../../data/attractions'

export const Attractions = () => (
  <Page>
    <p className="mb4">Looking for some fun things to do around KC? Here’s what the couple suggests:</p>
    <div className="ba b--white-10 br1 mb4">
      <h3 className="f5 f4-ns b ph2 ph3-ns pv3 bb b--white-10 ttu gold mv0">Joe's Picks</h3>
      <div className="ph2 pv3 ph3-ns">
        <p className="mb3"><strong className="gold ttu">BBQ:</strong> {attractions.joe.bbq}</p>
        <p className="mb3"><strong className="gold ttu">Fun:</strong> {attractions.joe.fun}</p>
        <p><strong className="gold ttu">Drink:</strong> {attractions.joe.drink}</p>
      </div>
    </div>
    <div className="ba b--white-10 br1 mb4">
      <h3 className="f5 f4-ns b ph2 ph3-ns pv3 bb b--white-10 ttu gold mv0">Kelly's Picks</h3>
      <div className="ph2 pv3 ph3-ns">
        <p className="mb3"><strong className="gold ttu">BBQ:</strong> {attractions.kelly.bbq}</p>
        <p className="mb3"><strong className="gold ttu">Fun:</strong> {attractions.kelly.fun}</p>
        <p><strong className="gold ttu">Drink:</strong> {attractions.kelly.drink}</p>
      </div>
    </div>
  </Page>
)
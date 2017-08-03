import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import pages from '../data/pages'

class Nav extends React.Component {
  static async getInitialProps() {
    console.log('props getInitialProps', this.props)
  }
  
  componentWillMount() {
    this.setState({
      activeNavItem: this.props.activeNavItem
    })
  }
  
  constructor() {
    super()
    this.toggleMenu = this.toggleMenu.bind(this)
    
    this.state = {
      navOpen: false,
      activeNavItem: ''
    }
  }
  
  toggleMenu(e) {
    e.preventDefault()
    this.setState({
      navOpen: !this.state.navOpen
    })
  }
  
  renderNavLink(page, activeNavItem) {
    console.log('active nav item', activeNavItem)
    const activeClass = activeNavItem === page.name ? 'active' : ''
    return (
      <Link href={page.url} key={page.url}>
        <a className={`${activeClass} f6 b nav-link bb bt bw2 b--transparent ttu dib pv3 ph2 ph3-ns`}>{page.title}</a>
      </Link>
    )
  }
  
  renderSideNavLink(page) {
    return (
      <Link href={ page.url } key={ page.url }>
        <a className="f6 b nav-link bb bt bw2 b--transparent ttu db pa3 tr">{ page.title }</a>
      </Link>
    )
  }
  
  render() {
    const navOpenClass = this.state.navOpen === true ? 'open' : ''
    
    return (
      <div>
        <nav className="dn-l flex justify-between items-center bb b--white-10 relative z-3">
          <Link href="/"><a className="f6 b ttu dib pa3 gold z-1">Joe + Kelly</a></Link>
          <span className="f6 b ttu dib pa3 pointer" onClick={(e) => this.toggleMenu(e)}>Menu<i className="icon icon-menu ml2"></i></span>
          <div id="nav-list" className={`fixed z-2 w-100 bg-near-black overflow-y-auto ${navOpenClass}`}>
            <div className="f6 b ttu pa3 bb b--white-10 flex items-center justify-end pointer">
              <span className="dib" onClick={(e) => this.toggleMenu(e)}>Close<i className="icon icon-close ml2"></i></span>
            </div>
            { pages.map(this.renderSideNavLink) }
          </div>
        </nav>

        <nav className="dn flex-l items-center justify-center bb b--white-10">
          {
            pages.map(page => {
              return this.renderNavLink(page, this.state.activeNavItem)
            })
          }
        </nav>
      </div>
    )
  }
}

Nav.contextTypes = {
	router: PropTypes.object
}

export default Nav
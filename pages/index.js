import Page from '../components/Page'

export default () => (
  <Page activeNavItem="home">
    <div className="center mw7 relative">
      <img src='/static/img/banner.jpg' alt="Joe and Kelly" className="grayscale z-0" />
      <span className="absolute top-0 left-0 right-0 tc pv2 pv3-ns pv4-l z-1 gold f4 f3-ns f2-l fw7 bg-black-80">
        <div>November 25, 2017</div>
      </span>
    </div>
  </Page>
)
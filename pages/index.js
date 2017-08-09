import Page from '../components/Page'

export default () => (
  <Page activeNavItem="home">
    <div className="center mw7 relative w-100">
      <img src='/static/img/banner.jpg' alt="Joe and Kelly" className="dib w-100 z-0 grayscale" />
      <span className="absolute bottom-1 left-0 right-0 tc pv2 pv3-ns z-1 gold f4 f3-ns f2-l fw7 bg-black-80">November 25, 2017</span>
    </div>
  </Page>
)
import Page from '../components/Page'

export default () => (
  <Page activeNavItem="home">
    <div className="center mw7 relative w-100 tc">
      <img src='/static/img/banner.jpg' alt="Joe and Kelly" className="w-80-ns dib z-0 grayscale" />
      <span className="absolute bottom-1 absolute-center w-100 w-80-ns tc pv2 pv3-ns z-1 gold f4 f3-ns f2-l fw7 bg-black-80">November 25, 2017</span>
    </div>
  </Page>
)
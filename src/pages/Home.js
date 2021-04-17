import Advertisement from '../components/Advertisement';

const Home = () => (
  <section className="__first-marketplace-section">
    <div className="__outer-sub-section">
      <h1 className="__center-title">Trending</h1>
      <div className="__center-sub-section">
        <Advertisement followers="../multimedia/img/icons/marketplace/followers/100k.png" platformLogo="../multimedia/img/icons/social/light/__tiktok-logo.png" companyLogo="../multimedia/img/icons/marketplace/yourlogohere.png" price="$25,000" />
        <a href="www.google.com" className="__advertisement-carousel">
          <div className="inner-carousel">
            <div className="__top">
              <button type="button">
                <img src="../multimedia/img/icons/marketplace/followers/5m.png" alt="" />
              </button>
              <button type="button">
                <img src="../multimedia/img/icons/social/light/__youtube-logo.png" alt="" />
              </button>
            </div>
            <div className="__bottom">
              <img src="../multimedia/img/icons/marketplace/yourlogohere.png" alt="" />
              <h3>$25,000</h3>
            </div>
          </div>
        </a>
        <a href="www.google.com" className="__advertisement-carousel">
          <div className="inner-carousel">
            <div className="__top">
              <button type="button">
                <img src="../multimedia/img/icons/marketplace/followers/10k.png" alt="" />
              </button>
              <button type="button">
                <img src="../multimedia/img/icons/social/light/__instagram-logo.png" alt="" />
              </button>
            </div>
            <div className="__bottom">
              <img src="../multimedia/img/icons/marketplace/yourlogohere.png" alt="" />
              <h3>$25,000</h3>
            </div>
          </div>
        </a>
        <a href="www.google.com" className="__advertisement-carousel">
          <div className="inner-carousel">
            <div className="__top">
              <button type="button">
                <img src="../multimedia/img/icons/marketplace/followers/10m.png" alt="" />
              </button>
              <button type="button">
                <img src="../multimedia/img/icons/social/light/__twitter-logo.png" alt="" />
              </button>
            </div>
            <div className="__bottom">
              <img src="../multimedia/img/icons/marketplace/yourlogohere.png" alt="" />
              <h3>$25,000</h3>
            </div>
          </div>
        </a>
        <a href="www.google.com" className="__advertisement-carousel">
          <div className="inner-carousel">
            <div className="__top">
              <button type="button">
                <img src="../multimedia/img/icons/marketplace/followers/10m.png" alt="" />
              </button>
              <button type="button">
                <img src="../multimedia/img/icons/social/light/__snap-logo.png" alt="" />
              </button>
            </div>
            <div className="__bottom">
              <img src="../multimedia/img/icons/marketplace/yourlogohere.png" alt="" />
              <h3>$25,000</h3>
            </div>
          </div>
        </a>
        <a href="www.google.com" className="__advertisement-carousel">
          <div className="inner-carousel">
            <div className="__top">
              <button type="button">
                <img src="../multimedia/img/icons/marketplace/followers/10m.png" alt="" />
              </button>
              <button type="button">
                <img src="../multimedia/img/icons/social/light/__fb-logo.png" alt="" />
              </button>
            </div>
            <div className="__bottom">
              <img src="../multimedia/img/icons/marketplace/yourlogohere.png" alt="" />
              <h3>$25,000</h3>
            </div>
          </div>
        </a>

      </div>
    </div>
  </section>
);

export default Home;

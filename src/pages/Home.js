import Advertisement from '../components/Advertisement';

import { firstMarketplace, thirdMarketplace } from '../assets/data/marketplaceSections';

const Home = () => (
  <div className="slider-container grabbing">
    <div className="slide">
      <section className="__first-marketplace-section">
        <div className="__outer-sub-section">
          <div className="__center-title">
            <h1>Trending</h1>
          </div>
          <div className="__center-sub-section">
            {firstMarketplace.map((ad) => {
              const adkey = ad.platformLogo.split('__')[1].split('-logo')[0] + ad.companyLogo.split('marketplace/')[1].split('.png')[0];
              return (
                <Advertisement
                  key={adkey}
                  followers={ad.followers}
                  platformLogo={ad.platformLogo}
                  companyLogo={ad.companyLogo}
                  price={ad.price}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="__second-marketplace-section">
        <div className="__outer-sub-section">
          <div className="__center-title">
            <h1>Categories</h1>
          </div>
          <div className="__center-sub-section">
            <div className="category__options">
              <div className="category">
                <img src="../multimedia/img/icons/marketplace/style-icon.png" alt="" />
                <h1>
                  Style
                </h1>
              </div>
              <div className="category">
                <img src="../multimedia/img/icons/marketplace/tech-icon.png" alt="" />
                <h1>
                  Tech
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="__third-marketplace-section">
        <div className="__outer-sub-section">
          <div className="__center-title">
            <h2>1M+ Followers</h2>
            <a href="../" className="category">
              <img src="../multimedia/img/icons/marketplace/__More-icon.png" alt="" />
              <h1>More</h1>
            </a>
          </div>
          <div className="__center-sub-section">
            {thirdMarketplace.map((ad) => {
              const adkey = ad.platformLogo.split('__')[1].split('-logo')[0] + ad.companyLogo.split('marketplace/')[1].split('.png')[0];
              return (
                <Advertisement
                  key={adkey}
                  followers={ad.followers}
                  platformLogo={ad.platformLogo}
                  companyLogo={ad.companyLogo}
                  price={ad.price}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Home;

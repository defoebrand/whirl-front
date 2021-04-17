import displaySection from '../helpers/sectionHelpers';

import { firstMarketplace, thirdMarketplace, fourthMarketplace } from '../assets/data/marketplaceSections';

const fifthMarketplace = [{
  followers: '../multimedia/img/icons/marketplace/followers/100k.png',
  platformLogo: '../multimedia/img/icons/social/light/__tiktok-logo.png',
  companyLogo: '../multimedia/img/icons/marketplace/yourlogohere.png',
  price: '$25,000',
}, {
  followers: '../multimedia/img/icons/marketplace/followers/5m.png',
  platformLogo: '../multimedia/img/icons/social/light/__youtube-logo.png',
  companyLogo: '../multimedia/img/icons/marketplace/yourlogohere.png',
  price: '$25,000',
}, {
  followers: '../multimedia/img/icons/marketplace/followers/10k.png',
  platformLogo: '../multimedia/img/icons/social/light/__instagram-logo.png',
  companyLogo: '../multimedia/img/icons/marketplace/yourlogohere.png',
  price: '$25,000',
}, {
  followers: '../multimedia/img/icons/marketplace/followers/10m.png',
  platformLogo: '../multimedia/img/icons/social/light/__twitter-logo.png',
  companyLogo: '../multimedia/img/icons/marketplace/yourlogohere.png',
  price: '$25,000',
}, {
  followers: '../multimedia/img/icons/marketplace/followers/10m.png',
  platformLogo: '../multimedia/img/icons/social/light/__snap-logo.png',
  companyLogo: '../multimedia/img/icons/marketplace/yourlogohere.png',
  price: '$25,000',
}, {
  followers: '../multimedia/img/icons/marketplace/followers/10m.png',
  platformLogo: '../multimedia/img/icons/social/light/__fb-logo.png',
  companyLogo: '../multimedia/img/icons/marketplace/yourlogohere.png',
  price: '$25,000',
}];

const Home = () => (
  <div className="slider-container grabbing">
    <div className="slide">
      <section className="__first-marketplace-section">
        <div className="__outer-sub-section">
          <div className="__center-title">
            <h1>Trending</h1>
          </div>
          <div className="__center-sub-section">
            {displaySection(firstMarketplace)}
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
            {displaySection(thirdMarketplace)}
          </div>
        </div>
      </section>

      <section className="__fourth-marketplace-section">
        <div className="__outer-sub-section">
          <div className="__center-title">
            <h2>500k-1M Followers</h2>
            <a href="../" className="category">
              <img src="../multimedia/img/icons/marketplace/__More-icon.png" alt="" />
              <h1>
                More
              </h1>
            </a>
          </div>
          <div className="__center-sub-section">
            {displaySection(fourthMarketplace)}
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Home;

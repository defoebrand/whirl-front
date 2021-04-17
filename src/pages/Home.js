import displaySection from '../helpers/sectionHelpers';

import {
  firstMarketplace, thirdMarketplace, fourthMarketplace, fifthMarketplace, sixthMarketplace,
} from '../assets/data/marketplaceSections';

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

      <section className="__fifth-marketplace-section">
        <div className="__outer-sub-section">
          <div className="__center-title">
            <h2>Under 500k Followers</h2>
            <a href="../" className="category">
              <img src="../multimedia/img/icons/marketplace/__More-icon.png" alt="" />
              <h1>
                More
              </h1>
            </a>
          </div>
          <div className="__center-sub-section" />
          {displaySection(fifthMarketplace)}
        </div>
      </section>

      <section className="__sixth-marketplace-section">
        <div className="__outer-sub-section">
          <div className="__center-title">
            <h2>Under 25k Followers</h2>
            <a href="../" className="category">
              <img src="../multimedia/img/icons/marketplace/__More-icon.png" alt="" />
              <h1>
                More
              </h1>
            </a>
          </div>
          <div className="__center-sub-section">
            {displaySection(sixthMarketplace)}

          </div>
        </div>
      </section>

    </div>
  </div>
);

export default Home;

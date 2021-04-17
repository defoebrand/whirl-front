import MarketPlaceSection from '../containers/MarketPlaceSection';
import TrendingSection from '../containers/TrendingSection';
import Categories from '../containers/Categories';

import { marketSections } from '../assets/data/marketplaceSections';

import { displaySection } from '../helpers/sectionHelpers';

const Home = () => (
  <div className="slider-container grabbing">
    <div className="slide">

      <TrendingSection display={displaySection} />

      <Categories display={displaySection} />

      {marketSections.map((section) => (
        <section key={section.class} className={section.class}>
          <MarketPlaceSection title={section.title} marketPlace={section.marketPlace} />
        </section>
      ))}
    </div>
  </div>
);

export default Home;

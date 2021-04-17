import MarketPlaceSection from '../containers/MarketPlaceSection';
import TrendingSection from '../containers/TrendingSection';
import Categories from '../containers/Categories';

import { marketPlace, sections } from '../assets/data/marketplaceSections';

const Home = () => (
  <div className="slider-container grabbing">
    <div className="slide">

      <TrendingSection marketPlace={marketPlace} />

      <Categories />

      {sections.map((section) => (
        <section key={section.class} className={section.class}>
          <MarketPlaceSection title={section.title} marketPlace={section.marketPlace} />
        </section>
      ))}
    </div>
  </div>
);

export default Home;

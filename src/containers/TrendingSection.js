import PropTypes from 'prop-types';

import displaySection from '../helpers/sectionHelpers';

const TrendingSection = ({ marketPlace }) => (
  <section className="__first-marketplace-section">
    <div className="__outer-sub-section">
      <div className="__center-title">
        <h1>Trending</h1>
      </div>
      <div className="__center-sub-section">
        {displaySection(marketPlace)}
      </div>
    </div>
  </section>
);

TrendingSection.propTypes = {
  marketPlace: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
};

TrendingSection.defaultProps = {
  marketPlace: [{}],
};

export default TrendingSection;

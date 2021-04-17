import PropTypes from 'prop-types';

import Advertisement from '../components/Advertisement';

// import displaySection from '../helpers/sectionHelpers';

const MarketPlaceSection = ({ title, marketPlace }) => (
  <div className="__outer-sub-section">
    <div className="__center-title">
      <h2>{title}</h2>
      <a href="../" className="category">
        <img src="../multimedia/img/icons/marketplace/__More-icon.png" alt="" />
        <h1>More</h1>
      </a>
    </div>
    <div className="__center-sub-section">
      {marketPlace.map((ad) => {
        const adkey = ad.platformLogo === '' ? ad.followers : ad.platformLogo.split('__')[1].split('-logo')[0] + ad.companyLogo.split('marketplace/')[1].split('.png')[0];
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
);

MarketPlaceSection.propTypes = {
  marketPlace: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
  title: PropTypes.string,
};

MarketPlaceSection.defaultProps = {
  marketPlace: [{
    followers: '',
    platformLogo: '',
    companyLogo: '',
    price: '',
  }],
  title: '',
};

export default MarketPlaceSection;

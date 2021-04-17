import Advertisement from '../components/Advertisement';

const displaySection = (marketSection) => {
  marketSection.map((ad) => {
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
  });
};

export default displaySection;

import PropTypes from 'prop-types';

const Category = ({ image, name }) => (
  <div className="category">
    <img src={image} alt="" />
    <h1>{name}</h1>
  </div>
);

Category.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

Category.defaultProps = {
  image: '',
  name: '',
};

export default Category;

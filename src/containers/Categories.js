import Category from '../components/Category';

import { categories } from '../assets/data/marketplaceSections';

const Categories = () => (
  <section className="__second-marketplace-section">
    <div className="__outer-sub-section">
      <div className="__center-title">
        <h1>Categories</h1>
      </div>
      <div className="__center-sub-section">
        <div className="category__options">
          {categories.map((category) => (
            <Category key={category.title} title={category.title} image={category.image} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Categories;

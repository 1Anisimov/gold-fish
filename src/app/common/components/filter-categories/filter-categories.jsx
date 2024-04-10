import React, { useState } from 'react';
import cls from './filter-categories.module.css';
import { categoriesArray } from '../../../../API/FakeAPI';
import FilterSubcategory from '../filter-subcategory/filter-subcategory';
import { Link, useParams } from 'react-router-dom';

const FilterCategories = ({ setTitleCatalog }) => {
  const params = useParams();
  const { category } = params;

  const [activeCategory, setActiveCategory] = useState(category);

  const handleOpenCategory = ({ target }) => {
    activeCategory === target.id ? setActiveCategory('') : setActiveCategory(target.id);
  };
  const handleOpenCategoryLink =
    (title) =>
    ({ target }) => {
      activeCategory === target.id ? setActiveCategory('') : setActiveCategory(target.id);
      setTitleCatalog(title);
    };

  return (
    <>
      <div className="accordion" id="accordionExample">
        {categoriesArray &&
          categoriesArray.map((item) => (
            <div className="containerCategories" key={item.value}>
              <div className="accordion-item" style={{ border: 'none' }}>
                <h2 className="accordion-header">
                  <div className={cls.buttonLink}>
                    <div className={cls.linkBlock}>
                      <Link
                        to={`/catalog/${item.value}`}
                        onClick={handleOpenCategoryLink(item.name)}
                        className={cls.buttonBlock}
                        id={item.value}
                        style={
                          item.value === activeCategory
                            ? { textDecoration: 'underline' }
                            : { textDecoration: 'none' }
                        }>
                        {item.name}
                      </Link>
                    </div>
                    <button
                      id={item.value}
                      onClick={handleOpenCategory}
                      className={
                        'accordion-button' + (item.value === activeCategory ? ' ' : ' collapsed')
                      }
                      style={{
                        border: 'none',
                        boxShadow: 'none',
                        backgroundColor: '#fff'
                      }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded={item.value === activeCategory ? 'true' : 'false'}
                      aria-controls="collapseTwo"></button>
                  </div>
                </h2>
                <div
                  id="collapseTwo"
                  className={
                    'accordion-collapse collapse' + (activeCategory === item.value ? ' show' : '')
                  }
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <FilterSubcategory category={item.value} setTitleCatalog={setTitleCatalog} />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default FilterCategories;

import React, { useEffect } from 'react';
import cls from './filter-categories.module.css';
import FilterSubcategory from '../filter-subcategory/filter-subcategory';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getActiveCategory,
  getAllCategories,
  getCategoriesLoadingStatus,
  getOpenCategory,
  setActiveCategory,
  setOpenCategory
} from '../../../store/categories';
import { setTitleCatalog } from '../../../store/products';

const FilterCategories = () => {
  const dispatch = useDispatch();
  const categoriesArray = useSelector(getAllCategories());
  const categoriesLoadingStatus = useSelector(getCategoriesLoadingStatus());
  const openCategory = useSelector(getOpenCategory());
  const activeCategory = useSelector(getActiveCategory());

  const params = useParams();
  const { category } = params;

  useEffect(() => {
    dispatch(setActiveCategory(category));
    dispatch(setOpenCategory(category));
  }, [dispatch, category]);

  const handleOpenCategory = ({ target }) => {
    console.log('targetOpen', target.id);
    console.log('openCategory', openCategory);
    openCategory === target.id
      ? dispatch(setOpenCategory(null))
      : dispatch(setOpenCategory(target.id));
  };
  const handleOpenCategoryLink =
    (title) =>
    ({ target }) => {
      dispatch(setActiveCategory(target.id));

      target.id === openCategory
        ? dispatch(setOpenCategory(null))
        : dispatch(setOpenCategory(target.id));
      dispatch(setTitleCatalog(title));
    };

  return (
    <>
      <div className="accordion" id="accordionExample">
        {categoriesLoadingStatus === 'READY' &&
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
                        'accordion-button' + (item.value === openCategory ? ' ' : ' collapsed')
                      }
                      style={{
                        border: 'none',
                        boxShadow: 'none',
                        backgroundColor: '#fff'
                      }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded={item.value === openCategory ? 'true' : 'false'}
                      aria-controls="collapseTwo"></button>
                  </div>
                </h2>
                <div
                  id="collapseTwo"
                  className={
                    'accordion-collapse collapse' +
                    (openCategory === item.value || openCategory === item.value ? ' show' : '')
                  }
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <FilterSubcategory category={item.value} />
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

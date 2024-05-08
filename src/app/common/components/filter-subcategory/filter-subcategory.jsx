import React from 'react';
import cls from './filter-subcategory.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllSubcategories, getSubcategoriesLoadingStatus } from '../../../store/subcategories';

const FilterSubcategory = ({ category, setTitleCatalog }) => {
  const subcatigoriesArray = useSelector(getAllSubcategories());
  const subcatigoriesLoadingStatus = useSelector(getSubcategoriesLoadingStatus());

  const handleSetTitleCatalog = (name) => {
    setTitleCatalog(name);
  };
  return (
    <>
      {subcatigoriesLoadingStatus === 'READY' &&
        subcatigoriesArray.map((item) => (
          <div key={item.value}>
            {category === item.category ? (
              <Link
                to={`/catalog/${item.category}/${item.value}`}
                className={cls.links}
                onClick={() => handleSetTitleCatalog(item.name)}>
                {item.name}
              </Link>
            ) : (
              ''
            )}
          </div>
        ))}
    </>
  );
};

export default FilterSubcategory;

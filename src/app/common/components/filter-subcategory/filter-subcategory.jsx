import React from 'react';
import cls from './filter-subcategory.module.css';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllSubcategories, getSubcategoriesLoadingStatus } from '../../../store/subcategories';

const FilterSubcategory = ({ category, setTitleCatalog }) => {
  const params = useParams();
  const { subcategory } = params;
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
                style={
                  item.value === subcategory
                    ? { color: '#F9A43F' }
                    : { color: 'rgba(42, 42, 42, 1)' }
                }
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

import React from 'react';
import cls from './filter-subcategory.module.css';
import { subcatigoriesArray } from '../../../../API/FakeAPI';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCategory, getSubcategory } from '../../../store/filters';

const FilterSubcategory = ({ category, setTitleCatalog }) => {
  const dispatch = useDispatch();
  const handleSetTitleCatalog = (title, category) => {
    dispatch(getCategory(category));
    dispatch(getSubcategory(title));
    setTitleCatalog(title);
  };
  return (
    <>
      {subcatigoriesArray &&
        subcatigoriesArray.map((item) => (
          <div key={item.value}>
            {category === item.category ? (
              <Link
                to={`/catalog/${item.category}/${item.value}`}
                className={cls.links}
                onClick={() => handleSetTitleCatalog(item.name, item.category)}>
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

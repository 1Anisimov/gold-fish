import React, { useEffect, useState } from 'react';
import cls from './filter-catalog.module.css';
import { Link, useParams } from 'react-router-dom';
import { FilterSlider } from '../filter-scrollbar/filter-scrollbar';
import FilterCategories from '../filter-categories/filter-categories';
import FilterAge from '../filter-age/filter-age';
import FilterPresence from '../filter-presence/filter-presence';
import { useDispatch, useSelector } from 'react-redux';
import {
  RemoveCategoryAndSubcategory,
  getAge,
  getCategory,
  getFiltersAge,
  getFiltersLoadingStatus,
  getFiltersPresence,
  getPresence,
  getSubcategory,
  removeAllFilters
} from '../../../store/filters';
import history from '../../../utils/history';
import FilterPlayers from '../filter-players/filter-players';

const FilterCatalog = ({ setTitleCatalog }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const { category, subcategory } = params;

  const ageState = useSelector(getFiltersAge());
  const presenceState = useSelector(getFiltersPresence());
  const filterLoadingStatus = useSelector(getFiltersLoadingStatus());

  useEffect(() => {
    if (category) {
      dispatch(getCategory(category));
    }
    if (subcategory) {
      dispatch(getSubcategory(subcategory));
    }
    if (category === undefined) {
      dispatch(RemoveCategoryAndSubcategory());
    }
  }, [category, subcategory, dispatch]);

  const [allCategory, setAllCategory] = useState(true);

  const handleDropDown = (set) => {
    set((prevState) => !prevState);
  };
  const handleOpenAllCategories = (title) => {
    if (!allCategory) {
      setAllCategory((prevState) => !prevState);
    }
    setTitleCatalog(title);
    dispatch(RemoveCategoryAndSubcategory());
  };

  const handleRemoveFilters = () => {
    dispatch(removeAllFilters());
    history.push('/catalog/');
  };

  const handleChangeAge = (state, name, value) => {
    const newStateAgeObject = {
      ...state,
      [name]: value
    };
    dispatch(getAge(newStateAgeObject));
  };
  const handleChangePresence = (state, name, value) => {
    const newStateAgeObject = {
      ...state,
      [name]: value
    };
    dispatch(getPresence(newStateAgeObject));
  };

  const handleChangeCheckbox = ({ target }) => {
    if (target.id === 'age') {
      if (ageState) {
        handleChangeAge(ageState, target.name, target.checked);
      }
    }

    if (target.id === 'presence') {
      if (presenceState) {
        handleChangePresence(presenceState, target.name, target.checked);
      }
    }
  };

  return (
    <>
      <div className={cls.filter}>
        {filterLoadingStatus === 'READY' ? (
          <div className={cls.container}>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item" style={{ border: 'none', outline: 'none' }}>
                <h2 className="accordion-header" style={{ border: 'none', outline: 'none' }}>
                  <div className={cls.buttonLink}>
                    <div className={cls.linkBlock}>
                      <Link
                        onClick={() => handleOpenAllCategories('Каталог продукции')}
                        to="/catalog/"
                        className={cls.buttonBlock}
                        style={
                          allCategory
                            ? {
                                textDecoration: 'underline',
                                outline: 'none',
                                border: 'none'
                              }
                            : { textDecoration: 'none' }
                        }>
                        Все категории
                      </Link>
                    </div>
                    <button
                      onClick={() => handleDropDown(setAllCategory)}
                      className={'accordion-button' + (allCategory ? ' ' : ' collapsed')}
                      style={{ border: 'none', boxShadow: 'none', backgroundColor: '#fff' }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded={allCategory ? 'true' : 'false'}
                      aria-controls="collapseTwo"></button>
                  </div>
                </h2>
                <div
                  id="collapseTwo"
                  className={'accordion-collapse collapse' + (allCategory ? ' show' : '')}
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <FilterCategories setTitleCatalog={setTitleCatalog} />
                  </div>
                </div>
              </div>
            </div>
            <FilterSlider />
            <FilterAge onChange={handleChangeCheckbox} />
            <FilterPresence onChange={handleChangeCheckbox} />
            <FilterPlayers />
            <div className={cls.buttonShowBlock}>
              <button onClick={handleRemoveFilters} className={cls.buttonShow}>
                Сбросить фильтры
              </button>
            </div>
          </div>
        ) : (
          'Loading...'
        )}
      </div>
    </>
  );
};

export default FilterCatalog;

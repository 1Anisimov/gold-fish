import React, { useEffect, useState } from 'react';
import cls from './filter-catalog.module.css';
import { Link, useParams } from 'react-router-dom';
import FilterCategories from '../filter-categories/filter-categories';
import FilterScrollbar from '../filter-scrollbar/filter-scrollbar';
import FilterAge from '../filter-age/filter-age';
import FilterPresence from '../filter-presence/filter-presence';
import { useDispatch } from 'react-redux';
import {
  RemoveCategoryAndSubcategory,
  getAge,
  getCategory,
  getPresence,
  getSubcategory
} from '../../../store/filters';

const FilterCatalog = ({ setTitleCatalog }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const { category, subcategory } = params;

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
  const [inputCheckboxAge, setInputCheckboxAge] = useState({
    18: true,
    '3,4,5': true,
    '6,7': true,
    '8,9,10,11,12': true,
    '13,14,15': true,
    '16,17': true
  });
  const [inputCheckboxPresence, setInputCheckboxPresence] = useState({
    are_available: true,
    to_order: true,
    not_available: true
  });

  const handleChangeCheckbox = () => {
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      if (checkbox.id === 'age') {
        setInputCheckboxAge((prevState) => ({
          ...prevState,
          [checkbox.name]: checkbox.checked
        }));
      }
      if (checkbox.id === 'presence') {
        setInputCheckboxPresence((prevState) => ({
          ...prevState,
          [checkbox.name]: checkbox.checked
        }));
      }
    });
  };
  useEffect(() => {
    dispatch(getAge(inputCheckboxAge));
  }, [inputCheckboxAge, dispatch]);

  useEffect(() => {
    dispatch(getPresence(inputCheckboxPresence));
  }, [inputCheckboxPresence, dispatch]);

  return (
    <>
      <div className={cls.filter}>
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
          <FilterScrollbar />
          <FilterAge onChange={handleChangeCheckbox} />
          <FilterPresence onChange={handleChangeCheckbox} />
          <div className={cls.buttonShowBlock}>
            <button className={cls.buttonShow}>Показать</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterCatalog;

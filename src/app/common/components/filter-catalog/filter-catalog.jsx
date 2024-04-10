import React, { useState } from 'react';
import cls from './filter-catalog.module.css';
import { Link } from 'react-router-dom';
import FilterCategories from '../filter-categories/filter-categories';
import FilterScrollbar from '../filter-scrollbar/filter-scrollbar';
// import arrowBottom from '../../../image/icons/arrow_bottom_filter_mini.png';
// import { Link } from 'react-router-dom';

const FilterCatalog = ({ setTitleCatalog }) => {
  const [allCategory, setAllCategory] = useState(true);

  const handleDropDown = (set) => {
    set((prevState) => !prevState);
  };
  const handleOpenAllCategories = (title) => {
    if (!allCategory) {
      setAllCategory((prevState) => !prevState);
    }
    setTitleCatalog(title);
  };

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
        </div>
      </div>
    </>
  );
};

export default FilterCatalog;

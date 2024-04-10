import React, { useState } from 'react';
import cls from './filter-scrollbar.module.css';

const FilterScrollbar = () => {
  const [priceBlock, setPriceBlock] = useState(true);
  const handleOpenPrice = () => {
    setPriceBlock((prevState) => !prevState);
  };
  return (
    <>
      <div className={cls.scrollbar}>
        <div className={cls.container}>
          <div className="accordion" id="accordionExample">
            <div className="containerCategories">
              <div className="accordion-item" style={{ border: 'none' }}>
                <h2 className="accordion-header">
                  <button
                    onClick={handleOpenPrice}
                    className={'accordion-button' + (priceBlock ? ' ' : ' collapsed')}
                    style={{
                      border: 'none',
                      boxShadow: 'none',
                      backgroundColor: '#fff'
                    }}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded={priceBlock ? 'true' : 'false'}
                    aria-controls="collapseTwo">
                    <span className={cls.text}>Цена</span>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className={'accordion-collapse collapse' + (priceBlock ? ' show' : '')}
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className={cls.BlockInputs}>
                      <div className={cls.sliderBlock}>
                        <input
                          className={cls.inputMin}
                          type="range"
                          min="100"
                          max="7500"
                          defaultValue="2500"
                        />
                        <input
                          className={cls.inputMax + ' ' + cls.inputRight}
                          type="range"
                          min="100"
                          max="7500"
                          defaultValue="7500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterScrollbar;

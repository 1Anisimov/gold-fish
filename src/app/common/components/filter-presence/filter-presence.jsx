import React, { useState } from 'react';
import cls from './filter-presence.module.css';

const FilterPresence = () => {
  const presenceArray = [
    { title: 'В наличие' },
    { title: 'Под заказ' },
    { title: 'Нет в наличие' }
  ];
  const [openClose, setOpenClose] = useState(true);
  return (
    <>
      <div className={cls.presence}>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={{ border: 'none', outline: 'none' }}>
            <h2 className="accordion-header" style={{ border: 'none', outline: 'none' }}>
              <div className={cls.buttonLink}>
                <div className={cls.linkBlock}></div>
                <button
                  onClick={() => setOpenClose((prevState) => !prevState)}
                  className={'accordion-button' + (openClose ? ' ' : ' collapsed')}
                  style={{ border: 'none', boxShadow: 'none', backgroundColor: '#fff' }}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded={openClose ? 'true' : 'false'}
                  aria-controls="collapseTwo">
                  <h3 className={cls.title}>Наличие</h3>
                </button>
              </div>
            </h2>
            <div
              id="collapseTwo"
              className={'accordion-collapse collapse' + (openClose ? ' show' : '')}
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div>
                  {presenceArray &&
                    presenceArray.map((item) => (
                      <div className={cls.container}>
                        <input className={cls.input} type="checkbox" required />
                        <label className={cls.label} htmlFor="">
                          {item.title}
                        </label>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterPresence;

import React, { useState } from 'react';
import cls from './filter-presence.module.css';

const FilterPresence = ({ onChange }) => {
  const presenceArray = [
    { title: 'В наличии', id: 1, value: 'are_available', category: 'presence' },
    { title: 'Под заказ', id: 2, value: 'to_order', category: 'presence' },
    { title: 'Нет в наличии', id: 3, value: 'not_available', category: 'presence' }
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
                      <div className={cls.container} key={item.id}>
                        <input
                          className={cls.input}
                          type="checkbox"
                          name={item.value}
                          onChange={onChange}
                          id={item.category}
                          defaultChecked
                        />
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

import React, { useState } from 'react';
import cls from './filter-age.module.css';

const FilterAge = () => {
  const agesArray = [
    { title: '3-5 лет', value: '3-5' },
    { title: '6-7 лет', value: '6-7' },
    { title: '8-12 лет', value: '8-12' },
    { title: '13-15 лет', value: '13-15 ' },
    { title: '16-17 лет', value: '16-17' },
    { title: 'более 18 лет', value: '18' }
  ];
  const [openClose, setOpenClose] = useState(true);
  return (
    <>
      <div className={cls.age}>
        <div>
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
                    <h3 className={cls.title}>Возрасты</h3>
                  </button>
                </div>
              </h2>
              <div
                id="collapseTwo"
                className={'accordion-collapse collapse' + (openClose ? ' show' : '')}
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div>
                    {agesArray &&
                      agesArray.map((item) => (
                        <div className={cls.container}>
                          <input
                            className={cls.input}
                            value={item.value}
                            type="checkbox"
                            required
                          />
                          <label className={cls.label} value={item.value} htmlFor="">
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
      </div>
    </>
  );
};

export default FilterAge;

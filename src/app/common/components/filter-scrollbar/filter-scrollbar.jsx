import React, { useState } from 'react';
import { Slider, ConfigProvider } from 'antd';
import cls from './filter-scrollbar.module.css';
import { useDispatch } from 'react-redux';
import { getPrice } from '../../../store/filters';

const FilterSlider = () => {
  const dispatch = useDispatch();
  const [openClose, setOpenClose] = useState(true);
  const [sliderValue, setSliderValue] = useState([1, 10000]);
  const onChange = (value) => {
    dispatch(getPrice(value));
    setSliderValue(value);
  };
  return (
    <>
      <div className={cls.container}>
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
                  <h3 className={cls.title}>Цена</h3>
                </button>
              </div>
            </h2>
            <div
              id="collapseTwo"
              className={'accordion-collapse collapse' + (openClose ? ' show' : '')}
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className={cls.inputBlock}>
                  <div>
                    <label className={cls.label} htmlFor="">
                      От
                    </label>
                    <input value={sliderValue[0]} className={cls.input} readOnly type="number" />
                  </div>
                  <div>
                    <label className={cls.label} htmlFor="">
                      До
                    </label>
                    <input value={sliderValue[1]} className={cls.input} readOnly type="number" />
                  </div>
                </div>
                <ConfigProvider
                  theme={{
                    components: {
                      Slider: {
                        handleColor: 'black',
                        handleActiveColor: 'black',
                        trackBg: 'black',
                        trackHoverBg: 'black',
                        dotActiveBorderColor: 'black',
                        dotBorderColor: 'black',
                        railHoverBg: 'rgba(0, 0, 0, 0.04)',
                        railBg: 'rgba(0, 0, 0, 0.04)',
                        colorPrimaryBorderHover: 'black'
                      }
                    }
                  }}>
                  <Slider
                    range
                    defaultValue={[1, 10000]}
                    max={10000}
                    onChange={(value) => onChange(value)}
                  />
                </ConfigProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FilterSlider;

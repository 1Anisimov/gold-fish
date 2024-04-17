import React, { useState } from 'react';
import { Slider, ConfigProvider } from 'antd';
import cls from './filter-players.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changePlayers, getFiltersLoadingStatus, getFiltersPlayers } from '../../../store/filters';

const FilterPlayers = () => {
  const dispatch = useDispatch();
  const playersState = useSelector(getFiltersPlayers());
  const filterLoadingStatus = useSelector(getFiltersLoadingStatus());
  const [openClose, setOpenClose] = useState(true);
  const onChange = (value) => {
    dispatch(changePlayers(value));
  };
  return (
    <>
      <div className={cls.container}>
        {filterLoadingStatus === 'READY' ? (
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
                    <h3 className={cls.title}>Кол-во игроков</h3>
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
                      <input value={playersState[0]} className={cls.input} readOnly type="number" />
                    </div>
                    <div>
                      <label className={cls.label} htmlFor="">
                        До
                      </label>
                      <input value={playersState[1]} className={cls.input} readOnly type="number" />
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
                      defaultValue={playersState}
                      max={10}
                      min={1}
                      onChange={(value) => onChange(value)}
                    />
                  </ConfigProvider>
                </div>
              </div>
            </div>
          </div>
        ) : (
          'Loading...'
        )}
      </div>
    </>
  );
};
export default FilterPlayers;

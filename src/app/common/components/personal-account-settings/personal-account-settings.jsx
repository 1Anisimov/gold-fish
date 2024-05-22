import React, { useState } from 'react';
import cls from './personal-account-settings.module.css';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../../store/currentUser';
import iconChange from '../../../image/icons/icon_change_button.png';
import { ScrollBlock } from '../../../hooks/useScrollBlock';
import MainButton from '../../../reusable-components/main-button';

const PersonalAccountSettings = () => {
  const currentUser = useSelector(getCurrentUser());
  const [openClosed, setOpenClosed] = useState(false);
  const [changeName, setChangeName] = useState('');

  const [blockScroll, allowScroll] = ScrollBlock();

  openClosed ? blockScroll() : allowScroll();

  const changeOpenClosed = (id) => {
    setChangeName(id);
    setOpenClosed(true);
  };

  const closeChanged = ({ target }) => {
    if (target.id === 'closed') {
      setOpenClosed(false);
    }
  };

  const handleChangeData = ({ target }) => {
    if (target.id === 'name') {
      console.log('name', target.value);
    }
    if (target.id === 'secondName') {
      console.log('secondName', target.value);
    }
    if (target.id === 'number') {
      console.log('number', target.value);
    }
    if (target.id === 'mail') {
      console.log('mail', target.value);
    }
  };

  return (
    <div className={cls.mainContent}>
      {openClosed ? (
        <div id="closed" onClick={closeChanged} className={cls.changeFormBlock}>
          <div className={cls.changeFormContent}>
            <div className={cls.changeFormContainer}>
              <h3 className={cls.changeFormTitle}>Изменить данные</h3>
              {changeName === 'name' ? (
                <div className={cls.changeFormInputs}>
                  <div className={cls.changeFormInput}>
                    <label htmlFor="">Ваше имя:</label>
                    <input
                      autoFocus
                      id="name"
                      onChange={handleChangeData}
                      className={cls.input}
                      type="text"
                    />
                  </div>
                  <div className={cls.changeFormInput}>
                    <label htmlFor="">Ваша фамилия:</label>
                    <input
                      id="secondName"
                      onChange={handleChangeData}
                      className={cls.input}
                      type="text"
                    />
                  </div>
                </div>
              ) : changeName === 'number' ? (
                <div className={cls.changeFormInputs}>
                  <div className={cls.changeFormInput}>
                    <label htmlFor="">Ваш номер:</label>
                    <input
                      autoFocus
                      id="number"
                      onChange={handleChangeData}
                      className={cls.input}
                      type="text"
                    />
                  </div>
                </div>
              ) : (
                <div className={cls.changeFormInputs}>
                  <div className={cls.changeFormInput}>
                    <label htmlFor="">Ваш E-mail:</label>
                    <input
                      autoFocus
                      id="mail"
                      onChange={handleChangeData}
                      className={cls.input}
                      type="text"
                    />
                  </div>
                </div>
              )}

              <div className={cls.changeFormButton}>
                <MainButton isGradient width="274" heigth="53" text="Сохранить" handleClick={''} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className={cls.info}>
        <div className={cls.imageBlock}>
          <img src={currentUser.img} alt="" />
        </div>
        <div className={cls.content}>
          <div className={cls.stringBlock}>
            <div className={cls.nameText}>
              {' '}
              <span>{currentUser?.secondName}</span>
              <span>{` ${currentUser?.name}`}</span>
            </div>
            <div className={cls.buttonBlock}>
              <button onClick={() => changeOpenClosed('name')}>
                <img src={iconChange} alt="" />
                <span className={cls.buttonBlockText}>Изменить</span>
              </button>
            </div>
          </div>
          <div className={cls.stringBlock}>
            <div>
              <span className={cls.infoTitle}>Телефон:</span>
              <span className={cls.stringBlockText}>{` ${currentUser?.number}`}</span>
            </div>
            <div className={cls.buttonBlock}>
              <button onClick={() => changeOpenClosed('number')}>
                <img src={iconChange} alt="" />
                <span className={cls.buttonBlockText}>Изменить</span>
              </button>
            </div>
          </div>
          <div className={cls.stringBlock}>
            <div>
              <span className={cls.infoTitle}>E-mail:</span>
              <span className={cls.stringBlockText}>{` ${currentUser?.mail}`}</span>
            </div>
            <div className={cls.buttonBlock}>
              <button onClick={() => changeOpenClosed('mail')}>
                <img src={iconChange} alt="" />
                <span className={cls.buttonBlockText}>Изменить</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalAccountSettings;

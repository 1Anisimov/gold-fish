import React, { useState } from 'react';
import cls from './personal-account-settings.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentUser,
  setChangedUserInfoMail,
  setChangedUserInfoName,
  setChangedUserInfoNumber,
  setChangedUserInfoSecondName,
  setUserInfo
} from '../../../store/currentUser';
import iconChange from '../../../image/icons/icon_change_button.png';
import { ScrollBlock } from '../../../hooks/useScrollBlock';
import MainButton from '../../../reusable-components/main-button';
import Modal from '../../../reusable-components/main-modal/main-modal';
import { getMainModal, setMainModal } from '../../../store/modals';

const PersonalAccountSettings = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(getCurrentUser());
  const isModalActive = useSelector(getMainModal());

  const [changeName, setChangeName] = useState('');

  const [blockScroll, allowScroll] = ScrollBlock();

  isModalActive ? blockScroll() : allowScroll();

  const changeOpenClosed = (id) => {
    setChangeName(id);
    dispatch(setMainModal(true));
  };

  const handleChangeData = ({ target }) => {
    if (target.id === 'name') {
      dispatch(setChangedUserInfoName(target.value.trim()));
    }
    if (target.id === 'secondName') {
      dispatch(setChangedUserInfoSecondName(target.value.trim()));
    }
    if (target.id === 'number') {
      dispatch(setChangedUserInfoNumber(target.value.trim()));
    }
    if (target.id === 'mail') {
      dispatch(setChangedUserInfoMail(target.value.trim()));
    }
  };

  const submitTheForm = () => {
    dispatch(setUserInfo(changeName));
    dispatch(setMainModal(false));
  };

  return (
    <div className={cls.mainContent}>
      {/* //TODO: фамилию и имя сделать одним инпутом, сделать общий инпут под все модалки */}
      {isModalActive ? (
        <Modal>
          <h3 className={cls.changeFormTitle}>Изменить данные</h3>
          {changeName === 'name' ? (
            <div className={cls.changeFormInputs}>
              <div className={cls.changeFormInput}>
                <label htmlFor="">Ваше имя:</label>
                <input
                  defaultValue={currentUser.name}
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
                  defaultValue={currentUser.secondName}
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
                  defaultValue={currentUser.number}
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
                  defaultValue={currentUser.mail}
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
            <MainButton
              isGradient
              width="274"
              heigth="53"
              text="Сохранить"
              handleClick={submitTheForm}
            />
          </div>
        </Modal>
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
            {/* //TODO: кнопка Изменить везде одинаковая на этой странице, сделать переиспользуемым компонентом */}
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
      {/* //TODO: убрать в отдельный компонент */}
      <div className={cls.question}>
        <h3 className={cls.questionTitle}>Остались вопросы?</h3>
        <div className={cls.questionBlock}>
          <div className={cls.questionBlockInput}>
            <label htmlFor="">Ваше имя:</label>
            <input placeholder="Имя" className={cls.questionInput} type="text" />
          </div>
          <div className={cls.questionBlockInput}>
            <label htmlFor="">Ваш телефон:</label>
            <input placeholder="+7 ___ __ __" className={cls.questionInput} type="text" />
          </div>
          <div className={cls.questionBlockInput}>
            <label htmlFor="">Ваш комментарий:</label>
            <textarea placeholder="Комментарий" className={cls.questionInputTextarea} type="text" />
          </div>
          <div className={cls.questionButton}>
            <MainButton text="Заказать звонок" isGradient heigth="46" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalAccountSettings;

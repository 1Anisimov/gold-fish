import React from 'react';
import cls from './personal-account-settings.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentUser,
  logOut,
  setChangedUserInfoMail,
  setChangedUserInfoName,
  setChangedUserInfoNumber,
  setUserInfo
} from '../../../store/currentUser';
import { ScrollBlock } from '../../../hooks/useScrollBlock';
import MainButton from '../../../reusable-components/main-button';
import Modal from '../../../reusable-components/main-modal/main-modal';
import { getChangedName, getMainModal, setMainModal } from '../../../store/modals';
import PersonalQuestionForm from './personal-question-form';
import ButtonChangePersonal from '../../../common/components/button-change-personal/button-change-personal';
import history from '../../../utils/history';

const PersonalAccountSettings = () => {
  const dispatch = useDispatch();

  const changeName = useSelector(getChangedName());
  const currentUser = useSelector(getCurrentUser());
  const isModalActive = useSelector(getMainModal());

  const inputsArray = [
    { label: 'Ваше имя:', defaultValue: currentUser.name, id: 'name' },
    { label: 'Ваш номер:', defaultValue: currentUser.number, id: 'number' },
    { label: 'Ваш E-mail:', defaultValue: currentUser.mail, id: 'mail' }
  ];

  const [blockScroll, allowScroll] = ScrollBlock();

  isModalActive ? blockScroll() : allowScroll();

  const handleChangeData = ({ target }) => {
    if (target.id === 'name') {
      dispatch(setChangedUserInfoName(target.value.trim()));
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

  const logOutAccount = () => {
    dispatch(logOut());
    history.push('/');
  };

  return (
    <div className={cls.mainContent}>
      {isModalActive ? (
        <Modal>
          <h3 className={cls.changeFormTitle}>Изменить данные</h3>
          <div className={cls.changeFormInputs}>
            {inputsArray.map((item) => {
              if (changeName === item.id) {
                return (
                  <div className={cls.changeFormInput}>
                    <label htmlFor="">{item.label}</label>
                    <input
                      defaultValue={item.defaultValue}
                      autoFocus
                      id={item.id}
                      onChange={handleChangeData}
                      className={cls.input}
                      type="text"
                    />
                  </div>
                );
              } else return <></>;
            })}
          </div>

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
              <span>{` ${currentUser?.name}`}</span>
            </div>
            <ButtonChangePersonal name={'name'} />
          </div>
          <div className={cls.stringBlock}>
            <div>
              <span className={cls.infoTitle}>Телефон:</span>
              <span className={cls.stringBlockText}>{` ${currentUser?.number}`}</span>
            </div>
            <ButtonChangePersonal name={'number'} />
          </div>
          <div className={cls.stringBlock}>
            <div>
              <span className={cls.infoTitle}>E-mail:</span>
              <span className={cls.stringBlockText}>{` ${currentUser?.mail}`}</span>
            </div>
            <ButtonChangePersonal name={'mail'} />
          </div>
          <div className={cls.buttonLogOutBlock}>
            <button onClick={logOutAccount} className={cls.buttonLogOut}>
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </div>
      <PersonalQuestionForm />
    </div>
  );
};

export default PersonalAccountSettings;

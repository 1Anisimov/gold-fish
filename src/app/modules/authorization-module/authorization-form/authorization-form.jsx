import React from 'react';
import cls from './authorization-form.module.css';
import iconClosed from '../../../image/icons/X_closed_icon.png';
import { ScrollBlock } from '../../../hooks/useScrollBlock';
import { useDispatch, useSelector } from 'react-redux';
import { getModalRegisterForm, setModalRegisterForm } from '../../../store/modals';
import TabsAuthorizationSignIn from '../tabs-authorization-signIn/tabs-authorization-signIn';
import AuthorizationFormSignUp from '../authorization-form-signUp/authorization-form-signUp';
import Tab from '../../../common/components/tabs/tabs';

const AuthorizationForm = () => {
  const tabItems = [
    {
      key: '1',
      label: 'Вход',
      children: <TabsAuthorizationSignIn />
    },
    {
      key: '2',
      label: 'Регистрация',
      children: <AuthorizationFormSignUp />
    }
  ];

  const dispatch = useDispatch();

  const modalForm = useSelector(getModalRegisterForm());

  const [blockScroll, allowScroll] = ScrollBlock();

  modalForm ? blockScroll() : allowScroll();

  const handleCloseModal = () => {
    dispatch(setModalRegisterForm(false));
  };

  return (
    <>
      {modalForm && (
        <div className={cls.form}>
          <div className={cls.container}>
            <div className={cls.content}>
              <img
                onClick={() => handleCloseModal(false)}
                className={cls.iconClosed}
                src={iconClosed}
                alt=""
              />
              <h3 className={cls.title}>Войдите или зарегистрируйтесь</h3>
              <Tab tabItems={tabItems} tabSize={19} tabClassName={'w340'} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthorizationForm;

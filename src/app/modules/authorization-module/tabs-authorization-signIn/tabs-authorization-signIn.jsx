import React, { useState } from 'react';
import cls from './tabs-authorization-signIn.module.css';
import MainButton from '../../../reusable-components/main-button';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../store/currentUser';
import { setModalRegisterForm } from '../../../store/modals';

const TabsAuthorizationSignIn = () => {
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({});
  const handleChangeLoginForm = ({ target }) => {
    setLoginForm((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };
  const pushLoginForm = (e) => {
    e.preventDefault();
    dispatch(logIn({ payload: loginForm }));
    dispatch(setModalRegisterForm(false));
  };
  return (
    <div className={cls.signIn}>
      <div className={cls.contant}>
        <form className={cls.formContant} action="login">
          <div className={cls.email}>
            <label htmlFor="email">E-mail</label>
            <input
              onChange={handleChangeLoginForm}
              className={cls.emailInput}
              type="email"
              name="email"
              placeholder="E-mail"
            />
          </div>
          <div className={cls.email}>
            <label htmlFor="password">Пароль</label>
            <input
              placeholder="Пароль"
              onChange={handleChangeLoginForm}
              className={cls.emailInput}
              type="password"
              name="password"
            />
          </div>
          <p className={cls.p}>Забыли пароль?</p>
          <MainButton handleClick={pushLoginForm} width="274" heigth="39" isGradient text="Войти" />
        </form>
      </div>
    </div>
  );
};

export default TabsAuthorizationSignIn;

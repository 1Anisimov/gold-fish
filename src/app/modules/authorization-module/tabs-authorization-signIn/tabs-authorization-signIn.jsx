import React, { useEffect, useState } from 'react';
import cls from './tabs-authorization-signIn.module.css';
import MainButton from '../../../reusable-components/main-button';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../store/currentUser';
import { setModalRegisterForm } from '../../../store/modals';
import { validator } from '../../../utils/validator';

const TabsAuthorizationSignIn = () => {
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

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

  const validatorConfig = {
    email: {
      isRequired: {
        message: 'Электронная почта обязательна для заполнения'
      },
      isEmail: {
        message: 'Некорректный адресс email'
      }
    },
    password: {
      isRequired: {
        message: 'Пароль обязателен для заполнения'
      }
    }
  };

  useEffect(() => {
    validate();
  }, [loginForm]);

  const validate = () => {
    const allErrors = validator(loginForm, validatorConfig);
    setErrors(allErrors);
    return Object.keys(allErrors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  return (
    <div className={cls.signIn}>
      <div className={cls.contant}>
        <form className={cls.formContant} action="login">
          <div className={cls.email}>
            <label htmlFor="email">E-mail</label>
            <input
              onChange={handleChangeLoginForm}
              className={!errors.email ? cls.emailInput : cls.errorInput}
              type="email"
              name="email"
              placeholder="E-mail"
            />
            {errors.email ? <div className={cls.errorBlock}>{errors.email}</div> : <></>}
          </div>
          <div className={cls.email}>
            <label htmlFor="password">Пароль</label>
            <input
              placeholder="Пароль"
              onChange={handleChangeLoginForm}
              className={!errors.password ? cls.emailInput : cls.errorInput}
              type="password"
              name="password"
            />
            {errors.password ? <div className={cls.errorBlock}>{errors.password}</div> : <></>}
          </div>
          <p className={cls.p}>Забыли пароль?</p>
          <MainButton
            isDisabled={!isValid}
            handleClick={pushLoginForm}
            width="274"
            heigth="39"
            isGradient
            text="Войти"
          />
        </form>
      </div>
    </div>
  );
};

export default TabsAuthorizationSignIn;

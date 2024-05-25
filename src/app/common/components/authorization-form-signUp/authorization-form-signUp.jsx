import React, { useState } from 'react';
import cls from './authorization-form-signUp.module.css';
import MainButton from '../../../reusable-components/main-button';

const AuthorizationFormSignUp = () => {
  const [registerForm, setRegisterForm] = useState({
    name: '',
    secondName: '',
    email: '',
    politic: false,
    news: false
  });
  const handleChangeRegisterForm = ({ target }) => {
    setRegisterForm((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };
  const handleChangeRegisterFormCheckbox = ({ target }) => {
    setRegisterForm((prevState) => ({
      ...prevState,
      [target.name]: target.value === 'on' ? true : false
    }));
  };
  const pushRegisterForm = () => {
    console.log(registerForm);
  };
  return (
    <div className={cls.signIn}>
      <div className={cls.contant}>
        <form className={cls.formContant} action="login">
          {/* // TODO поменять на массив и проходиться по нему */}
          <div className={cls.email}>
            <label htmlFor="name">Имя</label>
            <input
              onChange={handleChangeRegisterForm}
              className={cls.emailInput}
              type="name"
              name="name"
              placeholder="Имя"
            />
          </div>
          <div className={cls.email}>
            <label htmlFor="secondName">Фамилия</label>
            <input
              onChange={handleChangeRegisterForm}
              className={cls.emailInput}
              type="text"
              name="secondName"
              placeholder="Фамилия"
            />
          </div>
          <div className={cls.email}>
            <label htmlFor="email">E-mail</label>
            <input
              onChange={handleChangeRegisterForm}
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
              onChange={handleChangeRegisterForm}
              className={cls.emailInput}
              type="password"
              name="password"
            />
          </div>
          <div className={cls.checkbox}>
            <div className={cls.checkboxBlock}>
              <div className={cls.inputBlock}>
                <input
                  onChange={handleChangeRegisterFormCheckbox}
                  className={cls.checkboxItem}
                  type="checkbox"
                  id="politic"
                  name="politic"
                />
              </div>
              <div className={cls.labelBlock}>
                <label className={cls.checkboxText} htmlFor="politic">
                  Я согласен с{' '}
                  <span className={cls.checkboxTextLink}>политикой конфиденциальности</span> и с{' '}
                  <span className={cls.checkboxTextLink}>обработкой персональных данных</span>
                </label>
              </div>
            </div>
            <div className={cls.checkboxBlock}>
              <div className={cls.inputBlock}>
                <input
                  onChange={handleChangeRegisterFormCheckbox}
                  className={cls.checkboxItem}
                  value=""
                  type="checkbox"
                  id="news"
                  name="news"
                />
              </div>
              <div className={cls.labelBlock}>
                <label className={cls.checkboxText} htmlFor="news">
                  <span>Я хочу получать новости и узнавать об акциях первым</span>
                </label>
              </div>
            </div>
          </div>
          {/* <div className={cls.checkbox}>
            <input className={cls.checkboxItem} type="checkbox" id="news" name="news" />
            <label className={cls.checkboxText} htmlFor="news">
              Я хочу получать новости и узнавать об акциях первым
            </label>
          </div> */}
          <div className={cls.registerButton}>
            <MainButton
              handleClick={pushRegisterForm}
              width="274"
              heigth="39"
              isGradient
              text="Зарегистрироваться"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthorizationFormSignUp;

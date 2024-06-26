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
  const pushRegisterForm = (e) => {
    e.preventDefault();
    console.log(registerForm);
  };
  const registerFormInputsArray = [
    { htmlfor: 'name', type: 'name', name: 'name', placeholder: 'Имя' },
    { htmlfor: 'secondName', type: 'text', name: 'secondName', placeholder: 'Фамилия' },
    { htmlfor: 'email', type: 'email', name: 'email', placeholder: 'E-mail' },
    { htmlfor: 'password', type: 'password', name: 'password', placeholder: 'Пароль' }
  ];
  return (
    <div className={cls.signIn}>
      <div className={cls.contant}>
        <form className={cls.formContant} action="login">
          {registerFormInputsArray &&
            registerFormInputsArray.map((item) => (
              <div className={cls.email}>
                <label htmlFor={item.htmlfor}>{item.placeholder}</label>
                <input
                  placeholder={item.placeholder}
                  onChange={handleChangeRegisterForm}
                  className={cls.emailInput}
                  type={item.type}
                  name={item.name}
                />
              </div>
            ))}

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

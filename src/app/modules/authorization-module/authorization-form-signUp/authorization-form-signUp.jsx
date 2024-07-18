import React, { useEffect, useState } from 'react';
import cls from './authorization-form-signUp.module.css';
import MainButton from '../../../reusable-components/main-button';
import { useDispatch } from 'react-redux';
import { signUp } from '../../../store/currentUser';
import { validator } from '../../../utils/validator';
import { setModalRegisterForm } from '../../../store/modals';
const AuthorizationFormSignUp = () => {
  const dispatch = useDispatch();

  const [registerForm, setRegisterForm] = useState({
    name: '',
    politic: false,
    news: false,
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const validatorConfig = {
    email: {
      isRequired: {
        message: 'Электронная почта обязательна для заполнения'
      },
      isEmail: {
        message: 'Email введен некорректно'
      }
    },
    name: {
      isRequired: {
        message: 'Имя обязательно для заполнения'
      },
      min: {
        message: 'Имя должно состоять минимум из 3 символов',
        value: 3
      }
    },
    password: {
      isRequired: {
        message: 'Пароль обязателен для заполнения'
      },
      isCapitalSymbol: {
        message: 'Пароль должен содержать хотя бы одну заглавную букву'
      },
      isContainDigit: {
        message: 'Пароль должен содержать хотя бы одно число'
      },
      min: {
        message: 'Пароль должен состоять минимум из 8 символов',
        value: 8
      }
    }
  };

  useEffect(() => {
    validate();
  }, [registerForm]);

  const validate = () => {
    const allErrors = validator(registerForm, validatorConfig);
    setErrors(allErrors);
    return Object.keys(allErrors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

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
    dispatch(signUp(registerForm));
    dispatch(setModalRegisterForm(false));
  };
  const registerFormInputsArray = [
    { htmlfor: 'name', type: 'name', name: 'name', placeholder: 'Имя', error: errors?.name },
    { htmlfor: 'email', type: 'email', name: 'email', placeholder: 'E-mail', error: errors?.email },
    {
      htmlfor: 'password',
      type: 'password',
      name: 'password',
      placeholder: 'Пароль',
      error: errors?.password
    }
  ];
  return (
    <div className={cls.signIn}>
      <div className={cls.contant}>
        <form className={cls.formContant} action="login">
          {registerFormInputsArray &&
            registerFormInputsArray.map((item) => (
              <div key={item.name} className={cls.email}>
                <label htmlFor={item.htmlfor}>{item.placeholder}</label>
                <input
                  placeholder={item.placeholder}
                  onChange={handleChangeRegisterForm}
                  className={!item.error ? cls.emailInput : cls.inputError}
                  type={item.type}
                  name={item.name}
                />
                {item.error ? <div className={cls.errorText}>{item.error}</div> : <></>}
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
          <div className={cls.registerButton}>
            <MainButton
              handleClick={pushRegisterForm}
              width="274"
              heigth="39"
              isGradient
              text="Зарегистрироваться"
              isDisabled={!isValid}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthorizationFormSignUp;

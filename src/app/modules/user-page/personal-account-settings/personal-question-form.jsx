import React from 'react';
import cls from './personal-question-form.module.css';
import MainButton from '../../../reusable-components/main-button';

const PersonalQuestionForm = () => {
  return (
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
  );
};

export default PersonalQuestionForm;

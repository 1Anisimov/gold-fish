import React from 'react';
import cls from './main-modal.module.css';
import { useDispatch } from 'react-redux';
import { setMainModal } from '../../store/modals';

const Modal = ({ children, handleClick }) => {
  const dispatch = useDispatch();

  const closeChanged = ({ target }) => {
    if (target.id === 'closed') {
      dispatch(setMainModal(false));
    }
  };

  return (
    <div id="closed" onClick={closeChanged} className={cls.changeFormBlock}>
      <div className={cls.changeFormBlockContainer}>
        <div className={cls.changeFormContent}>
          <div className={cls.changeFormContainer}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

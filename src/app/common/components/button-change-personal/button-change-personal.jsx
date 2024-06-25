import React from 'react';
import cls from './button-change-personal.module.css';
import iconChange from '../../../image/icons/icon_change_button.png';
import { useDispatch } from 'react-redux';
import { setChangeName, setMainModal } from '../../../store/modals';

const ButtonChangePersonal = ({ name }) => {
  const dispatch = useDispatch();

  const changeOpenClosed = (id) => {
    dispatch(setChangeName(id));
    dispatch(setMainModal(true));
  };

  return (
    <div className={cls.buttonBlock}>
      <button onClick={() => changeOpenClosed(name)}>
        <img src={iconChange} alt="" />
        <span className={cls.buttonBlockText}>Изменить</span>
      </button>
    </div>
  );
};

export default ButtonChangePersonal;

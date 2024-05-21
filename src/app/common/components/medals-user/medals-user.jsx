import React from 'react';
import cls from './medals-user.module.css';

//img
import goldMedal from '../../../image/medal_gold.png';
import silverMedal from '../../../image/medal_silver.png';
import cuprumMedal from '../../../image/medal_cuprum.png';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../../store/currentUser';

const MedalsUser = () => {
  const currentUser = useSelector(getCurrentUser());

  return (
    <div className={cls.medalsBlock}>
      <div className={cls.blockContent}>
        <div className={cls.imageBlock}>
          <img src={cuprumMedal} alt="" />
        </div>
        <div className={cls.textBlock}>
          <div className={cls.textContentTop}>5% «Новичок» </div>
          <div className={cls.textContentBottom}>
            <span className={cls.status}>Получено</span>
            <span className={cls.money}>1000</span>
          </div>
        </div>
      </div>
      <div className={cls.blockContent}>
        <div className={cls.imageBlock}>
          <img src={silverMedal} alt="" />
        </div>
        <div className={cls.textBlock}>
          <div className={cls.textContentTop}>10% «Любитель» </div>
          <div className={cls.textContentBottom}>
            <span className={cls.status}>В процессе</span>
            <span className={cls.money}>5000</span>
          </div>
        </div>
      </div>
      <div className={cls.blockContent}>
        <div className={cls.imageBlock}>
          <img src={goldMedal} alt="" />
        </div>
        <div className={cls.textBlock}>
          <div className={cls.textContentTop}>5% «Профессионал» </div>
          <div className={cls.textContentBottom}>
            <span className={cls.status}>{'Недоступно'}</span>
            <span className={cls.money}>10000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedalsUser;

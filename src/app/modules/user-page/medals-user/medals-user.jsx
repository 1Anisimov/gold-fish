import React, { useMemo } from 'react';
import cls from './medals-user.module.css';

//img
import goldMedal from '../../../image/medal_gold.png';
import silverMedal from '../../../image/medal_silver.png';
import cuprumMedal from '../../../image/medal_cuprum.png';
import { useSelector } from 'react-redux';
import { getCurrentUserTotalPurchase, getLoadingStatus } from '../../../store/currentUser';

const MedalsUser = () => {
  const loadingStatus = useSelector(getLoadingStatus());
  const totalPurchase = useSelector(getCurrentUserTotalPurchase());

  const findOutWhatRank = (sum) => {
    if (sum < 1000) {
      return {
        recruit: 'В процессе',
        amateur: 'Недоступен',
        professional: 'Недоступен'
      };
    }
    if (sum >= 1000 && sum < 5000) {
      return {
        recruit: 'Получено',
        amateur: 'В процессе',
        professional: 'Недоступен'
      };
    }
    if (sum >= 5000 && sum < 10000) {
      return {
        recruit: 'Получено',
        amateur: 'Получено',
        professional: 'В процессе'
      };
    }
    if (sum >= 10000) {
      return {
        recruit: 'Получено',
        amateur: 'Получено',
        professional: 'Получено'
      };
    }
  };

  const currentRank = useMemo(() => findOutWhatRank(totalPurchase), [totalPurchase]);

  return loadingStatus === 'READY' ? (
    <div className={cls.medalsBlock}>
      <div className={cls.blockContent}>
        <div className={cls.imageBlock}>
          <img src={cuprumMedal} alt="" />
        </div>
        <div
          className={cls.textBlock}
          style={currentRank?.recruit === 'Недоступен' ? { opacity: '0.2' } : {}}>
          <div className={cls.textContentTop}>5% «Новичок» </div>
          <div className={cls.textContentBottom}>
            <span className={cls.status}>{currentRank?.recruit}</span>
            <span className={cls.money}>1000</span>
          </div>
        </div>
      </div>
      <div className={cls.blockContent}>
        <div className={cls.imageBlock}>
          <img src={silverMedal} alt="" />
        </div>
        <div
          className={cls.textBlock}
          style={currentRank?.amateur === 'Недоступен' ? { opacity: '0.2' } : {}}>
          <div className={cls.textContentTop}>10% «Любитель» </div>
          <div className={cls.textContentBottom}>
            <span className={cls.status}>{currentRank?.amateur}</span>
            <span className={cls.money}>5000</span>
          </div>
        </div>
      </div>
      <div className={cls.blockContent}>
        <div className={cls.imageBlock}>
          <img src={goldMedal} alt="" />
        </div>
        <div
          className={cls.textBlock}
          style={currentRank?.professional === 'Недоступен' ? { opacity: '0.2' } : {}}>
          <div className={cls.textContentTop}>5% «Профессионал» </div>
          <div className={cls.textContentBottom}>
            <span className={cls.status}>{currentRank?.professional}</span>
            <span className={cls.money}>10000</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default MedalsUser;

import React from 'react';
import cls from './loyalty-card.module.css';
import logoImg from '../../image/logo_goldFish_card_orange.png';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../store/currentUser';

const LoyaltyCard = () => {
  const user = useSelector(getCurrentUser());
  //TODO: вместо трех компонентов сделать один
  if (user.grade === 'Новичок') {
    return (
      <div className={cls.loyaltyCard}>
        <div className={cls.loyaltyCardColorCuprum}>
          <div className={cls.loyaltyCardContentCuprum}>
            <div className={cls.blockContent}>
              <div className={cls.logoBlock}>
                <img className={cls.logoBlock} src={logoImg} alt="" />
              </div>
              <div className={cls.saleTextCuprum}>{`-5%`}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (user.grade === 'Любитель') {
    return (
      <div className={cls.loyaltyCard}>
        <div className={cls.loyaltyCardColorSilver}>
          <div className={cls.loyaltyCardContentSilver}>
            <div className={cls.blockContent}>
              <div className={cls.logoBlock}>
                <img className={cls.logoBlock} src={logoImg} alt="" />
              </div>
              <div className={cls.saleTextSilver}>{`-10%`}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (user.grade === 'Профессионал') {
    return (
      <div className={cls.loyaltyCard}>
        <div className={cls.loyaltyCardColorGold}>
          <div className={cls.loyaltyCardContentGold}>
            <div className={cls.blockContent}>
              <div className={cls.logoBlock}>
                <img className={cls.logoBlock} src={logoImg} alt="" />
              </div>
              <div className={cls.saleTextGold}>{`-15%`}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default LoyaltyCard;

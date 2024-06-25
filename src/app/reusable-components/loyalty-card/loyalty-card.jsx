import React from 'react';
import cls from './loyalty-card.module.css';
import logoImg from '../../image/logo_goldFish_card_orange.png';

const LoyaltyCard = ({ userGrade }) => {
  const gradesArray = [
    {
      grade: 'beginner',
      cardColor: cls.loyaltyCardColorCuprum,
      cardContent: cls.loyaltyCardContentCuprum,
      cardText: cls.saleTextCuprum,
      cardSale: '-5%'
    },
    {
      grade: 'amateur',
      cardColor: cls.loyaltyCardColorSilver,
      cardContent: cls.loyaltyCardContentSilver,
      cardText: cls.saleTextSilver,
      cardSale: '-10%'
    },
    {
      grade: 'professional',
      cardColor: cls.loyaltyCardColorGold,
      cardContent: cls.loyaltyCardContentGold,
      cardText: cls.saleTextGold,
      cardSale: '-15%'
    }
  ];

  return gradesArray.map((item) => {
    if (item.grade === userGrade) {
      return (
        <div className={cls.loyaltyCard}>
          <div className={item.cardColor}>
            <div className={item.cardContent}>
              <div className={cls.blockContent}>
                <div className={cls.logoBlock}>
                  <img className={cls.logoBlock} src={logoImg} alt="" />
                </div>
                <div className={item.cardText}>{item.cardSale}</div>
              </div>
            </div>
          </div>
        </div>
      );
    } else return <></>;
  });
};

export default LoyaltyCard;

import React from 'react';
import cls from './block-info.module.css';
import imageInfo from '../../../image/Mask Group.png';

const BlockInfo = () => {
  return (
    <>
      <div className={cls.block_info}>
        <div className={cls.info_container}>
          <div className={cls.info_left}>
            <h1>Об игровом центре «GoldFish»</h1>
            <div>
              <div className={cls.info_left__text}>
                «GoldFish»- магазин, в котором Вы можете купить отличный подарок как для себя, так и
                для своих близких
              </div>{' '}
              <div className={cls.info_left__text}>
                В ассортименте нашего магазина представлены тысячи настольных игр на любой вкус:
                простые и посложнее, семейные и только для взрослых, для двоих и для больших
                компаний, детективные и логические, ролевые и стратегические настолки. «GoldFish»
                также регулярно проводит собственные игротеки:турниры по Magic: the Gathering (от
                компании Wizards of the coast) и Warhammer (от Games Workshop).
              </div>{' '}
              <div className={cls.info_left__text}>
                В нашем магазине можно найти нужные аксессуары для любимых игр (протекторы для карт
                и коллекций), инструменты для самостоятельного оформления и покраски фигурок (кейсы,
                подставки, краски Vallejo и др.) и многое другое.
              </div>{' '}
              <div className={cls.info_left__text}>
                «GoldFish» - это не только магазин настольных игр, но и полноценный хобби-центр.
                Здесь можно арендовать столы для игр с друзьями, проходить обучение и мастер-классы
                по интересующим тебя играм, заводить новые знакомства и приобщаться к игровому
                комьюнити!
              </div>
            </div>
          </div>
          <div className={cls.info_right}>
            <img src={imageInfo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockInfo;

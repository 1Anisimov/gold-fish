import React from 'react';
import imageCard1 from '../image/img_more_info_1.png';
import imageCard2 from '../image/img_more_info_2.png';
import imageCard3 from '../image/img_more_info_3.png';
import MoreInfoCard from '../reusable-components/more-info-card';
import MainButton from '../reusable-components/main-button';

const MoreInfo = () => {
  const moreInfoCardArray = [
    {
      id: 1,
      img: imageCard1,
      title: 'Аэронавтика Империалис: введение в игру',
      text: 'Детально ознакомимся с правилами игры'
    },
    {
      id: 2,
      img: imageCard2,
      title: 'Лучшие настолки в Steam для игры с друзьми на карантине',
      text: 'По рейтингу 2021'
    },
    {
      id: 3,
      img: imageCard3,
      title: 'Желанные, но маловероятные релизы',
      text: 'Небольшой список «а вот бы...»'
    }
  ];

  return (
    <>
      <div className="more_info">
        <div className="container_main">
          <h2 className="more_info_title">Больше интересной информации</h2>
          <div className="more_info_block">
            {moreInfoCardArray &&
              moreInfoCardArray.map((item) => (
                <MoreInfoCard key={item.id} img={item.img} title={item.title} text={item.text} />
              ))}
          </div>
          <div className="more_info_button">
            <MainButton width="311" heigth="71" text="Узнать больше" big />
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreInfo;

import React from 'react';
import imgLeft from '../image/img_events_1.png';
import imgRight from '../image/img_events_2.png';
import CardEvents from '../reusable-components/events-card';
import MainButton from '../reusable-components/main-button';

const UpcomingEvents = () => {
  return (
    <>
      <div className="upcoming_events">
        <div className="container_main">
          <div className="upcoming_events_top">
            <h2 className="upcoming_events_h2">Ближайшие мероприятия</h2>
            <div className="upcoming_events_block">
              <CardEvents
                title="Hallowin с GoldFish"
                date="31 октября 2021 г. 19:00"
                text="Мы соберемся,чтобы узнать,кто же все-таки был Мафией и что будет с тем,кого
                  убили.."
                img={imgLeft}
              />
              <CardEvents
                title="Турнир Warhammer"
                date="9 ноября 2021 г. 18:30"
                text="Готов сразиться в ожесточенной битве Warhammer? Нет? Мы тебя
              обязтально научим!"
                img={imgRight}
              />
            </div>
          </div>
          <div className="upcoming_events_block_button">
            <MainButton text="Показать еще" isGradient width="311" heigth="71" big />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;

import React, { useState } from 'react';
import cls from './events-card.module.css';

const CardEvents = ({ title, date, text, fullText, img, price, start }) => {
  const [textContent, setTextContent] = useState(text);
  const changeTextContentHover = () => {
    textContent === text ? setTextContent(fullText) : setTextContent(text);
  };
  return (
    <>
      <div
        onMouseEnter={changeTextContentHover}
        onMouseLeave={changeTextContentHover}
        className={cls.upcoming_events_left}>
        <img src={img} alt="" />
        <div className={cls.upcoming_events_bottom}>
          <div className={cls.upcoming_events_bottom_block}>
            <span className={cls.upcoming_events_bottom_block_h2}>{title}</span>
            <span className={cls.upcoming_events_bottom_block_span}>{date}</span>
          </div>

          <div className={cls.upcoming_events_bottom_text}>
            {textContent}
            {textContent === fullText ? (
              <div className={cls.fullText_upcoming_events}>
                <p>{start}</p>
                <p>{price}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardEvents;

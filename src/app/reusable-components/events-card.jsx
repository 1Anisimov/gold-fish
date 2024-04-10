import React from 'react';

const CardEvents = ({ title, date, text, img }) => {
  return (
    <>
      <div className="upcoming_events_left">
        <img src={img} alt="" />
        <div className="upcoming_events_bottom">
          <div className="upcoming_events_bottom_block">
            <span className="upcoming_events_bottom_block_h2">{title}</span>
            <span className="upcoming_events_bottom_block_span">{date}</span>
          </div>

          <div className="upcoming_events_bottom_text">{text}</div>
        </div>
      </div>
    </>
  );
};

export default CardEvents;

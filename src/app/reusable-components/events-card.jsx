import React, { useState } from 'react';

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
        className="upcoming_events_left">
        <img src={img} alt="" />
        <div className="upcoming_events_bottom">
          <div className="upcoming_events_bottom_block">
            <span className="upcoming_events_bottom_block_h2">{title}</span>
            <span className="upcoming_events_bottom_block_span">{date}</span>
          </div>

          <div className="upcoming_events_bottom_text">
            {textContent}
            {textContent === fullText ? (
              <div className="fullText_upcoming_events">
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

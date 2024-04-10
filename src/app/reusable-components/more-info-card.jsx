import React from 'react';

const MoreInfoCard = ({ img, title, text }) => {
  return (
    <>
      <div className="more_info_card">
        <img src={img} alt="" />
        <div className="more_info_card_text">
          <h3 className="more_info_card_text_title">{title}</h3>
          <span className="more_info_card_text_span">{text} </span>
        </div>
      </div>
    </>
  );
};

export default MoreInfoCard;

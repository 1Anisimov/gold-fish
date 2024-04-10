import React from 'react';

const MainButton = ({ width, heigth, text, isGradient, big }) => {
  const checkSize = () => {
    if (big) {
      return '23px';
    }
    return '16px';
  };
  return (
    <>
      <button
        className={isGradient ? 'button-gradient' : 'button-white'}
        style={{
          height: heigth + 'px',
          width: width + 'px',
          fontSize: checkSize()
        }}>
        <span>{text}</span>
      </button>
    </>
  );
};

export default MainButton;

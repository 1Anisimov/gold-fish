import React from 'react';

const MainButton = ({ width, heigth, text, isGradient, big, handleClick, isDisabled }) => {
  const checkSize = () => {
    if (big) {
      return '23px';
    }
    return '16px';
  };
  return (
    <>
      <button
        onClick={handleClick}
        className={isGradient ? 'button-gradient' : 'button-white'}
        style={{
          height: heigth + 'px',
          width: width ? width + 'px' : '100%',
          fontSize: checkSize()
        }}>
        <span>{text}</span>
      </button>
    </>
  );
};

export default MainButton;

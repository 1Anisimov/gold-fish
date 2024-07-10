import React from 'react';

const MainButton = ({ width, heigth, text, isGradient, big, handleClick, isDisabled }) => {
  return (
    <>
      <button
        onClick={handleClick}
        className={isDisabled ? 'button_disabled' : isGradient ? 'button-gradient' : 'button-white'}
        disabled={isDisabled ? true : false}
        style={{
          height: heigth + 'px',
          width: width ? width + 'px' : '100%',
          fontSize: big ? '23px' : '16px'
        }}>
        <span>{text}</span>
      </button>
    </>
  );
};

export default MainButton;

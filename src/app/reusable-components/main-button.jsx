import React from 'react';

const MainButton = ({ width, heigth, text, isGradient, big, handleClick, isDisabled }) => {
  return (
    <>
      <button
        onClick={handleClick}
        className={isGradient ? 'button-gradient' : 'button-white'}
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

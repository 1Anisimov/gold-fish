import React from 'react';

const BottomContainerBg = ({ children }) => {
  return (
    <div className="bottom_container_bg">
      <div className="bottom_main_container">{children}</div>
    </div>
  );
};

export default BottomContainerBg;

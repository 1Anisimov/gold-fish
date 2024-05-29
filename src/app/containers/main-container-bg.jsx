import React from 'react';

const MainContainerBg = ({ children }) => {
  return (
    <div className="main_container_bg">
      <div className="main_container">{children}</div>
    </div>
  );
};

export default MainContainerBg;

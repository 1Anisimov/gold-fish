import React from 'react';

const HeaderBottomContainerBg = ({ children }) => {
  return (
    <div className="header_bottom_container_bg">
      <div className="header_container_top">{children}</div>
    </div>
  );
};

export default HeaderBottomContainerBg;

import React, { useState } from "react";

const HeaderMenu = () => {
  const [colorCatalog, setColorCatalog] = useState(false);
  const handleEnter = () => {
    setColorCatalog(true);
  };
  const handleDown = () => {
    setColorCatalog(false);
  };
  return (
    <div className="header-menu">
      <div
        className="header-menu-link"
        onMouseEnter={handleEnter}
        onMouseLeave={handleDown}
      >
        <svg
          className="header-menu-burger"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
        >
          <rect
            width="16"
            height="2"
            fill={colorCatalog ? "#F9A43F" : "#2A2A2A"}
          />
          <rect
            y="6"
            width="16"
            height="2"
            fill={colorCatalog ? "#F9A43F" : "#2A2A2A"}
          />
          <rect
            y="12"
            width="16"
            height="2"
            fill={colorCatalog ? "#F9A43F" : "#2A2A2A"}
          />
        </svg>
        <a href="#" className="header-menu-link">
          Каталог
        </a>
      </div>
      <div>
        <a href="#" className="header-menu-link">
          Варгеймеры
        </a>
      </div>
      <div>
        <a href="#" className="header-menu-link">
          Мероприятия
        </a>
      </div>
      <div>
        <a href="#" className="header-menu-link">
          О нас
        </a>
      </div>
      <div>
        <a href="#" className="header-menu-link">
          Контакты
        </a>
      </div>
      <div>Иконки</div>
    </div>
  );
};

export default HeaderMenu;

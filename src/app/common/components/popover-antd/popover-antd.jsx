import React from 'react';
import { ConfigProvider, Popover, Space } from 'antd';
const content = (
  <div>
    <p>Телефон скопирован</p>
  </div>
);
const PopoverAntd = ({ children }) => (
  <ConfigProvider
    theme={{
      components: {
        Popover: {
          zIndexPopup: 100000
        },
        Button: {
          //   textHoverBg: 'red'
        }
      }
    }}>
    <Space wrap>
      <Popover content={content} title="" trigger="click">
        <span type="text" className="button_pop-up_my">
          {children}
        </span>
      </Popover>
    </Space>
  </ConfigProvider>
);
export default PopoverAntd;

import React from 'react';
import { ConfigProvider, Tabs } from 'antd';
const onChange = (key) => {
  console.log(key);
};

const Tab = ({ tabItems, tabSize, tabClassName }) => (
  <ConfigProvider
    theme={{
      components: {
        Tabs: {
          inkBarColor: 'rgba(42, 42, 42, 1)',
          itemActiveColor: 'rgba(42, 42, 42, 1)',
          itemHoverColor: 'rgba(42, 42, 42, 1)',
          itemSelectedColor: 'rgba(42, 42, 42, 1)',
          titleFontSize: tabSize
        }
      }
    }}>
    <Tabs
      className={tabClassName ? 'w340' : ''}
      defaultActiveKey="1"
      items={tabItems}
      onChange={onChange}
    />
  </ConfigProvider>
);
export default Tab;

import React from 'react';
import { ConfigProvider, Tabs } from 'antd';
const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: '1',
    label: 'Описание',
    children: 'Content of Tab Pane 1'
  },
  {
    key: '2',
    label: 'Характеристики',
    children: 'Content of Tab Pane 2'
  },
  {
    key: '3',
    label: 'Правила',
    children: 'Content of Tab Pane 3'
  },
  {
    key: '4',
    label: 'Вопрос-ответ',
    children: <div>hello</div>
  }
];
const Tab = () => (
  <ConfigProvider
    theme={{
      components: {
        Tabs: {
          inkBarColor: 'rgba(42, 42, 42, 1)',
          itemActiveColor: 'rgba(42, 42, 42, 1)',
          itemHoverColor: 'rgba(42, 42, 42, 1)',
          itemSelectedColor: 'rgba(42, 42, 42, 1)',
          titleFontSize: 22
        }
      }
    }}>
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  </ConfigProvider>
);
export default Tab;

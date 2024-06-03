import React from 'react';
import { ConfigProvider, Tabs } from 'antd';
import AdminChangeProduct from '../admin-change-product/admin-change-product';
const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: '1',
    label: 'Изменить товар',
    children: <AdminChangeProduct />
  },
  {
    key: '2',
    label: 'Создать товар',
    children: 'Content of Tab Pane 2'
  },
  {
    key: '3',
    label: 'Поменять товар на главной',
    children: 'Content of Tab Pane 3'
  }
];
const AdminTabs = () => (
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
export default AdminTabs;

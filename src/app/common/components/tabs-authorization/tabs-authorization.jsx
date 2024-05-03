import React from 'react';
import { ConfigProvider, Tabs } from 'antd';
import TabsAuthorizationSignIn from '../tabs-authorization-signIn/tabs-authorization-signIn';
import AuthorizationFormSignUp from '../authorization-form-signUp/authorization-form-signUp';

const items = [
  {
    key: '1',
    label: 'Вход',
    children: <TabsAuthorizationSignIn />
  },
  {
    key: '2',
    label: 'Регистрация',
    children: <AuthorizationFormSignUp />
  }
];
const TabsAuthorization = () => (
  <ConfigProvider
    theme={{
      components: {
        Tabs: {
          inkBarColor: 'rgba(42, 42, 42, 1)',
          itemActiveColor: 'rgba(42, 42, 42, 1)',
          itemHoverColor: 'rgba(42, 42, 42, 1)',
          itemSelectedColor: 'rgba(42, 42, 42, 1)',
          titleFontSize: 19
        }
      }
    }}>
    <Tabs className="w340" defaultActiveKey="1" items={items} />
  </ConfigProvider>
);
export default TabsAuthorization;

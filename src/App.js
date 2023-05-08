import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  HomeOutlined,
} from '@ant-design/icons';

import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './app.css'

const { Header, Sider, Content, Footer } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const navigate = useNavigate()

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="sider" />
        <Menu
          className='menu'

          onClick={({key}) => {
            navigate(key)
          }}

          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '/',
              icon: <HomeOutlined />,
              label: 'Home',
               
            },
            {
              key: '/about',
              icon: <UserOutlined />,
              label: 'About',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          João Lucas ©2023 Ant Design Test
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
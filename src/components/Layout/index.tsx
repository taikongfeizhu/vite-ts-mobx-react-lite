import React from 'react';
import { Layout } from 'antd';
import Nav from '@/components/Nav';

const { Header, Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const App = ({ children }: Props) => {
  return (
    <Layout className='min-h-screen flex bg-gray-50'>
      <Header className='w-full bg-white'>
        <Nav />
      </Header>
      <Content>{children}</Content>
    </Layout>
  );
};

export default App;

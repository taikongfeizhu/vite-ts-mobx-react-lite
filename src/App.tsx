import React from 'react';
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import zhCN from 'antd/lib/locale/zh_CN';
import Nav from '@/components/Nav';
import RootStore from '@/stores';
import Routes from '@/routers';

import './styles/index.less';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <RootStore>
        <Router>
          <Nav />
          <Routes />
        </Router>
      </RootStore>
    </ConfigProvider>
  );
}

export default App;

import React from 'react';
import { ConfigProvider } from 'antd';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import zhCN from 'antd/lib/locale/zh_CN';
import RootStore from '@/stores';
import routes from '@/routes';

import './styles/index.less';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <RootStore>
        <Router>
          <Switch>
            {routes.map((route) => (
              <Route exact={route.exact} key={route.path} path={route.path}>
                <route.component />
              </Route>
            ))}
          </Switch>
        </Router>
      </RootStore>
    </ConfigProvider>
  );
}

export default App;

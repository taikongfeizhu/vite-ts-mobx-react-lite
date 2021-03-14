import React from 'react';
import { ConfigProvider } from 'antd';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import RootStore from '@/stores';
import zhCN from 'antd/lib/locale/zh_CN';

import routes from '@/routes';

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
import React, { useState } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, HomeFilled } from '@ant-design/icons';
import { MenuInfo } from 'rc-menu/lib/interface';
import { useHistory } from 'react-router-dom';

import style from './index.module.less';

const Nav: React.FC = () => {
  const [current, changeCurrent] = useState<string>('page1');
  const history = useHistory();

  const handleClick = (e: MenuInfo) => {
    const key = String(e.key);
    history.push(key);
    changeCurrent(key);
  };

  return (
    <Menu
      onClick={(e) => handleClick(e)}
      selectedKeys={[current]}
      mode='horizontal'
    >
      <Menu.Item key='/' icon={<HomeFilled />}>
        <span className={style.text}>Home</span>
      </Menu.Item>
      <Menu.Item key='/about' icon={<AppstoreOutlined />}>
        <span className={style.text}>About</span>
      </Menu.Item>
    </Menu>
  );
};

export default Nav;

import React, { useState } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, HomeFilled } from '@ant-design/icons';
import { MenuInfo } from 'rc-menu/lib/interface';
import { useHistory } from 'react-router-dom';

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
        Home
      </Menu.Item>
      <Menu.Item key='/about' icon={<AppstoreOutlined />}>
        About
      </Menu.Item>
    </Menu>
  );
};

export default Nav;

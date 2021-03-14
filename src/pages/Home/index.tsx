import { Button } from 'antd';
import React from 'react';
import { useStores } from '@/hooks';
import './style.less';

export default function Home() {
  const {
    commonStore: { currentNode },
  } = useStores();

  console.log(currentNode, '>>>>');
  return (
    <div>
      <div className='container'>Search artifacts {currentNode}</div>
      <Button type='primary'>Home</Button>
    </div>
  );
}

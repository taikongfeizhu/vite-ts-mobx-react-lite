import React from 'react';
import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStores } from '@/hooks';
import styles from './index.module.less';

const About = observer(() => {
  const {
    commonStore: { compGet, add, sub },
  } = useStores();

  const addHandle = () => {
    add();
  };

  const subHandle = () => {
    sub();
  };

  return (
    <div className={styles.container}>
      <p>{compGet}</p>
      <Button onClick={addHandle}>+</Button>
      <Button onClick={subHandle}>-</Button>
    </div>
  );
});

export default About;

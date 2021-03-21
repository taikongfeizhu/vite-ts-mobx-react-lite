import React from 'react';
import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStores } from '@/hooks';
import styles from './index.module.less';

const About = observer(() => {
  const {
    homeStore: { compGet, add, sub, reset },
    commonStore: { title },
  } = useStores();

  const addHandle = () => {
    add();
  };

  const subHandle = () => {
    sub();
  };

  const resetHandle = () => {
    reset();
  };

  return (
    <div className={styles.container}>
      <div className='text-center text-gray-900 p-20'>
        <h2>{title}</h2>
        <h2 className='p-5 lg:text-lg'>count: {compGet}</h2>
        <div className='m-2'>
          <Button size='large' onClick={addHandle} className='w-20'>
            Add
          </Button>
          <Button size='large' onClick={subHandle} className='w-20'>
            Sub
          </Button>
          <Button size='large' onClick={resetHandle} className='w-20'>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
});

export default About;

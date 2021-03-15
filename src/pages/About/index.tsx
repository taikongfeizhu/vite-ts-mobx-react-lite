import React from 'react';
import { useStores } from '@/hooks';
import styles from './index.module.less';

const About = (): JSX.Element => {
  const {
    commonStore: { currentNode },
  } = useStores();

  return (
    <div className={styles.container}>
      <p>{currentNode}</p>
    </div>
  );
};

export default About;

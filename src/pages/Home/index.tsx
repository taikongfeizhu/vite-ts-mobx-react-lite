import React, { useState } from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router';
import { useStores } from '@/hooks';
import style from './index.module.less';
import logo from '/logo.svg';

export default function Home(): JSX.Element {
  const [count, setCount] = useState(0);
  const history = useHistory();
  const { commonStore } = useStores();

  return (
    <div className={style.container}>
      <header className='max-w-md w-full space-y-8 items-center'>
        <div className={style.logo}>
          <img src={logo} className='mx-auto h-36 w-auto' alt='logo' />
        </div>
        <p className='mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100'>
          {commonStore.title}
        </p>
        <p className='mt-2 text-center text-sm text-gray-600 dark:text-gray-400'>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
        </p>
        <p className='text-center text-gray-900 dark:text-gray-100'>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p className='text-center'>
          <a className='font-medium text-indigo-600 hover:text-indigo-500 dark:text-pink-400'>
            <span
              className={style.link}
              onClick={() => {
                history.push('/about');
              }}
            >
              About Page
            </span>
          </a>
          {' | '}
          <a
            className='font-medium text-indigo-600 hover:text-indigo-500 dark:text-pink-400'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

import React, { FC, PropsWithChildren, createContext } from 'react';
import CommonStore from './common';

interface StoreProps {
  commonStore: CommonStore;
}

interface Props {
  children: PropsWithChildren<any>;
}

export const RootStoreContext = createContext<StoreProps>(null!);

const RootStore: FC<Props> = ({ children }: Props) => {
  const stores = {
    commonStore: new CommonStore(),
  };

  // 注入 stores
  return (
    <RootStoreContext.Provider value={stores}>
      {children}
    </RootStoreContext.Provider>
  );
};
export default RootStore;

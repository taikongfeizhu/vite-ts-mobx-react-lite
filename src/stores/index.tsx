import React, { FC, PropsWithChildren, createContext } from 'react';
import { Container } from 'typedi';
import CommonStore from './Common';
import HomeStore from './Home';

interface StoreProps {
  commonStore: CommonStore;
  homeStore: HomeStore;
}

interface Props {
  children: PropsWithChildren<React.ReactNode>;
}

export const RootStoreContext = createContext<StoreProps>(null!);

const RootStore: FC<Props> = ({ children }: Props) => {
  const stores = {
    commonStore: Container.get<CommonStore>(CommonStore),
    homeStore: Container.get<HomeStore>(HomeStore),
  };

  return (
    <RootStoreContext.Provider value={stores}>
      {children}
    </RootStoreContext.Provider>
  );
};
export default RootStore;

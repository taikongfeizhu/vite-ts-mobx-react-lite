/**
 * mobx store hook
 */
import { useContext } from 'react';
import { RootStoreContext } from '@/stores';

const useStores = () => useContext(RootStoreContext);
export default useStores;

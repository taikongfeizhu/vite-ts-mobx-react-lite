import { isFunction } from 'lodash-es';
import { useCallback, useEffect, useState } from 'react';

export interface ServiceData {
  loading: boolean;
  error: boolean;
  update: () => void;
}
export default function useService(
  func: () => void, // 异步函数，否则不能正常捕获错误
  depends: any[],
): ServiceData {
  if (!isFunction(func)) throw new TypeError();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetch = useCallback(async () => {
    setLoading(true);
    try {
      await func();
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [func]);

  const update = useCallback(fetch, [func]);

  useEffect(() => {
    fetch();
  }, depends);

  return {
    loading: loading,
    error: error,
    update: update,
  };
}

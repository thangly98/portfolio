import { useCallback, useEffect } from 'react';

function useKeydown(key: KeyboardEvent['key'], handler: () => void) {
  const onKeyDown = useCallback((e: KeyboardEvent) => (e.key === key ? handler() : null), [key, handler]);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);
}

export default useKeydown;

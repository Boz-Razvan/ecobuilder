import { useState, useEffect } from 'react';

function useDoubleTap(onDoubleTap, delay = 300) {
  const [tap, setTap] = useState(false);

  useEffect(() => {
    if (!tap) return;
    const timerId = setTimeout(() => setTap(false), delay);
    return () => clearTimeout(timerId);
  }, [tap, delay]);

  return () => {
    if (!tap) {
      setTap(true);
    } else {
      onDoubleTap();
      setTap(false);
    }
  };
}

export default useDoubleTap;
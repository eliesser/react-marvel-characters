import React, { useState, useEffect } from 'react';

export const Loading = () => {
  const [loadingText, setLoadingText] = useState<string>('Loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prev) => {
        if (prev === 'Loading...') return 'Loading';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <div>{loadingText}</div>;
};

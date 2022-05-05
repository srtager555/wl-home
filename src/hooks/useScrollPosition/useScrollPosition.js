import React, { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScrollPosition() {
    setScrollPosition(window.scrollY);
  }

  useEffect(() => {
    handleScrollPosition();
    window.addEventListener('scroll', handleScrollPosition);
    return () => window.removeEventListener('scroll', handleScrollPosition);
  }, []);

  return scrollPosition;
}

import { useState, useEffect, useRef } from 'react';

import { useInPath } from '@hooks/useInPath';
import { useScrollPosition } from '@hooks/useScrollPosition/useScrollPosition';

import { SlideLetters } from '@components/SlideLetters';
import { Navbar } from '@components/Navbar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const sideNavRef = useRef(null);
  const scrollPosition = useScrollPosition();

  const [sLettersOpts, setSLettersOpts] = useState({});
  const [inPath, setInPath] = useState('');

  function handleChangePath() {
    useInPath(setInPath);
  }

  return (
    <>
      <Navbar path={inPath} scrollPosition={scrollPosition} sideNavRef={sideNavRef} />
      <SlideLetters sLettersOpts={sLettersOpts} scrollPosition={scrollPosition} />
      <Component
        sideNavRef={sideNavRef}
        scrollPosition={scrollPosition}
        setSLettersOpts={setSLettersOpts}
        inPath={inPath}
        callback={() => handleChangePath()}
        {...pageProps}
      />
    </>
  );
}

export default MyApp;

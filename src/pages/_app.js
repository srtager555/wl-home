import { useState, useRef } from 'react';

import { useInPath } from '@hooks/useInPath';
import { useScrollPosition } from '@hooks/useScrollPosition/useScrollPosition';

import { Navbar } from '@components/Navbar';
import { SlideLetters } from '@components/SlideLetters';
import { Footer } from '@components/Footer';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const sideNavRef = useRef(null);
  const scrollPosition = useScrollPosition();

  const [sLettersOpts, setSLettersOpts] = useState({});
  const [inPath, setInPath] = useState('');

  function HandleChangePath() {
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
        callback={() => HandleChangePath()}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

export default MyApp;

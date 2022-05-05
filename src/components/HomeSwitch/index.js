import { useRef, useEffect } from 'react';
import Link from 'next/link';

import { useCopy } from '@hooks/useCopy';

import styleHomePage from '@styles/HomePage.module.scss';

export function HomeSwitch({ bottom = false }) {
  const buttonCopyRef = useRef(null);
  const contentRef = useRef(null);

  function handleObserProjects(entries) {
    const [entry] = entries;

    if (entry.isIntersecting) {
      document.body.className = '';
    }
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: `0px`,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleObserProjects, options);
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, [contentRef]);

  return (
    <>
      <div ref={contentRef} className={`${styleHomePage['HomePage--container']}`}>
        <div className={styleHomePage['HomePage--container-main']}>
          <div
            className={
              !bottom ? styleHomePage['HomePage--introduction'] : `${styleHomePage['HomePage--introduction']} bottom`
            }
          >
            <span className="wrapping-letters--logo">WL</span>
            <div className={styleHomePage['HomePage--introducion-text']}>
              <p>
                {!bottom
                  ? `Wrapp any text in your projects in React with Wrapping Letters,
               Hover effect, Observer intersection, loading animation and more!
               Forget to wrapping any letters in JSX, wrapping letters will do
               it for you.`
                  : `Are you ready?, this is the next level to work with letters.`}
              </p>
            </div>
          </div>
          <div className={!bottom ? styleHomePage['HomePage--cta'] : `${styleHomePage['HomePage--cta']} ${styleHomePage['bottom']}`}>
            <button
              onClick={() => useCopy(buttonCopyRef)}
              ref={buttonCopyRef}
              className={styleHomePage['HomePage--cta-copyButton']}
            >
              npm install wrapping-letters-react -D
            </button>
            <div className={styleHomePage[`HomePage--cta-links`]}>{!bottom ? topLinks() : bottomLinks()}</div>
          </div>
        </div>
      </div>
    </>
  );
}

function topLinks() {
  return (
    <>
      {/* <Link href="docs/getting-started" className={styleHomePage["HomePage--cta-link"]}>
            <span className={styleHomePage["HomePage--cta-link-text"]}>Getting Started</span>
         </Link> */}
      <Link href="documentation/">
        <a className={styleHomePage['HomePage--cta-link']}>
          <span className={styleHomePage['HomePage--cta-link-text']}>Documentation</span>
        </a>
      </Link>
      {/* <Link href="docs/examples" className={styleHomePage["HomePage--cta-link"]}>
          <span className={styleHomePage["HomePage--cta-link-text"]}>Examples</span>
      </Link>
      <Link href="docs/api" className={styleHomePage["HomePage--cta-link"]}>
          <span className={styleHomePage["HomePage--cta-link-text"]}>API</span>
      </Link>
      <Link href="docs/support" className={styleHomePage["HomePage--cta-link"]}>
          <span className={styleHomePage["HomePage--cta-link-text"]}>Support</span>
      </Link>
      <Link href="docs/changelog" className={styleHomePage["HomePage--cta-link"]}>
          <span className={styleHomePage["HomePage--cta-link-text"]}>Changelog</span>
      </Link>  */}
    </>
  );
}
function bottomLinks() {
  return (
    <>
      {/* <Link href="docs/getting-started" className={styleHomePage["HomePage--cta-link"]}>
            <span className={styleHomePage["HomePage--cta-link-text"]}>Getting Started</span>
         </Link> */}
      <Link href="documentation/">
        <a className={styleHomePage['HomePage--cta-link']}>
          <span className={styleHomePage['HomePage--cta-link-text']}>Documentation</span>
        </a>
      </Link>
      {/* <Link href="docs/versions" className={styleHomePage["HomePage--cta-link"]}>
            <span className={styleHomePage["HomePage--cta-link-text"]}>Versions</span>
         </Link> */}
      <a
        href="https://www.npmjs.com/package/wrapping-letters-react"
        target="_blank"
        className={styleHomePage['HomePage--cta-link']}
      >
        <span className={styleHomePage['HomePage--cta-link-text']}>Npm</span>
      </a>
      <a
        href="https://github.com/srtager555/wrapping-letters"
        target="_blank"
        className={styleHomePage['HomePage--cta-link']}
      >
        <span className={styleHomePage['HomePage--cta-link-text']}>GitHub</span>
      </a>
      <a href="https://github.com/srtager555/wrapping-letters/issues" className={styleHomePage['HomePage--cta-link']}>
        <span className={styleHomePage['HomePage--cta-link-text']}>Report a issue!</span>
      </a>
    </>
  );
}

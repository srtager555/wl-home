import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import style from '@styles/Navbar.module.scss';
import sideBarStyle from '@styles/SideBarDocs.module.scss';

export function Navbar({ path, scrollPosition, sideNavRef }) {
  const [navState, setNavState] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  function navContent(navState) {
    return navState;
  }

  function handleActiveMobileMenu() {
    setOpenMobileMenu(!openMobileMenu);
  }

  const a = (
    <>
      <a href="https://github.com/srtager555/wrapping-letters" target="_blanks">
        GitHub
      </a>
      <a href="https://www.npmjs.com/package/wrapping-letters-react" target="_blank">
        NPM
      </a>
    </>
  );

  const b = (
    <>
      <a href="https://github.com/srtager555/wrapping-letters" target="_blanks">
        GitHub
      </a>
      <Link href="/docs">
        <a>Documentation</a>
      </Link>
    </>
  );

  useEffect(() => {
    if (path === '/') {
      if (scrollPosition >= document.body.clientHeight - window.innerHeight) setIsVisible(false);
      else if (scrollPosition > window.innerHeight) setIsVisible(true);
      else setIsVisible(false);
    }
  }, [scrollPosition]);

  useEffect(() => {
    switch (path) {
      case '/':
        setNavState(b);
        setIsVisible(false);
        break;

      case '':
        setNavState(b);
        setIsVisible(false);
        break;

      default:
        setNavState(a);
        setIsVisible(true);
        break;
    }
  }, [path]);

  return (
    <>
      <nav
        className={`${style['navbar-container']} ${isVisible ? style.show : ''}${path != '/' ? ` ${style.docs}` : ''} `}
      >
        {path === '/' ? (
          <span className="wrapping-letters--logo">WL</span>
        ) : (
          <Link href="/">
            <a className="anchor_with--logo">
              <span className="wrapping-letters--logo">WL</span>
            </a>
          </Link>
        )}
        <div className={style['navbar-container__content']}>
          {/* <Link href="">Getting started</Link> */}
          {navContent(navState)}
          <div
            className={`${style['navbar-menu__button']} ${openMobileMenu ? style.active : ''}`}
            onClick={handleActiveMobileMenu}
          >
            <span className={style['navbar-menu__button--line']}></span>
            <span className={style['navbar-menu__button--line']}></span>
          </div>
        </div>
      </nav>
      {path === '/documentation' || path === '/documentation/' ? (
        <div className={`${sideBarStyle['sideBar__docs-container']} ${openMobileMenu ? ' active' : ''}`}>
          <div className={sideBarStyle['sideBar__docs-dark__Background']}></div>
          <div ref={sideNavRef} className={sideBarStyle['sideBar__docs-container__links']}>
            <div className={sideBarStyle['sideBar__docs-container__anchor']}>
              <a onClick={handleActiveMobileMenu} href="#getting-started">
                Getting Started
              </a>
            </div>
            <div className={sideBarStyle['sideBar__docs-container__anchor']}>
              <a onClick={handleActiveMobileMenu} href="#word-options">
                wordOptions
              </a>
            </div>
            <div className={sideBarStyle['sideBar__docs-container__anchor']}>
              <a onClick={handleActiveMobileMenu} href="#structure">
                structure
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

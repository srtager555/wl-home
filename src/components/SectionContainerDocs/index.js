import { useEffect, useRef } from 'react';

import style from '@styles/Documentation.module.scss';
import sideBarStyle from '@styles/SideBarDocs.module.scss';

export function SectionContainerDocs({ children, sectionClass = '', anchorRef }) {
  const observerObj = useRef(null);

  function handleObserveDoc(entries) {
    const [entry] = entries;

    let anchorVinculed = Object.entries(anchorRef?.current?.childNodes).filter(
      (e) => e[1].children[0].hash.slice(1) === observerObj.current?.id
    );

    if (entry.isIntersecting) {
      anchorVinculed[0][1].className += ` ${sideBarStyle.active}`;
    } else {
      const anchor = anchorVinculed[0] || null;
      if (anchor) anchor[1].className = sideBarStyle['sideBar__docs-container__anchor'];
    }
  }

  useEffect(
    function () {
      const options = {
        root: null,
        rootMargin: `0px`,
        threshold: 0.2,
      };

      const observer = new IntersectionObserver(handleObserveDoc, options);
      if (observerObj.current) {
        observer.observe(observerObj.current);
      }
      return () => {
        if (observerObj.current) {
          observer.unobserve(observerObj.current);
        }
      };
    },
    [observerObj]
  );

  return (
    <div
      ref={observerObj}
      id={`${sectionClass != '' ? `${sectionClass}` : ''}`}
      className={style['documentation--container__main']}
    >
      {children}
    </div>
  );
}

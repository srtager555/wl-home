import { useEffect } from 'react';
import Link from 'next/link';

import style from '@styles/NotFound.module.scss';

export default function NotFound({ setSLettersOpts }) {
  useEffect(() => {
    setSLettersOpts({
      Slide1: [true, false],
      Slide2: [true, false],
      Slide3: [true, false],
      Slide4: [true, false],
      Slide5: [true, false],
      Slide6: [true, false],
    });
  }, []);
  return (
    <div className={style.container__main}>
      <div className={style["container__main--404"]}>
        <span className={style["container__main--404--404"]}>404</span>
        <span className={style["container__main--404--notMatch"]}>not match</span>
      </div>
      <div className={style["container__main--links"]}>
        <Link href="/">
          <a>Return to Home</a>
        </Link>
      </div>
    </div>
  );
}

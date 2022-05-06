import Image from 'next/image';

import style from "@styles/Footer.module.scss";

export function Footer() {
   return (
      <div className={style["container--main"]}>
         <div className={style["portfolio__image"]}>
            <a href="https://ttager.page/" target="_blank">
               <Image layout="fill" src="https://i.ibb.co/KjX78L4/Port-folio-TD.png" />
            </a>
         </div>
         <div className={style["text--main"]}>
            <span>WL Home page, version 0.1.0</span>
            <span>WL Home page © 2022</span>
         </div>
      </div>
   );
}

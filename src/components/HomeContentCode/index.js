import { useRef } from "react";

import { useCopy } from "@hooks/useCopy";

import style from "@styles/HomeContent.module.scss";

export function HomeContentCode({ code, color }) {
   const codeRef = useRef(null);

   return (
      <div className={`${style["container--code"]} ${style['HomeContentColor' + color]}`}>
         <button
            className={style["container--code__buttonCopy"]}
            onClick={() => useCopy(codeRef)}
         >
            Copy
         </button>
         <div className={style["container--code__code"]}>
            <pre>
               <code ref={codeRef}>{code}</code>
            </pre>
         </div>
      </div>
   );
}
